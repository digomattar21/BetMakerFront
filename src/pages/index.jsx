import styled from 'styled-components';
import { SportsList } from '../components/SportsList';
import { NavBar } from '../components/NavBar';
import { RightSideNavAuth } from '../components/RightSideNavAuth';
import { Grid } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import SportsMiddleSection from '../components/SportsMiddleSection/SportsMiddleSection';
import AuthContext from '../context/UserProvider/context';
import {RightSideNav} from '../components/RightSideNav';
import Api from '../utils/api.utils'
import IndexMiddleSectionNav from '../components/IndexMiddleSectionNav';
import IndexMiddleSection from '../components/IndexMiddleSection';


function Home({sports}) {
  const {userAuth,changeUserAuth} = useContext(AuthContext)

  return (
    <>
      <NavBar />
      
        <Grid container spacing={3}>
          <SportsList sports={sports}/>
          <Grid item xs={6}>
          <IndexMiddleSectionNav/>
          <IndexMiddleSection/>
          </Grid>
        {userAuth && <RightSideNavAuth />}
        {!userAuth && <RightSideNav />}
        </Grid>
      
    </>
  );
}

export async function getStaticProps(){
  
  try {
    let req = await Api.getSports()
    
    const sports = req.data;
      return {
        props:{
          sports
        }
      }
     
    
  } catch (error) {
    console.log(error.message)
    
  }


}



export default Home;