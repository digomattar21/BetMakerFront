import styled from 'styled-components';
import { Grid, makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Api from '../../utils/api.utils'
import { CasinoNavBar, NavBar } from '../../components/Casino/CasinoNavBar';
import CasinoGameCard from '../../components/Casino/CasinoGameCard';
import {RightSideNavAuth} from '../../components/RightSideNavAuth'


export default function Casino() {
  const description = `Live game pays 2:1, 6 decks `;

  return (
    <>
      <CasinoNavBar />
      <Grid container spacing={3} >
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={6}>
          <CasinoGameCard name={'BlackJack'} imgSrc={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblackjack&psig=AOvVaw3cAOY43BXPLPlrcuA6J2Ri&ust=1617404494033000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDMjreT3u8CFQAAAAAdAAAAABAD`} description={description}/>
        </Grid>

            <RightSideNavAuth />

      </Grid>
    </>
  );
};



