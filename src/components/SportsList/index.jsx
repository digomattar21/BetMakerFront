import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SportsCard } from '../SportCard';
import { SportSearch } from '../SportSearch';
import React, { useState, useEffect } from 'react';
import Api from '../../utils/api.utils'
import { SoccerNavCard } from '../SoccerNavCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridRow: {
    marginTop: '0px',
  },
  sideBar: {
    margin: 0,
    marginTop: '63px',
    padding: 0,
    overflowY: 'scroll',
    backgroundColor: '#383838',
  },
}));



export const SportsList = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sports, setSports] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    loadSports();
  }, []);

  async function loadSports(){
    try {
      let req = await Api.getSports()
      console.log(req)
      setSports(req.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function handleSearchValueChange(e) {
    try {
      let value = e.target.value;
      setSearchValue(value);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Grid className={classes.sideBar} item xs={3}>
      <SportSearch
        searchValue={searchValue}
        handleSearchValueChange={handleSearchValueChange}
      />
      <SoccerNavCard />
      {!searchValue &&
        sports.map((sport) => {
          if (sport.key != 'soccer' &&  sport.key != 'Soccer'){
            return (
            <SportsCard
              key={sport.key}
              sport_key={sport.key}
              title={sport.title}
            />
          );
          }
        })}
      {searchValue &&
        sports.map((sport) => {
          return sport.title.toLowerCase().includes(searchValue.toLowerCase()) ? (
            <SportsCard
              key={sport.key}
              sport_key={sport.key}
              title={sport.title}
            />
          ) : (
            ''
          );
        })}
    </Grid>
  );
};
