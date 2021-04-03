import { Divider, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import {CasinoNavBar} from '../../components/Casino/CasinoNavBar'
import RouletteGame from '../../components/RouletteGame/Game';

export default function Roulette() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <CasinoNavBar  />
      <Grid item xs={12} className={classes.gameContainer}>
        <div className={classes.body}>
          <div className={classes.cardTable}>
            <RouletteGame />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  gameContainer:{
    marginTop:'65px'
  },
  cardTable:{
      backgroundImage: `url('https://github.com/tfunk2/tyleRoulette/blob/main/src/images/casino-carpet-trimmed.png?raw=true')`,
      backgroundRepeat: "repeat",
      backgroundSize: "20vw 20vw",
      backgroundPosition: "center",
      overflowY: "hidden",
      overflowX: "hidden",
      minWidth: "800px",
  }
}))
