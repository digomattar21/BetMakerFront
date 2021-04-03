import styled from 'styled-components';
import { Grid, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Api from '../../utils/api.utils'
import { CasinoNavBar, NavBar } from '../../components/Casino/CasinoNavBar';
import CasinoGameCard from '../../components/Casino/CasinoGameCard';




export default function Casino() {
  const description = `Live game pays 2:1, 6 decks `;
  const BlackJackImg = '/assets/img/blackjackImg1.png'

  return (
    <>
      <CasinoNavBar />
      <Grid container spacing={3} >
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={6}>
          <CasinoGameCard name={'BlackJack'} imgSrc={BlackJackImg} description={description}/>
        </Grid>


      </Grid>
    </>
  );
};



