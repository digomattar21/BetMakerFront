import { Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { RightSideNavCard } from '../RightSideNavCard';

export const RightSideNavAuth = () => {
  const classes = useStyles();
  const [createTournament, setCreateTournament] = useState(false);



  
  const handleCreateTournamentClick = () =>{
    setCreateTournament(!createTournament);
  }

  return (
    <Grid item xs={3} className={classes.sideBar}>
      <Grid item xs={12} className={classes.sideBarTitle}>
    Olaaa
      </Grid>


    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  sideBar: {
    margin: 0,
    marginTop: '63px',
    padding: 0,
    overflowY: 'scroll',
    backgroundColor: '#383838',
    height: '100vh',
  },
  createBtn:{
    color: 'white',
    backgroundColor: '#1e2833'
  }
}));
