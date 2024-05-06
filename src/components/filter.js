// Importing NPM Dependencies
import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Importing Stylesheet
import "../styles/filter.css";

const Filter = () => {
    const [exp, setExp] = useState("");
    const [sal, setSal] = useState("");

    const handleExpChange = (event) => {
        setExp(event.target.value);
    };

    const handleSalChange = (event) => {
        setSal(event.target.value);
    };

    const roles = [
        { title: "Frontend" },
        { title: "Backend" },
        { title: "Full Stack" },
        { title: "Database" },
        { title: "Java" },
        { title: "React" },
        { title: "IOS" },
        { title: "Android" },
        { title: "Mobile" },
        { title: "Web" },
    ];

    const techStack = [
        { title: "React" },
        { title: "HTML" },
        { title: "CSS" },
        { title: "JavaScript" },
        { title: "Redux" },
        { title: "Next" },
        { title: "SASS" },
        { title: "Tailwind CSS" },
        { title: "Angular" },
        { title: "React Native" },
    ];

    const location = [
        { title: "Delhi" },
        { title: "Gurugram" },
        { title: "Noida" },
        { title: "Bangalore" },
        { title: "Pune" },
        { title: "Mumbai" },
        { title: "Chennai" },
        { title: "Hyderabad" },
    ];

    const mode = [
        { title: "Remote" },
        { title: "On-Site" },
        { title: "Hybrid" },
    ];

    return (
        <div className='filter'>
            <Autocomplete
                multiple
                limitTags={2}
                id='multiple-limit-tags'
                options={roles}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField {...params} placeholder='Roles' size='small' />
                )}
                sx={{ minWidth: "200px" }}
            />
            <Autocomplete
                multiple
                limitTags={2}
                id='multiple-limit-tags'
                options={techStack}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder='Tech Stack'
                        size='small'
                    />
                )}
                sx={{ minWidth: "200px" }}
            />
            <Autocomplete
                multiple
                limitTags={2}
                id='multiple-limit-tags'
                options={location}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder='Location'
                        size='small'
                    />
                )}
                sx={{ minWidth: "200px" }}
            />
            <Autocomplete
                multiple
                limitTags={2}
                id='multiple-limit-tags'
                options={mode}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder='Location'
                        size='small'
                    />
                )}
                sx={{ minWidth: "200px" }}
            />
            <TextField id='outlined-basic' variant='outlined' size='small' />
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <Select
                    labelId='demo-select-small-label'
                    id='demo-select-small'
                    value={exp}
                    onChange={handleExpChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <Select
                    labelId='demo-select-small-label'
                    id='demo-select-small'
                    value={sal}
                    onChange={handleSalChange}
                >
                    <MenuItem value={"10L"}>10L</MenuItem>
                    <MenuItem value={"20L"}>20L</MenuItem>
                    <MenuItem value={"30L"}>30L</MenuItem>
                    <MenuItem value={"40L"}>40L</MenuItem>
                    <MenuItem value={"50L"}>50L</MenuItem>
                    <MenuItem value={"60L"}>60L</MenuItem>
                    <MenuItem value={"70L"}>70L</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Filter;
