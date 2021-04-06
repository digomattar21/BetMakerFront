import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SportsList } from '../../components/SportsList';
import SportBetList from '../../components/SportBetList';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { NavBar } from '../../components/NavBar';
import { RightSideNav } from '../../components/RightSideNav';

export default function About() {
  const router = useRouter();
  const { id } = router.query;
  const sport_key = id;
  const classes = useStyles()

  useEffect(()=>{
    console.log(id)
  },[])


  return (
    <>
      <NavBar />
        <Grid container spacing={3} className={classes.container}>
          <SportsList />
          <SportBetList sport_key={sport_key} />
          <RightSideNav />
        </Grid>
    </>
  );
}

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
    padding: 0,
    overflowY: 'scroll'
  },
  container:{
    backgroundColor:'white'
  }
}));
