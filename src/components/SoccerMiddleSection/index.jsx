import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SoccerApi from "../../utils/soccerApi.utils";
import { SoccerBetCard } from "../SoccerBetCard";

const SoccerMiddleSection = () => {
  const classes = useStyles();
  const [matches,setMatches] = useState([])

  useEffect(() => {
    loadNextDayEvents();
  }, []);

  
  const loadNextDayEvents = async() =>{
    try{   
        let req = await SoccerApi.getNextDayMatches()
        setMatches(req)
    }catch(err){
        console.log(err.message)
    }
  }

  return (
      <>
        <Grid item xs={6}>
            {matches.length>0 && matches.map(match =>{
                return (<SoccerBetCard 
                key={match.fixture.id}
                fixtureId={match.fixture.id}
                leagueId={match.league.id}
                leagueName={match.league.name}
                leagueLogo={match.league.logo}
                leagueCountry={match.league.country}
                bookmakers={match.bookmakers}
                />)

            })}
        </Grid>
      </>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default SoccerMiddleSection;