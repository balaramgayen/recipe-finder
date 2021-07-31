import React, { useState, useEffect } from "react";
import {
  Typography,
  makeStyles,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Card,
  IconButton,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import "./style.css";

import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    backgroundColor: "white",
  },
}));

const Snacks = () => {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&q=snacks&app_id=4cdbbc1e&app_key=bfe9e1d4954450261c74bec1e680477f"
      )
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <>
      <div className="snacks">
        <Typography align="center" variant="h5">
          Snacks
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

                  <CardActions>
                    <Button
                      className="button"
                      onClick={handleClickOpen}
                      size="small"
                      color="primary"
                      variant="outlined"
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>

                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  className="dialog"
                >
                  <DialogTitle id="alert-dialog-title">
                    {recipe.recipe.label}
                  </DialogTitle>
                  <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={handleClose}
                    color="primary"
                  >
                    <CloseIcon color="primary" />
                  </IconButton>
                  <DialogContent>
                    <div>
                      <CardMedia
                        gutterBottom
                        component="img"
                        alt="Contemplative Reptile"
                        className="image"
                        image={recipe.recipe.image}
                      />
                      <div>
                        <Typography variant="h6" color="primary">
                          <span>{recipe.recipe.calories}</span> Calories Energy
                        </Typography>
                        <Divider />
                        <Typography variant="h6" color="initial">
                          Cautions
                        </Typography>
                        <div className="second">
                          <Button variant="outlined" color="secondary">
                            Sulfites
                          </Button>
                        </div>
                        <Typography variant="h6" color="initial">
                          HealthLabels
                        </Typography>
                        <div className="first">
                          <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                          >
                            primary
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      startIcon={<CloseIcon />}
                      onClick={handleClose}
                      color="primary"
                      autoFocus
                      variant="contained"
                      size="small"
                    >
                      close
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Snacks;
