import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BetCard } from '../BetCard';

const SportBetList = ({ sport_key }) => {
  const [bets, setBets] = useState([]);
  const classes = useStyles();

  async function loadSportBets(sport_key) {
    try {
      let url = `http://localhost:3080/sports/${sport_key}`;
      let requestInfo = await axios.get(url);
      const data = requestInfo.data;
      setBets(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    loadSportBets(sport_key);
  }, [sport_key]);

  return (
    <Grid item xs={6} className={classes.container}>
      {bets.length > 0 &&
        bets.map((bet) => {
          return <BetCard bet={bet} />
        })}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  container:{
    marginTop: '60px'
  }
}))

export default SportBetList;
