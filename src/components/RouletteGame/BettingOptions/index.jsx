import { makeStyles } from "@material-ui/core";
import React from "react";
// import Five from "../../../../public/assets/img/5-chip.png";
// import TwentyFive from "../../../../public/assets/img/25-chip.png";
// import OneHundred from "../../../../public/assets/img/100-chip.png";
// import FiveHundred from "../../../../public/assets/img/500-chip.png";
// import OneThousand from "../../../../public/assets/img/1000-chip.png";
// import TenThousand from "../../../../public/assets/img/10k-chip.png";
// import FiftyThousand from "../../../../public/assets/img/50k-chip.png";
// import OneHundredK from "../../../../public/assets/img/100k-chip.png";
// import FiveHundredK from "../../../../public/assets/img/500k-chip.png";
// import OneMillion from "../../../../public/assets/img/1m-chip.png";
// import SpinCircle from "../../../../public/assets/img/spin-circle.png";
// import Wheel from "../../../../public/assets/img/roulette-wheel.png";

export function BettingOptions({
  chipCount,
  currentBetValue,
  setCurrentBetValue,
  spinTheWheel,
  isSpinComplete,
  pendingTotalBet,
  recentBet,
  isWheelSpinning,
  winningNumber,
  undoRecentBet,
  whichMessage,
  resetLayout,
  collectWinnings,
  totalAmountWon
}) {
    const One = 'https://github.com/tfunk2/tyleRoulette/blob/main/src/images/1-chip.png?raw=true'
    const Five ='https://github.com/tfunk2/tyleRoulette/blob/main/src/images/5-chip.png?raw=true'
    const TwentyFive = 'https://github.com/tfunk2/tyleRoulette/blob/main/src/images/25-chip.png?raw=true'
    const OneHundred = 'https://github.com/tfunk2/tyleRoulette/blob/main/src/images/100-chip.png?raw=true'
    const FiveHundred = 'https://github.com/tfunk2/tyleRoulette/blob/main/src/images/500-chip.png?raw=true'
    const OneThousand = 'https://github.com/tfunk2/tyleRoulette/blob/main/src/images/1000-chip.png?raw=true'
    const TenThousand = 'https://github.com/tfunk2/tyleRoulette/blob/main/src/images/10k-chip.png?raw=true'
    const FiftyThousand = 'https://github.com/tfunk2/tyleRoulette/blob/main/src/images/50k-chip.png?raw=true'
    const OneHundredK = 'https://github.com/tfunk2/tyleRoulette/blob/main/src/images/100k-chip.png?raw=true'
    const FiveHundredK ='https://github.com/tfunk2/tyleRoulette/blob/main/src/images/500k-chip.png?raw=true'
    const OneMillion ='https://github.com/tfunk2/tyleRoulette/blob/main/src/images/1m-chip.png?raw=true'
    const SpinCircle ='https://github.com/tfunk2/tyleRoulette/blob/main/src/images/spin-circle.png?raw=true'
    const Wheel = 'https://github.com/tfunk2/tyleRoulette/blob/main/src/images/roulette-wheel.png?raw=true'
    const classes = useStyles();
  const handleChipClick = (value) => {
    if (!isSpinComplete) {
      setCurrentBetValue(value);
    }
    if (value === currentBetValue) {
      setCurrentBetValue(0);
    }
  };

  const whatColorNumber = () => {
    switch (winningNumber) {
      case "0":
        return "green-wheel-number";
        break;
      case "1":
        return "red-wheel-number";
        break;
      case "2":
        return "black-wheel-number";
        break;
      case "3":
        return "red-wheel-number";
        break;
      case "4":
        return "black-wheel-number";
        break;
      case "5":
        return "red-wheel-number";
        break;
      case "6":
        return "black-wheel-number";
        break;
      case "7":
        return "red-wheel-number";
        break;
      case "8":
        return "black-wheel-number";
        break;
      case "9":
        return "red-wheel-number";
        break;
      case "10":
        return "black-wheel-number";
        break;
      case "11":
        return "black-wheel-number";
        break;
      case "12":
        return "red-wheel-number";
        break;
      case "13":
        return "black-wheel-number";
        break;
      case "14":
        return "red-wheel-number";
        break;
      case "15":
        return "black-wheel-number";
        break;
      case "16":
        return "red-wheel-number";
        break;
      case "17":
        return "black-wheel-number";
        break;
      case "18":
        return "red-wheel-number";
        break;
      case "19":
        return "red-wheel-number";
        break;
      case "20":
        return "black-wheel-number";
        break;
      case "21":
        return "red-wheel-number";
        break;
      case "22":
        return "black-wheel-number";
        break;
      case "23":
        return "red-wheel-number";
        break;
      case "24":
        return "black-wheel-number";
        break;
      case "25":
        return "red-wheel-number";
        break;
      case "26":
        return "black-wheel-number";
        break;
      case "27":
        return "red-wheel-number";
        break;
      case "28":
        return "black-wheel-number";
        break;
      case "29":
        return "black-wheel-number";
        break;
      case "30":
        return "red-wheel-number";
        break;
      case "31":
        return "black-wheel-number";
        break;
      case "32":
        return "red-wheel-number";
        break;
      case "33":
        return "black-wheel-number";
        break;
      case "34":
        return "red-wheel-number";
        break;
      case "35":
        return "black-wheel-number";
        break;
      case "36":
        return "red-wheel-number";
        break;
      case "00":
        return "green-wheel-number";
        break;
    }
  };

  return (
    <div className="betting-options-div">
      <div className="wheel-div">
        <img
          alt="roulette wheel"
          className={
            isWheelSpinning ? "roulette-wheel-spinning" : "roulette-wheel"
          }
          src={Wheel}
        ></img>
        {!isWheelSpinning ? (
          <div className={`${whatColorNumber()} wheel-number-div`}>
            <h2 className="winning-number-h2">{winningNumber}</h2>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="resetButtonDiv">
        {isSpinComplete ? (
          <div className="winnings-div">
            {totalAmountWon > 0 ? (
              <h3>
                {whichMessage("won")}
                <span className="winningsDivNum">{totalAmountWon}</span>!
              </h3>
            ) : (
              <h3>
                {whichMessage("lost")}
                <span className="winningsDivNum">{pendingTotalBet}</span>.
              </h3>
            )}
            {chipCount < 1 && totalAmountWon === 0 && isSpinComplete ? (
              <button className="restart-button" onClick={collectWinnings}>
                Oh no, you dont have any money left
              </button> && setTimeout(()=>{collectWinnings()},2500)
            ) : (
              <button
                className="collectWinningsButton"
                onClick={collectWinnings}
              >
                {totalAmountWon > 0 ? "Collect Winnings" : "Clear Layout"}
              </button> && setTimeout(() => {collectWinnings()},3000)
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="chip-options-div">
        {chipCount >= 1 ? (
          <div className="img-div">
            <img
              alt="1 chip"
              onClick={() => handleChipClick(1)}
              className={currentBetValue === 1 ? "active-chip" : "chip-img"}
              src={One}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 5 ? (
          <div className="img-div">
            <img
              alt="5 chip"
              onClick={() => handleChipClick(5)}
              className={currentBetValue === 5 ? "active-chip" : "chip-img"}
              src={Five}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 25 ? (
          <div className="img-div">
            <img
              alt="25 chip"
              onClick={() => handleChipClick(25)}
              className={currentBetValue === 25 ? "active-chip" : "chip-img"}
              src={TwentyFive}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 100 ? (
          <div className="img-div">
            <img
              alt="100 chip"
              onClick={() => handleChipClick(100)}
              className={currentBetValue === 100 ? "active-chip" : "chip-img"}
              src={OneHundred}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 500 ? (
          <div className="img-div">
            <img
              alt="500 chip"
              onClick={() => handleChipClick(500)}
              className={currentBetValue === 500 ? "active-chip" : "chip-img"}
              src={FiveHundred}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 1000 ? (
          <div className="img-div">
            <img
              alt="1000 chip"
              onClick={() => handleChipClick(1000)}
              className={currentBetValue === 1000 ? "active-chip" : "chip-img"}
              src={OneThousand}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 10000 ? (
          <div className="img-div">
            <img
              alt="10k chip"
              onClick={() => handleChipClick(10000)}
              className={currentBetValue === 10000 ? "active-chip" : "chip-img"}
              src={TenThousand}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 50000 ? (
          <div className="img-div">
            <img
              alt="50k chip"
              onClick={() => handleChipClick(50000)}
              className={currentBetValue === 50000 ? "active-chip" : "chip-img"}
              src={FiftyThousand}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 100000 ? (
          <div className="img-div">
            <img
              alt="100k chip"
              onClick={() => handleChipClick(100000)}
              className={
                currentBetValue === 100000 ? "active-chip" : "chip-img"
              }
              src={OneHundredK}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 500000 ? (
          <div className="img-div">
            <img
              alt="500k chip"
              onClick={() => handleChipClick(500000)}
              className={
                currentBetValue === 500000 ? "active-chip" : "chip-img"
              }
              src={FiveHundredK}
            ></img>
          </div>
        ) : (
          <></>
        )}

        {chipCount >= 1000000 ? (
          <div className="img-div">
            <img
              alt="1 million chip"
              onClick={() => handleChipClick(1000000)}
              className={
                currentBetValue === 1000000 ? "active-chip" : "chip-img"
              }
              src={OneMillion}
            ></img>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="spin-img-div">
        <div className="spin-circle-container">
          <img
            alt="spin circle"
            onClick={spinTheWheel}
            className="spin-circle"
            src={SpinCircle}
          ></img>
        </div>
        {!isSpinComplete ? (
          <div className="buttons-div">
            {pendingTotalBet > 0 ? (
              <button onClick={resetLayout} className="resetButton">
                Reset All Bets
              </button>
            ) : (
              <></>
            )}
            {recentBet.length === 2 ? (
              <button onClick={undoRecentBet} className="undoBetButton">
                Undo Last Bet
              </button>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="filler-div"></div>
        )}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    "betting-options-div" :{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '10px',
        paddingBottom: '4px',
        width: '100%'
    },
    
   " chip-options-div" :{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        width: '60vw',
        height: '25vh',
    },
    
    "chip-img" :{
        height: '10vh',
        cursor: 'pointer',
        '&:hover' :{
            border: '4px gold solid',
            borderRadius: '60px'}
    },
    
    
    
    "active-chip" :{
        border: 'gold 10px solid',
        cursor: 'pointer',
        height: '10vh',
        borderRadius: '60pt',
    },
    
    "spin-circle" :{
        height: '17vh',
        cursor: 'pointer',
        /* margin-top: 10px;
        margin-bottom: 10px; */
        /* padding-top: 10px;
        padding-bottom: 10px; */
        '&:hover': {
        border: '8px gold solid',
        borderRadius: '60pt',
        '&:active' :{
            border: '4px gold solid',
            borderRadius: '60pt',   
        }
    }
    },
    
    
    
    "spin-circle-container" :{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "19.5vh",
        width: '19.5vh',
    },
    
    "spin-text" :{
        color: 'rgb(238, 238, 238)',
        fontFamily: "'Condiment', 'cursive'",
        fontSize: '4vmin',
        position: 'absolute',
        margin: '0px',
        textShadow: '2px 2px 2px rgb(167,120,51)',
        cursor: 'pointer'
    },
    
    "img-div ":{
        height: '13vmin',
        width: '13vmin',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    "spin-img-div": {
        height: '100%',
        width: "20vmin",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    
    "buttons-div" :{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '4.5vmin',
    },
    
    "filler-div" :{
        width: '100%',
        height: '4vmin',
    },
    
    "wheel-div" :{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    "roulette-wheel" :{
        height: '25vh',
    },
    "roulette-wheel-spinning" :{
        height: '25vh',
        animationName: 'spin',
        animationDuration: '500ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    },
    
    "wheel-number-div": {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '14.5vh',
        width: '14.5vh',
        borderRadius: '100pt',
        cursor: 'default',
    },
    
    "winning-number-h2" :{
        marginTop: '0px',
        marginBottom: '0px',
        color: 'rgb(240, 240, 240)',
        fontSize: '9vmin',
        borderRadius: '60pt',
        /* padding: 1vw, */
        fontFamily: "Libre Baskerville, serif",
        fontWeight: 900,
        /* width: 5%,
        height: 10%, */
        textAlign: 'center',
    },
    
    "green-wheel-number" :{
        backgroundColor: 'rgba(89, 161, 34, 0.9)',
    },
    
    "red-wheel-number" :{
        backgroundColor: 'rgba(254, 0, 0, 0.9)',
    
    },
    
    "black-wheel-number" :{
        backgroundColor: 'rgba(22, 22, 22, 0.9)',
    },
    
    "winnings-div" :{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(167,120,51, 0.85)',
        zIndex: 101,
        borderRadius: '6pt',
        padding: '3vh',
        paddingTop:  '0vh',
        paddingBottom: '0vh',
        width: '100%',
        height: '18vmin',
        fontFamily: "Condiment, cursive",
    },
      
    "winnings-div > h3" :{
        fontSize: '5.5vmin',
        color: 'rgb(8, 8, 8)',
        textShadow: 'rgb(167,120,51) 2px 2px 1px',
        textAlign: 'center',
        marginBottom: '0vh',
        marginTop: '0vh',
    },
    
    "restart-button":{
        padding: '1vh',
        marginTop: '1vh',
        borderRadius: '4pt',
        fontFamily: "Libre Baskerville, serif",
        fontSize: '0.7vw',
    },
    "collectWinningsButton":{
        padding: '1vh',
        marginTop: '1vh',
        borderRadius: '4pt',
        fontFamily: "Libre Baskerville, serif",
        fontSize: '0.7vw',
    },
    "resetButton":{
        padding: '1vh',
        marginTop: '1vh',
        borderRadius: '4pt',
        fontFamily: "Libre Baskerville, serif",
        fontSize: '0.7vw',
    },

    "undoBetButton" :{
        padding: '1vh',
        marginTop: '1vh',
        borderRadius: '4pt',
        fontFamily: "Libre Baskerville, serif",
        fontSize: '0.7vw',
    },
    
    "restart-button":{
        "&:focus" :{
        outline: 'none',
    }}, 
    "collectWinningsButton":{
        "&:focus" :{
        outline: 'none',
    }},
    "resetButton":{
        "&:focus" :{
        outline: 'none',
    }},
    "undoBetButton":{
        "&:focus" :{
        outline: 'none',
    }},
    
    "restart-button":{'&:active' :{
        backgroundColor: 'rgb(170, 170, 170)',
        border: '1px solid rgb(167,120,51)',
    }}, 
    collectWinningsButton:{'&:active' :{
        backgroundColor: 'rgb(170, 170, 170)',
        border: '1px solid rgb(167,120,51)',
    }},
    resetButton:{'&:active' :{
        backgroundColor: 'rgb(170, 170, 170)',
        border: '1px solid rgb(167,120,51)',
    }},
    undoBetButton:{'&:active' :{
        backgroundColor: 'rgb(170, 170, 170)',
        border: '1px solid rgb(167,120,51)',
    }},
    
    resetButtonDiv :{
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        width: 'auto',
        minWidth: '35vw',
        maxWidth: '65vw',
    }  ,
    
    winningsDivNum :{
        color: 'rgb(238, 238, 238)',
        marginLeft: '1vw',
    },

    "@keyframes spin": {
        from :{
            transform: 'rotate(0deg)'
        },
        to :{
            transform: 'rotate(360deg)'
        }
    }
}))