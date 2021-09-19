import React, { useState, useEffect } from "react";
import {
  Typography,
  CardContent,
  CardMedia,
  CardActionArea,
  Card,
  CircularProgress,
} from "@material-ui/core";
import "./style.css";

import axios from "axios";

const TeaTimes = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&q=teatime&app_id=4cdbbc1e&app_key=bfe9e1d4954450261c74bec1e680477f"
      )
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="teaTime">
        <Typography align="center" variant="h5">
          TeaTimes
        </Typography>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div>
          {data.hits.slice(0, 5).map((recipe, key) => {
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

export default TeaTimes;
