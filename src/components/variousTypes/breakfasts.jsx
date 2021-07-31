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
  },
}));

const BreakFasts = () => {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&q=breakfast&app_id=4cdbbc1e&app_key=bfe9e1d4954450261c74bec1e680477f"
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
      <div className="breakFast">
        <Typography align="center" variant="h5">
          BreakFasts
        </Typography>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div>
          {data.hits.slice(6, 11).map((recipe, key) => {
            console.log(recipe.recipe.image);
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
                      {recipe.recipe.healthLabels
                        .slice(0, 2)
                        .map((item, key) => {
                          return <h5 className="text1">{item}</h5>;
                        })}
                    </div>
                    <div className="second">
                      <h5 className="text2">secondary</h5>
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
                    Chocolate tiffin
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
                        image={
                          "https://www.edamam.com/web-img/bb1/bb118b938128aafb274ba8fcbd7fef84.jpg"
                        }
                      />
                      <div>
                        <Typography variant="h6" color="primary">
                          961 Calories Energy
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

export default BreakFasts;
