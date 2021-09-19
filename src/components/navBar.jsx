import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Grid,
  Hidden,
} from "@material-ui/core";

import firstImage from "./images/Cooking-bro.png";
import secondImage from "./images/Cooking-pana.png";

const useStyle = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#311b92",
  },
  image: {
    height: "60px",
    width: "60px",
    position: "relative",
    display: "block",
  },
  text: {
    fontFamily: "Lobster",
  },
}));

const Navbar = () => {
  const classes = useStyle();
  return (
    <>
      {/* -----------------navbar design---------------- */}
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center">
            <Hidden smDown xsDown>
              <Grid item>
                <img className={classes.image} src={firstImage} alt="pic" />
              </Grid>
            </Hidden>
            <Grid item sm></Grid>
            <Grid item xs={9} spacing={5}>
              <Typography className={classes.text} variant="h4">
                Recipe Info
              </Typography>
            </Grid>
            <Grid item sm></Grid>
            <Grid item>
              <img className={classes.image} src={secondImage} alt="pic" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
