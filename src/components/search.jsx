import React, { useState } from "react";
import {
  TextField,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  Button,
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
  Card,
} from "@material-ui/core";
import "./variousTypes/style.css";

import SearchIcon from "@material-ui/icons/Search";
import BreakFasts from "./variousTypes/breakfasts";
import Snacks from "./variousTypes/snasks";
import TeaTimes from "./variousTypes/teaTime";
import Lunch from "./variousTypes/lunchs";
import Dinner from "./variousTypes/dinner";
import axios from "axios";

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
  const [text, setText] = useState("");
  const [diet, setDiet] = useState("");
  const [health, setHealth] = useState("");
  const [cuisine, setCuisine] = useState("");

  const [data, setData] = useState([]);

  const apiKey = "&app_id=4cdbbc1e&app_key=bfe9e1d4954450261c74bec1e680477f";

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${
    text === "" ? "" : text
  }${apiKey}${diet === "" ? "" : `&diet=${diet}`}${
    health === "" ? "" : `&health=${health}`
  }${cuisine === "" ? "" : `&cuisineType=${cuisine}`}`;

  const getData = () => {
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("some error " + err.message);
      });
  };
  console.log(URL);
  console.log(data);

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
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
          {/* ------diet label */}
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Select Diet label</InputLabel>
            <Select
              onChange={(e) => setDiet(e.target.value)}
              native
              label="Select Diet label"
            >
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
            <Select
              onChange={(e) => setHealth(e.target.value)}
              native
              label="Select Health Level"
            >
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
            <Select
              onChange={(e) => setCuisine(e.target.value)}
              native
              label="Select Cuisine type"
            >
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
            onClick={getData}
            className={classes.button}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </form>
      </div>

      {data.length === 0 ? (
        <div>
          <BreakFasts />
          <Snacks />
          <TeaTimes />
          <Lunch />
          <Dinner />
        </div>
      ) : (
        <div>
          {data.hits.slice(0, 80).map((recipe, key) => {
            return (
              <div className="card">
                <Card align="center">
                  <CardActionArea className="actionArea">
                    <CardMedia
                      gutterBottom
                      component="img"
                      alt="recipe image"
                      height="140"
                      image={recipe.recipe.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {recipe.recipe.label}
                      </Typography>
                    </CardContent>
                    <div className="first">
                      <h5 className="text1">
                        {recipe.recipe.healthLabels.slice(0, 2).join(", ")}
                      </h5>
                    </div>
                    <div className="second">
                      <h5 className="text2">
                        {recipe.recipe.cautions.slice(0, 1)}
                      </h5>
                    </div>
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Search;
