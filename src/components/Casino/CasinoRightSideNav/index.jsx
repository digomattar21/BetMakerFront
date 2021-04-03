import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Api from "../../../utils/api.utils";

export const CasinoRightSideNav = () => {
  const classes = useStyles();
 

  


  return (
    <Grid item xs={3} className={classes.sideBar}>
    



    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  sideBar: {
    margin: 0,
    marginTop: "63px",
    padding: 0,
    overflowY: "scroll",
    backgroundColor: "#383838",
    height: "100vh",
  },
  createBtn: {
    color: "white",
    backgroundColor: "#1e2833",
  },
  sideBarTitleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    color: "white",
  },
  likeIcon: {
    color: "#D6ED17FF",
    fontSize: "26px",
    marginLeft: "10px",
  },
}));
