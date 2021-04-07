import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AuthContext from '../../../context/UserProvider/context';
import { RightSideNav } from '../../../components/RightSideNav';
import { NavBar } from '../../../components/NavBar';
import { SportsList } from '../../../components/SportsList';
import {RightSideNavAuth} from '../../../components/RightSideNavAuth'
import SoccerMiddleSection from '../../../components/SoccerMiddleSection';


export default function SoccerIndex() {
  const router = useRouter();
  const { id } = router.query;
  const sport_key = id;
  const classes = useStyles();
  const { userAuth, changeUserAuth } = useContext(AuthContext);

  useEffect(()=>{
    console.log(id)
  },[])


  return (
    <>
      <NavBar />
        <Grid container spacing={3} className={classes.container}>
          <SportsList />

          <SoccerMiddleSection />

          {userAuth && <RightSideNavAuth />}
          {!userAuth && <RightSideNav />}
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
