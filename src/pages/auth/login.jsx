import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import {Login} from '../../components/Login'
import { NavBar } from '../../components/NavBar';



const LoginPage = () =>{


  const classes = useStyles()
  return(
    <Grid container spacing={3} className={classes.container}>
        <NavBar />
        <Login />
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default LoginPage;
