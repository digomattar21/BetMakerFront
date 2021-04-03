import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Confirm from '../../components/Confirm';
import { NavBar } from '../../components/NavBar';



const ConfirmPage = () =>{

  const classes = useStyles()
  return(
    <Grid container spacing={3} className={classes.container}>
        <NavBar />
        <Confirm />
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default ConfirmPage;
