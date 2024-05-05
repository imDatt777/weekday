/* eslint-disable react-hooks/exhaustive-deps */

// Importing NPM Dependencies
import React, { useEffect, useState, useRef } from "react";

// Importing Component
import Card from "./card";

// Importing Stylesheet
import "./styles/jobList.css";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [offset, setOffset] = useState(1);
    const observerTarget = useRef(null);

    /**
     * FetchJobs
     *
     * @description - Method to fetch jobs from api
     */
    const fetchJobs = async () => {
        try {
            const response = await fetch(
                "https://api.weekday.technology/adhoc/getSampleJdJSON",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        limit: 10,
                        offset: offset,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await response.json();
            setJobs((prevJobs) => [...prevJobs, ...result?.jdList]);
            setOffset((prev) => prev + 1);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };

    /* Fetch initial set of jobs on component mount */
    useEffect(() => {
        fetchJobs();
    }, []);

    /* Intersection Observer for infinite scroll behaviour */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchJobs();
                }
            },
            { root: null, rootMargin: "0px", threshold: 1.0 }
        );

        let observerRefValue = null;

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
            observerRefValue = observerTarget.current;
        }

        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue);
            }
        };
    }, [observerTarget]);

    return (
        <div className='jobs-list'>
            {jobs?.map((job, idx) => (
                <Card key={idx} job={job} />
            ))}
            <div ref={observerTarget}></div>
        </div>
    );
};

export default JobList;
