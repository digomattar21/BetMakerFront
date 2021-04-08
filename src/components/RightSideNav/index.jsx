import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { RightSideNavCard } from '../RightSideNavCard';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export const RightSideNav = () =>{
  const classes = useStyles()
  return(
    <Grid item xs={3} className={classes.sideBar}>
        <div className={classes.sideBarTitleContainer}>
          <Typography variant='h4' className={classes.offersTitle}>Offers</Typography>
          <LocalOfferIcon className={classes.offerIcon}/>
        </div>

        <div className={classes.sideBarBody}>
          <Typography className={classes.offerText} variant='h5'>0-0 money back</Typography>
          <Typography className={classes.offerSubText} variant='h6'>Get your money back for any game that ends with a score of 0-0</Typography>
        </div>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  sideBar: {
    margin: 0,
    marginTop: '63px',
    padding: 0,
    backgroundColor: '#383838',
    height: '100vh',
  },
  createBtn: {
    color: 'white',
    backgroundColor: '#1e2833',
  },
  sideBarTitleContainer: {
    marginTop: '10px',
    display:'flex',
    justifyContent:'flex-start',
    alignItems: 'center',
    marginLeft:'10px'
  },
  offerIcon:{
    fontSize: '25px',
    color:'#D6ED17FF',
    marginLeft: '5px'
  },
  offersTitle:{
    color: 'lightgray',
    fontWeight:'bold',
  },
  sideBarBody:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  offerText:{
    color: 'lightgray',
    fontSize: 16,
    marginLeft:'10px',
    marginTop: '5px'
  },
  offerSubText:{
    marginLeft: '10px',
    color: '#767676',
    fontSize: 14

  }

}));



