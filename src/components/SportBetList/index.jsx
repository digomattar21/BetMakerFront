import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BetCard } from '../BetCard';
import Api from '../../utils/api.utils'
import { MiddleSectionNav } from '../MiddleSectionNav';

const SportBetList = ({ sport_key, h2hOdds }) => {
  // const [h2hOdds, setH2hOdds] = useState([]);
  const [spreadOdds, setSpreadOdds] = useState([]);
  const [totalsOdds, setTotalsOdds] = useState([]);
  const classes = useStyles();

  // async function loadSportBets(sport_key) {
  //   try {
  //     console.log(sport_key)
  //     let data = await Api.getSportBets(sport_key);
  //     let h2hOdds = data[0]
  //     let spreadOdds1 = data[1]
  //     let totalsOdds1 = data[2]

  //     setSpreadOdds(spreadOdds1)
  //     setTotalsOdds(totalsOdds1)
  //     setH2hOdds(h2hOdds);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }


  // useEffect(() => {
  //   loadSportBets(sport_key);
  // }, [sport_key]);

  return (
    <Grid item xs={6} className={classes.container}>
    {/* <MiddleSectionNav sport_name={sport_key} matches={h2hOdds} setMatches={setH2hOdds}/> */}
      {h2hOdds && h2hOdds.length > 0 &&
        h2hOdds.map((odd) => {
          return <BetCard h2hOdd={odd} key={odd.id} id={odd.id}/>
        })}
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  container:{
    marginTop: '60px'}
  }))

export default SportBetList;
