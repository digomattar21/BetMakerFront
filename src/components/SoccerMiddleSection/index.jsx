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
    animation: "$spin 3s infinite",
  },
  cacheIcon2: {
    fontSize: "25px",
    color: "black",
    animation: "$spin 3s infinite",
  },
  loadBtnContainer: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
  },
  loadBtn: {
    backgroundColor: "#D6ED17FF",
  },
}));

const SoccerMiddleSection = () => {
  const classes = useStyles();
  const [matches, setMatches] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages,setMaxPages] = useState(10)
  const [fixturesArray, setFixturesArray] = useState([]);
  const [message,setMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [clicks, setClicks] = useState(1);
  const [loading, setLoading] = useState(false)

  const [disabledD, setDisabledD] = useState(true);
  const [disabledLive, setDisabledLive] = useState(false);
  const sport_name = "Soccer";

  useEffect(() => {
    loadNextDayEvents();
    loadMatchesInfo();
  }, []);

  const loadNextDayEvents = async () => {
    try {
      setMatches([])
      let req = await SoccerApi.getNextDayMatches(page);
      setMatches(req[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const loadMatchesInfo = async () => {
    try {
      console.log(matches);
    } catch (error) {
      console.log(error);
      setMessage(error)
    }
  };

  useEffect(() => {}, [matches]);

  const handleLoadMoreClick = async () => {
    let filter;

    filter='date'
    if (disabledD) filter = "D+1";

    
    try {
      console.log(clicks)
      console.log(matches.length)
      if (((clicks)*10)!=matches.length){
        throw 'Por favor aguarde'
      }else{
        if (filter === "D+1") {
          setLoading(true)
          let req = await SoccerApi.getNextDayMatches(page + 1);
          console.log("new req", Array.from(req[0]));
          let matchesCopy = [...matches];
          console.log(" matches before", matchesCopy);
          matchesCopy = [].concat(matchesCopy, req[0]);
          console.log("array after", matchesCopy);
          setMatches(matchesCopy);
        } else if (filter === "date"){
          setLoading(true)
          let req = await SoccerApi.getMatchesFromDate(selectedDate,page+1)
          setMaxPages(req.pages)
          let newMatchesArray = [...matches,...req.matches[0]];
          setMatches(newMatchesArray)
        }
        setPage(page + 1);
        setClicks(clicks+1)
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setMessage(err)
    }
  };

  const handleDateChange = async(e) => {
    setSelectedDate(e.target.value)
    try{
      setMatches([])
      setDisabledD(false)
      setDisabledLive(false)
      let newReq = await SoccerApi.getMatchesFromDate(e.target.value,1);
      console.log(newReq.matches[0])
      setMatches(newReq.matches[0])
      setMaxPages(newReq.pages)
    }catch(err){
      console.log(err)
      setMessage(err)
    }
    };

  const handleFilterClick = (e, btn) => {
    console.log(btn);
    switch (btn) {
      case "live":
        setDisabledLive(!disabledLive);
        disabledD ? setDisabledD(!disabledD) : setDisabledD(disabledD);
        break;
      case "D+1":
        setDisabledD(!disabledD);
        disabledLive
          ? setDisabledLive(!disabledLive)
          : setDisabledLive(disabledLive);
        if (sport_name == "Soccer") {
          loadNextDayEvents();
        }
        break;
      default:
        break;
    }
  };

  const makeReq = async (date) => {
    if (date == "D+1") {
      try {
        setMatches([]);
        let req = await SoccerApi.getNextDayMatches(page);
        setMatches(req.data.matches[0]);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      print("nope");
    }
  };

  return (
    <Grid item xs={6} style={{ marginTop: "60px" }}>
      <SocccerMiddleSectionNav
        sport_name={sport_name}
        matches={matches}
        setMatches={setMatches}
        page={page}
        setPage={setPage}
        handleFilterClick={handleFilterClick}
        makeReq={makeReq}
        disabledD={disabledD}
        disabledLive={disabledLive}
        handleDateChange={handleDateChange}
        message={message}
      />
      {matches && matches.length>0 &&
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
              date={match.fixture.date}
            />
          );
        })}
      {matches.length > 0 && (
        <div className={classes.loadBtnContainer}>
          {!loading && (<Button
            variant="contained"
            size="large"
            onClick={() => handleLoadMoreClick()}
            className={classes.loadBtn}
          >
            Load More
          </Button>)}
          {loading && <CachedIcon className={classes.cacheIcon2} />}
        </div>
      )}
      
      
      <div className={classes.iconContainer}>
        {(!matches || matches.length <= 0) && (
          <CachedIcon className={classes.cacheIcon} />
        )}
      </div>
    </Grid>
  );
};

export default SoccerMiddleSection;
