import { Divider, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Game } from '../../components/BlackJack/Game';
import {CasinoNavBar} from '../../components/Casino/CasinoNavBar'

export default function BlackJack() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <CasinoNavBar  />
      <Grid item xs={12} className={classes.gameContainer}>
        <div className={classes.body}>
          <div className={classes.cardTable}>
            <Game />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  gameContainer:{
    marginTop:'65px'
  }
}))
