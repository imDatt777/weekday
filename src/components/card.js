// Importing NPM Dependencies
import React from "react";

// Importing Stylesheet
import "../styles/card.css";

const Card = ({ job }) => {
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
                    Estimated Salary: {job.salaryCurrencyCode} {job.minJdSalary}
                    K - {job.maxJdSalary}K<span> ✅</span>
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
