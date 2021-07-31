import React, { useState, useEffect } from "react";
import {
  TextField,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import BreakFasts from "./variousTypes/breakfasts";

const useStyles = makeStyles((theme) => ({
  from: {
    marginTop: "70px",
    position: "sticky",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  button: {
    margin: theme.spacing(1),
    width: "150px",
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <>
      {/* -------------form design----------- */}
      <div className={classes.from}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            type="text"
            label="Search any Recipe"
            variant="outlined"
            autoFocus
          />
          {/* ------diet label */}
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Select Diet label</InputLabel>
            <Select native label="Select Diet label">
              <option aria-label="None" value=" " />
              <option value="balanced">Balanced</option>
              <option value="high-fiber">High Fiber</option>
              <option value="high-protein">High protein</option>
              <option value="low-fat">Low Fat</option>
              <option value="low-sodium">Low Sodium</option>
            </Select>
          </FormControl>
          {/* health lebel */}
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Select Health Level</InputLabel>
            <Select native label="Select Health Level">
              <option aria-label="None" value=" " />
              <option value="low-sugar">Low Sugar</option>
              <option value="kidney-friendly">Kidney Friendly</option>
              <option value="alcohol-free">Alcohol Free</option>
              <option value="vegetarian">vegetarian</option>
              <option value="low-potassium">Low potassium</option>
              <option value="mustard-free">Mustard Free</option>
              <option value="no-oil-added">No Oil added</option>
            </Select>
          </FormControl>
          {/* cuisine type */}
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Select Cuisine type</InputLabel>
            <Select native label="Select Cuisine type">
              <option aria-label="None" value=" " />
              <option value="American">American</option>
              <option value="Indian">Indian</option>
              <option value="Asian">Asian</option>
              <option value="British">British</option>
              <option value="Italian">Italian</option>
              <option value="Caribbean">Caribbean</option>
              <option value="Chinese">Chinese</option>
              <option value="French">French</option>
              <option value="Japanese">Japanese</option>
              <option value="Mexican">Mexican</option>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </form>
      </div>
      <div>
        <BreakFasts />
      </div>
    </>
  );
};

export default Search;
