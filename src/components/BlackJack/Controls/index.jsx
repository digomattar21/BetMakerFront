import { makeStyles } from '@material-ui/core';
import React from 'react';

const Controls = (props) => {
  const buttonVisible = (checkVal) => {
    return (props.isPlaying === checkVal) ? "hide" : "";
  };

  const isDisabled = () => {
    return props.isPlaying ? "Disabled" : "";
  };

  const isDealDisabled = () => {
    return props.bet === 0 ? "Disabled" : "";
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.mid}>
        <span className={classes.numDisplay}>Bet: {props.bet}</span>
      </div>
      <div className={classes.mid}>
        <span>
          <button onClick={() => props.makeBet(1)}
            className={classes.bet + ' ' + isDisabled()} disabled={props.isPlaying}>1</button>
          <button onClick={() => props.makeBet(5)}
            className={classes.bet + ' ' + isDisabled() + " bet5"} disabled={props.isPlaying}>5</button>
          <button onClick={() => props.makeBet(10)}
            className={classes.bet + ' ' + isDisabled() + " bet10"} disabled={props.isPlaying}>10</button>
        </span>
         <span style={{paddingLeft: 40}}>
           <button className={classes.btn + ' ' + isDealDisabled() + " " + buttonVisible(true)}
             onClick={() => props.dealClicked()}>Deal</button>
           <button className={classes.btn + ' ' + buttonVisible(false)}
             onClick={() => props.hitClicked()}>Hit</button>
           <button className={classes.btn + ' ' + buttonVisible(false)}
             onClick={() => props.stayClicked()}>Stay</button>
           <button className={classes.btn + ' ' + buttonVisible(true)}
             onClick={() => props.clearBet()}>Clear</button>
         </span>
        <div style={{marginTop: "30px"}}>
          <span className={classes.totalDisplay}>Chips:{props.chips}</span>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  body :{
    color: "white",
    fontSize: "20px",
    fontFamily: "helvetica",
    backgroundColor: "darkgreen",
  },

  backdrop: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position: "fixed",
      background: "rgba(200,200,200,0.2)",
  },

  cardTable :{
    padding: "15px"
  },

  hide: {
    display: "none",
  },

  btn: {
    width: "100px",
    height: "100px",
    borderColor: "darkgreen",
    borderRadius: "10px",
    background: "green",
    color: "white",
    fontSize: "20px",
  },

  btnDisabled :{
    width: "100px",
    height: "100px",
    borderColor: "darkgreen",
    borderRadius: "10px",
    background: "lightgreen",
    color: "darkgrey",
    fontSize: "20px",
  },

  // btn:hover {
  //   background: lightgreen;
  //   color: darkgrey;
  // }

  mid: {
    textAlign:"center",
    padding: "10px 0",
  },

  gutter :{
    height: "200px",
    backgroundColor: "darkgreen",
  },

  bet :{
    width: "100px",
    height: "100px",
    background: "lightgray",
    color: "black",
    fontSize: "20px",
    fontWeight: "bolder",
    borderRadius: "50px",
    border: "8px dashed black",
    margin: "4px"
  },


  betDisabled :{
    width: "100px",
    height: "100px",
    background: "lightgray",
    color: "black",
    fontSize: "20px",
    fontWeight: "bolder",
    borderRadius: "50px",
    border: "8px dashed gray",
    margin: "4px",
    color:"gray",
  },

  space :{
    width: "100px"
  },

  numDisplay :{
    background: "#000",
    padding: "10px 60px",
    borderRadius: "25px",
    opacity: 0.65,
    color:"white",
    fontSize: "20px"
  },

  totalDisplay :{
    background: "#000",
    padding: "20px 280px",
    borderRadius: "25px",
    opacity: 0.75,
    color:'white',
    fontSize: "20px",

  },
}));

export default Controls;
