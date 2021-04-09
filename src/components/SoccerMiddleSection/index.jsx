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
  const [page, setPage] = useState(1);
  const [fixturesArray, setFixturesArray] = useState([]);

  useEffect(() => {
    loadNextDayEvents();
    loadMatchesInfo();
  }, []);

  const loadNextDayEvents = async () => {
    try {
      let req = await SoccerApi.getNextDayMatches();
      setMatches(req);
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

  const handleLoadMoreClick = async () =>{

  }

  return (
    <Grid item xs={6} style={{ marginTop: "60px" }}>
      <SocccerMiddleSectionNav
        sport_name="Soccer"
        matches={matches}
        setMatches={setMatches}
        page={page}
        setPage={setPage}
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
      <div className={classes.loadBtnContainer}>
        <Button
          variant="contained"
          size="large"
          onClick={() => handleLoadMoreClick()}
          className={classes.loadBtn}
        >
          Load More
        </Button>
      </div>
      <div className={classes.iconContainer}>
        {(!matches || matches.length <= 0) && (
          <CachedIcon className={classes.cacheIcon} />
        )}
      </div>
    </Grid>
  );
};

export default SoccerMiddleSection;
