import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { SignUp } from '../../components/SignUp';

import {NavBar} from '../../components/NavBar'


const SignUpPage = () =>{
  const classes = useStyles()
  return(
    <Grid container spacing={3} className={classes.container}>
      <NavBar />
      <SignUp />
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default SignUpPage;
