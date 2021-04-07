import React, { useContext, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import AuthContext from '../../context/UserProvider/context';

export const SoccerBetCard = ({ fixtureId, leagueId, bookmakers, leagueCountry, leagueLogo, leagueName  }) => {
  const classes = useStyles();
  const [addBets, setAddBets] = useState([]);


  const { userAuth, changeUserAuth } = useContext(AuthContext);


  
  const getMostBets = () => {
    var biggest=0;
    bookmakers.forEach((bookmaker,index) =>{
        if (bookmaker.bets.length > biggest){
            biggest=bookmaker.bets
        }
    })
    setAddBets(biggest)

  }
  

  const handleOddClick = (odd,bet) => {
      console.log(odd)
      console.log(bet)
  }
  
  useEffect(() => {
    getMostBets();
  },[]);




  return (
    <Card className={classes.root}>
    <CardContent>
        <h2>{leagueName}</h2>
    </CardContent>
      <CardContent style={{display:'flex', justifyContent: 'center'}}>
        <div className={classes.teamsContainer}>
          <div className={classes.teamsSubContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Solid" viewBox="0 0 512 512" width="20" height="20"><path d="M455.028,97.349c-9.119,6.52-37.968,38.54-39,182.651H480V200c0-48.029-8.242-74.595-15.155-88.422C461.072,104.032,457.393,99.66,455.028,97.349Z"/><path d="M57,97.367c-7.036,6.91-25,31.52-25,102.633v80H95.971C94.941,136.028,66.146,103.931,57,97.367Z"/><path d="M440.185,89.037,365.611,51.75a94.141,94.141,0,0,1-21.054,41.77C324.36,116.4,294.565,128,256,128s-68.36-11.6-88.557-34.481A94.138,94.138,0,0,1,146.389,51.75L71.815,89.037c4.781,4.826,10.2,12.231,15.449,23.61C103.678,148.211,112,207.208,112,288V480H400V288c0-80.792,8.322-139.789,24.736-175.353C429.989,101.268,435.4,93.863,440.185,89.037Z"/><path d="M256,112c33.775,0,59.535-9.78,76.562-29.069A79.111,79.111,0,0,0,350.79,44.339l-15.032-7.516c-1.127,9.963-4.733,23.672-15.191,35.518C306.709,88.04,284.985,96,256,96s-50.709-7.96-64.567-23.659C180.975,60.5,177.369,46.786,176.242,36.823L161.21,44.34a79.1,79.1,0,0,0,18.228,38.59C196.465,102.22,222.225,112,256,112Z"/><path d="M256,80c24.2,0,41.884-6.14,52.573-18.248C317.5,51.642,319.71,39.487,320.143,32H191.9c.463,7.555,2.713,19.846,11.648,29.884C214.245,73.905,231.894,80,256,80Z"/></svg>
            <h2 style={{marginLeft:'7px'}}></h2>
          </div>
          <div>
            <h2>X</h2>
          </div>
          <div className={classes.teamsSubContainer}>
            <h2 style={{marginRight:'7px'}}></h2>
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 512 512" width="20" height="20"><path d="M459.578,80.845l-128-64A7.994,7.994,0,0,0,328,16H184a7.994,7.994,0,0,0-3.578.845l-128,64C48.694,82.709,16,101.889,16,200v88a8,8,0,0,0,8,8H96V488a8,8,0,0,0,8,8H408a8,8,0,0,0,8-8V296h72a8,8,0,0,0,8-8V200C496,101.889,463.306,82.709,459.578,80.845Zm-268.145-8.5C205.291,88.04,227.015,96,256,96s50.709-7.96,64.567-23.659c10.458-11.846,14.064-25.555,15.191-35.518l15.032,7.516a79.111,79.111,0,0,1-18.228,38.592C315.535,102.22,289.775,112,256,112s-59.535-9.78-76.562-29.07A79.1,79.1,0,0,1,161.21,44.34l15.032-7.517C177.369,46.786,180.975,60.5,191.433,72.341ZM191.9,32H320.143c-.433,7.487-2.645,19.642-11.57,29.752C297.884,73.86,280.2,80,256,80c-24.106,0-41.755-6.095-52.456-18.116C194.609,51.846,192.359,39.555,191.9,32ZM32,200c0-71.113,17.962-95.723,25-102.633C66.146,103.931,94.941,136.028,95.971,280H32ZM400,480H112V288c0-80.792-8.322-139.789-24.736-175.353C82.012,101.268,76.6,93.863,71.815,89.037L146.389,51.75a94.138,94.138,0,0,0,21.054,41.769C187.64,116.4,217.435,128,256,128s68.36-11.6,88.557-34.48a94.141,94.141,0,0,0,21.054-41.77l74.574,37.287c-4.781,4.826-10.2,12.231-15.449,23.61C408.322,148.211,400,207.208,400,288Zm80-200H416.029c1.031-144.111,29.88-176.131,39-182.651,2.365,2.311,6.044,6.683,9.817,14.229C471.758,125.405,480,151.971,480,200Z"/></svg>
          </div>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
          className={classes.buttonGroup}
        >
          <Button><h3>One</h3></Button>
          <Button><h3>X</h3></Button>
          <Button><h3>Three</h3></Button>
        </ButtonGroup>
      </CardActions>
    </Card>
    
  );
};

const useStyles = makeStyles({
  root: {
    marginTop: '70px',
    minWidth: 275,
    maxHeight: 350,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  buttonGroup: {

  },
  cardActions:{
    display: 'flex',
    justifyContent: 'center',
  },
  teamsSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  teamsContainer:{
    display: 'flex',
    justifyContent:'space-evenly',
    width:'50%'
  }
});
