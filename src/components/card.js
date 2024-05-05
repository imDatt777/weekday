// Importing NPM Dependencies
import React from "react";

// Importing Stylesheet
import "./styles/card.css";

const Card = () => {
    const job = {
        jdUid: "cfff362e-053c-11ef-83d3-06301d0a7178-92030",
        jdLink: "https://weekday.works",
        jobDetailsFromCompany:
            "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        maxJdSalary: 83,
        minJdSalary: 61,
        salaryCurrencyCode: "USD",
        location: "delhi ncr",
        minExp: 6,
        maxExp: 11,
        jobRole: "frontend",
        companyName: "Intel Corporation",
        logoUrl: "https://logo.clearbit.com/intel.com",
    };

    return (
        <div className='job-card'>
            <p className='posted'>⏳ Posted 10 days ago</p>
            <div className='details'>
                <div className='company'>
                    <img
                        className='logo'
                        src={job.logoUrl}
                        alt='company logo'
                    />
                    <div className='text'>
                        <p className='comp'>{job.companyName}</p>
                        <p className='role'>{job.jobRole}</p>
                        <p className='loc'>{job.location}</p>
                    </div>
                </div>
                <p className='est'>
                    Estimated Salary: {job.salaryCurrencyCode} {job.minJdSalary}{" "}
                    - {job.maxJdSalary}
                    <span> ✅</span>
                </p>
                <h3 className='ab-com'>About Company:</h3>
                <p className='ab-us'>
                    <strong>About us</strong>
                </p>
                <p className='job-det'>{job.jobDetailsFromCompany}</p>
                <div className='view-link'>
                    <a className='view-job' href={job.jdLink}>
                        View Job
                    </a>
                </div>
                <p className='min-exp'>Min Experience</p>
                <p className='exp'>{job.minExp} Years</p>
                <button className='apply'>⚡ Easy Apply</button>
            </div>
        </div>
    );
};

export default Card;
