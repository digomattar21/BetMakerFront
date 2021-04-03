import { useContext, useEffect, useState } from 'react';
import { loadSports } from '../../context/BetsProvider/actions';
import BetsContext from '../../context/BetsProvider/context';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SportsCard } from '../SportCard';
import { SportSearch } from '../SportSearch';

export const SportsList = () => {
  const betsContext = useContext(BetsContext);
  const [searchValue, setSearchValue] = useState('');
  const { betsState, betsDispatch } = betsContext;
  const sports = betsState.sports;
  const classes = useStyles();

  useEffect(() => {
    loadSports(betsDispatch);
  }, []);

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
      {!searchValue &&
        sports.map((sport) => {
          return (
            <SportsCard
              key={sport.key}
              sport_key={sport.key}
              title={sport.title}
            />
          );
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
