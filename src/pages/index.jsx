import styled from 'styled-components';
import { SportsList } from '../components/SportsList';
import { NavBar } from '../components/NavBar';
import { RightSideNavAuth } from '../components/RightSideNavAuth';
import { Grid } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import SportsMiddleSection from '../components/SportsMiddleSection/SportsMiddleSection';
import AuthContext from '../context/UserProvider/context';
import {RightSideNav} from '../components/RightSideNav';


function Home() {
  const {userAuth,changeUserAuth} = useContext(AuthContext)

  return (
    <>
      <NavBar />
      
        <Grid container spacing={3}>
          <SportsList />
          <Grid item xs={6}>
            <SportsMiddleSection />
          </Grid>
        {userAuth && <RightSideNavAuth />}
        {!userAuth && <RightSideNav />}
        </Grid>
      
    </>
  );
}

export default Home;