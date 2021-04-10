import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SportsList } from '../../components/SportsList';
import SportBetList from '../../components/SportBetList';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { NavBar } from '../../components/NavBar';
import { RightSideNav } from '../../components/RightSideNav';
import Api from '../../utils/api.utils';
import SportsApi from '../../utils/sportsApi.util'

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
  },
  middleContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));


function About({h2hOdds}) {
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
            <SportBetList sport_key={sport_key} h2hOdds={h2hOdds} />
          <RightSideNav />
        </Grid>
    </>
  );
}


export const getStaticPaths = async ()=>{

  try {
    let req = await Api.getSports()
    
    if (req){
      const sports = req.data;
    }else{
      const sports = [];
    }
    
    const paths = sports.map(sport => {
      return {
        params:{id:sport.key}
      }
  })
    
      return {
        paths: paths,
        fallback:false
      }
    
     
    
  } catch (error) {
    console.log(error.message)

  }


}

export async function getStaticProps({params}){
  
  try {
    let req = await SportsApi.getMatchesFromSport(params.id)
    
    const h2hOdds = req.data[0];
      return {
        props:{
          h2hOdds
        }
      }
     
    
  } catch (error) {
    console.log(error.message)
    
  }


}




export default About;