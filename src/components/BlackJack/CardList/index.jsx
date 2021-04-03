import { makeStyles } from '@material-ui/core';
import React from 'react';

const CardList = (props) => {
  const classes = useStyles();

  const displayTotal = (total, totalAlt) => {
    return (total !== totalAlt && totalAlt <= 21)
      ? total + "/" + totalAlt
      : total.toString();
  }

  return (
    <div style={{height: 275}}>
      <div className={classes.mid}>
        <span className={classes.numDisplay}>
          {props.cardDisplay + " " + displayTotal(props.cardTotal, props.cardTotalAlt)}
        </span>
      </div>
      <div className={classes.mid}>
        {props.cards.map(card => <img src={card.images.png} height="170px" />)}
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

  backdrop: {
    textAlign: "center",
    margin: "100px 0",
    padding: "100px 0",
    fontSize: "5em",
    fontWeight: "bolder",
    backgroundColor: "rgba(0,24,0,0.75)",
    borderStyle: "solid",
    borderWidth: "5px",
    cursor: "pointer",
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
    fontSize: "20px"
  },
}));




export default CardList;
