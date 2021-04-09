import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AuthContext from "../../context/UserProvider/context";
import { useRouter } from "next/router";
import UserInfoContext from "../../context/UserInfoProvider/context";
import SoccerApi from "../../utils/soccerApi.utils";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: "75%",
  },
  subtitle2: {
    fontSize: "12px",
  },
  liveBtn2: {
    fontSize: "14px",
    color: "#383838",
    marginLeft: "2",
  },
  liveBtn3: {
    backgroundColor: "#D6ED17FF",
    border: "1px solid #D6ED17FF",
    borderRadius: "5px",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#383838",
    marginBottom: "7vh",
  },

  title: {
    flexGrow: 1,
    fontSize: 17,
    marginLeft: "2px",
    fontWeight: "bold",
    color: "black",
    "&:hover": {
      color: "black",
      fontSize: 17,
    },
  },
  loginSettingsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  navbar: {
    backgroundImage: "url(/assets/img/middlesectionnavteste1.png)",
    maxHeight: "100px",
    height: "100px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));

export const SocccerMiddleSectionNav = ({ sport_name, matches, setMatches }) => {
  const classes = useStyles();
  const { userAuth, changeUserAuth } = useContext(AuthContext);
  const { userInfo, getUserInfo } = useContext(UserInfoContext);
  const router = useRouter();

  const [disabledD, setDisabledD] = useState(true);
  const [disabledNext3, setDisabledNext3] = useState(false);
  const [disabledLive, setDisabledLive] = useState(false);
  const [disabledWeek, setDisabledWeek] = useState(false);

  const [page,setPage] = useState(1)

  const getUser = async () => {
    try {
      if (userAuth) {
        let user = await getUserInfo();
        console.log("userauth", user);
        setMoney(user.money);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
            setMatches(req)
        } catch (error) {
            console.log(error.message)
        }
    } else if (date=='D+3'){
        try {
            setMatches([])
            let req = await SoccerApi.getNext3DaysMatches()
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
    <div position="fixed" className={classes.navbar}>
      <div className={classes.cointainer}>
        <Toolbar>
          <Button className={classes.liveBtn2}>
            <Typography variant="h6" className={classes.title}>
              {sport_name}
            </Typography>
          </Button>
        </Toolbar>

        <Toolbar className={classes.loginSettingsContainer}>
          <Button
            className={classes.liveBtn3}
            disabled={disabledLive}
            onClick={(e) => handleFilterClick(e, "live")}
          >
            <Typography variant="h6" className={classes.subtitle2}>
              Live
            </Typography>
          </Button>
          <Button
            className={classes.liveBtn3}
            disabled={disabledD}
            onClick={(e) => handleFilterClick(e, "D+1")}
          >
            <Typography variant="h6" className={classes.subtitle2}>
              D+1
            </Typography>
          </Button>
          <Button
            className={classes.liveBtn3}
            disabled={disabledNext3}
            onClick={(e) => handleFilterClick(e, "D+3")}
          >
            <Typography variant="h6" className={classes.subtitle2}>
              D+3
            </Typography>
          </Button>
          <Button
            className={classes.liveBtn3}
            disabled={disabledWeek}
            onClick={(e) => handleFilterClick(e, "Week")}
          >
            <Typography variant="h6" className={classes.subtitle2}>
              This Week
            </Typography>
          </Button>
        </Toolbar>
      </div>
    </div>
  );
};
