import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AuthContext from "../../context/UserProvider/context";
import { useRouter } from "next/router";
import UserInfoContext from "../../context/UserInfoProvider/context";
import SoccerApi from "../../utils/soccerApi.utils";
import { TextField } from "@material-ui/core";

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
    marginBottom: "9vh",
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
  liveBtn4: {
    backgroundColor: "#D6ED17FF",
    border: "1px solid #D6ED17FF",
    borderRadius: "5px",
    fontWeight: "bold",
    color: "#383838",
    marginBottom: "9vh",
    padding:'3px 3px'
  },
}));

export const SocccerMiddleSectionNav = ({
  sport_name,
  matches,
  setMatches,
  handleFilterClick,
  makeReq,
  disabledD,
  disabledLive,
  handleDateChange,
}) => {
  const classes = useStyles();
  const { userAuth, changeUserAuth } = useContext(AuthContext);
  const { userInfo, getUserInfo } = useContext(UserInfoContext);
  const router = useRouter();

  const [todaysDate, setTodaysDate] = useState(null);

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
    getDate();
    getUser();
  }, []);

  const getDate = () => {
    const today = new Date();
    var tomorroww = new Date(today);
    tomorroww.setDate(tomorroww.getDate());
    setTodaysDate(tomorroww.toISOString().split("T")[0]);
  };

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
          <Button variant="contained" className={classes.liveBtn4}>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                type="date"
                defaultValue={todaysDate}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value=''
                onChange={(e) => handleDateChange(e)}
              />
            </form>
          </Button>
        </Toolbar>
      </div>
    </div>
  );
};
