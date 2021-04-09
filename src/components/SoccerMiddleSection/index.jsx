import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SoccerApi from "../../utils/soccerApi.utils";
import { SoccerBetCard } from "../SoccerBetCard";
import CachedIcon from "@material-ui/icons/Cached";
import { SocccerMiddleSectionNav } from "../SoccerMiddleSectionNav";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40vh",
  },
  // '@-moz-keyframes spin': { '100%' :{ '-moz-transform': 'rotate(360deg)'} },
  // '@-webkit-keyframes spin': { '100%' :{ '-webkit-transform': 'rotate(360deg)'} },
  "@keyframes spin": {
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  cacheIcon: {
    fontSize: "25px",
    color: "#D6ED17FF",
    animation: "$spin 5s infinite",
  },
  loadBtnContainer: {
    marginTop:'30px',
    display: "flex",
    justifyContent: "center",
  },
  loadBtn:{
    backgroundColor:'#D6ED17FF'
  }
}));

const SoccerMiddleSection = () => {
  const classes = useStyles();
  const [matches, setMatches] = useState([]);
  const [allMatches, setAllMatches] = useState([])
  const [page, setPage] = useState(1);
  const [fixturesArray, setFixturesArray] = useState([]);

  const [disabledD, setDisabledD] = useState(true);
  const [disabledNext3, setDisabledNext3] = useState(false);
  const [disabledLive, setDisabledLive] = useState(false);
  const [disabledWeek, setDisabledWeek] = useState(false);

  useEffect(() => {
    loadNextDayEvents();
    loadMatchesInfo();
  }, []);

  const loadNextDayEvents = async () => {
    try {
      let req = await SoccerApi.getNextDayMatches(page);
      setMatches(req[0]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const loadMatchesInfo = async () => {
    try {
      console.log(matches);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{},[matches])

  const handleLoadMoreClick = async () =>{  
    let filter;

    if (disabledD) filter = 'D+1';
    if (disabledNext3) filter = 'D+3';
    if (disabledWeek) filter = 'week';

    try{  

      if (filter ==='D+1'){
        
        let req = await SoccerApi.getNextDayMatches(page+1)
        console.log('new req' , Array.from(req[0]))
        let matchesCopy = [...matches]
        console.log(' matches before' ,matchesCopy)
        matchesCopy = [].concat(matchesCopy, req[0])
        console.log('array after' ,matchesCopy)
        setMatches(matchesCopy)
      }else if (filter ==='D+3'){
        let req = await SoccerApi.getNext3DaysMatches(page+1)

      } else if (filter ==='week'){
        let req = await SoccerApi.getWeekMatches(page+1)

      }
      setPage(page+1)


    }catch(err){
      console.log(err);
    }

  }

  const handleFilterClick = (e, btn) => {
    console.log(btn);
    switch (btn) {
      case "live":
        setDisabledLive(!disabledLive);
        disabledD?setDisabledD(!disabledD):setDisabledD(disabledD);
        disabledNext3?setDisabledNext3(!disabledNext3):setDisabledNext3(disabledNext3);
        disabledWeek?setDisabledWeek(!disabledWeek):setDisabledWeek(disabledWeek);
        break;
      case "D+1":
        setDisabledD(!disabledD);
        disabledLive?setDisabledLive(!disabledLive):setDisabledLive(disabledLive);
        disabledNext3?setDisabledNext3(!disabledNext3):setDisabledNext3(disabledNext3);
        disabledWeek?setDisabledWeek(!disabledWeek):setDisabledWeek(disabledWeek);
        if (sport_name =='Soccer'){
            makeReq('D+1')
        }
        break;
      case "D+3":
        setDisabledNext3(!disabledNext3);
        disabledD?setDisabledD(!disabledD):setDisabledD(disabledD);
        disabledLive?setDisabledLive(!disabledLive):setDisabledLive(disabledLive);
        disabledWeek?setDisabledWeek(!disabledWeek):setDisabledWeek(disabledWeek);
        if (sport_name =='Soccer'){
            makeReq('D+3')
        }
        break;
      case "Week":
        setDisabledWeek(!disabledWeek);
        disabledD?setDisabledD(!disabledD):setDisabledD(disabledD);
        disabledNext3?setDisabledNext3(!disabledNext3):setDisabledNext3(disabledNext3);
        disabledLive?setDisabledLive(!disabledLive):setDisabledLive(disabledLive);
        if (sport_name =='Soccer'){
            makeReq('week')
        }
        break;
      default:
        break;
    }
  };


  const makeReq =async(date)=>{
    if (date=='D+1'){
        try {
            setMatches([])
            let req = await SoccerApi.getNextDayMatches()
            setMatches(req.data.matches[0])
        } catch (error) {
            console.log(error.message)
        }
    } else if (date=='D+3'){
        try {
            setMatches([])
            let req = await SoccerApi.getNext3DaysMatches(page)
            console.log(req.data.matches)
            setMatches(req.data.matches[1])
        } catch (error) {
            console.log(error.message)
        }

    }else if (date=='week'){
        try {
            setMatches([])
            let req = await SoccerApi.getNextWeekMatches()
            setMatches(req.data.matches[2])
        } catch (error) {
            console.log(error.message)
        }

    }else{
        print('nope')
    }
  }

  return (
    <Grid item xs={6} style={{ marginTop: "60px" }}>
      <SocccerMiddleSectionNav
        sport_name="Soccer"
        matches={matches}
        setMatches={setMatches}
        page={page}
        setPage={setPage}
        handleFilterClick={handleFilterClick}
        makeReq={makeReq}
      />
      {matches.length > 0 &&
        matches.map((match) => {
          return (
            <SoccerBetCard
              key={match.fixture.id}
              fixtureId={match.fixture.id}
              leagueId={match.league.id}
              leagueName={match.league.name}
              leagueLogo={match.league.logo}
              leagueCountry={match.league.country}
              bookmakers={match.bookmakers}
              leagueFlag={match.league.flag}
            />
          );
        })}
      {matches.length>0 && 
      <div className={classes.loadBtnContainer}>
        <Button
          variant="contained"
          size="large"
          onClick={() => handleLoadMoreClick()}
          className={classes.loadBtn}
        >
          Load More
        </Button>
      </div>}
      <div className={classes.iconContainer}>
        {(!matches || matches.length <= 0) && (
          <CachedIcon className={classes.cacheIcon} />
        )}
      </div>
    </Grid>
  );
};

export default SoccerMiddleSection;
