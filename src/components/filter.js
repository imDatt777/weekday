// Importing NPM Dependencies
import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

// Importing Stylesheet
import "../styles/filter.css";

// Importing Static Data
import { location, mode, roles, techStack } from "../utils/filters.staticData";

const Filter = () => {
    const [exp, setExp] = useState("");
    const [sal, setSal] = useState("");

    const handleExpChange = (event) => {
        setExp(event.target.value);
    };

    const handleSalChange = (event) => {
        setSal(event.target.value);
    };

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
                    <TextField {...params} placeholder='Remote' size='small' />
                )}
                sx={{ minWidth: "200px" }}
            />
            <TextField
                id='outlined-basic'
                placeholder='Search Company'
                variant='outlined'
                size='small'
            />
            <FormControl sx={{ m: 1, minWidth: 200 }} size='small'>
                <InputLabel id='demo-simple-select-label'>
                    Experience
                </InputLabel>
                <Select
                    labelId='demo-select-small-label'
                    id='demo-select-small'
                    value={exp}
                    onChange={handleExpChange}
                    label='Experience'
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
            <FormControl sx={{ m: 1, minWidth: 200 }} size='small'>
                <InputLabel id='demo-simple-select-label'>
                    Minimum Base Pay
                </InputLabel>
                <Select
                    labelId='demo-select-small-label'
                    id='demo-select-small'
                    value={sal}
                    onChange={handleSalChange}
                    label='Minimum Base Pay'
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
