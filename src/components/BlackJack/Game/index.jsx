import { makeStyles } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import CardList from '../CardList';
import cards from '../cards';
import Controls from '../Controls';
import GameMessage from '../GameMessage';
import shuffle from '../shuffle';
import Api from '../../../utils/api.utils'

export const Game = (props) => {
  const [deck, setDeck] = useState([]);
  const [dealerTotal, setDealerTotal] = useState(0);
  const [dealerTotalAlt, setDealerTotalAlt] = useState(0);
  const [dealerCards, setDealerCards] = useState([]);

  const [playerTotal, setPlayerTotal] = useState(0);
  const [playerTotalAlt, setPlayerTotalAlt] = useState(0);
  const [playerCards, setPlayerCards] = useState([]);

  const [bet, setBet] = useState(0);
  const [chips, setChips] = useState(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [gameMsg, setGameMsg] = useState(null);

  const classes = useStyles();

  const prevBet = usePrevious(bet);
  const prevChips = usePrevious(chips);


  //Getting player info
  const getChips = async()=>{
    try{
      let req = await Api.getPlayerChips();
      let chipsss = req.chips;
      console.log(chipsss)
      setChips(chipsss)
    }catch(err){
      console.log(err.message)
    }
  }

  const updateChips=async(chipss)=>{
    try{
      let req = await Api.updatePlayerChips(chipss);
      console.log(req)
    }catch(err){
      console.log(err.message)
    }
  }

  useEffect(() => {
    getChips()
  },[])

  // if less then 10 cards left suffle a new deck
  const checkDeck = (deckk) => {
    return deckk.length < 10 ? deckk.concat(shuffle(cards)) : deckk;
  };

  const calcCards = () => {
    setDealerTotal(calcCardTotal(dealerCards, false));
    setDealerTotalAlt(calcCardTotal(dealerCards, true));
    setPlayerTotal(calcCardTotal(playerCards, false));
    setPlayerTotalAlt(calcCardTotal(playerCards, true));
  };

  const calcCardTotal = (cards, eleven) => {
    let sum = Object.keys(cards).reduce(function (total, card) {
      let cardVal = Number(cards[card].cardValue);
      cardVal = cardVal == 1 && eleven ? 11 : cardVal;
      return Number(total) + cardVal;
    }, 0);
    return sum;
  };

  const drawCards = (deck, playerCards, numberOfCards) => {
    var i;
    for (i = 1; i <= numberOfCards; i++) {
      let card = deck.pop();
      playerCards.push(card);
    }
    return playerCards;
  };

  //check if player bust
  const checkForBust = () => {
    let t1,
      t2,
      min,
      status = '';
    t1 = calcCardTotal(playerCards, false);
    t2 = calcCardTotal(playerCards, true);
    min = Math.min(t1, t2);
    if (min > 21) {
      status = 'Player Bust!!!';
    }
    setGameMsg(status);
  };

  const makeBet = (betVal) => {
    if (chips > betVal){
      setBet(bet + betVal);
      setChips(chips - betVal);
    }
  };

  const clearBet = () => {
    if (!isPlaying) {
      setBet(0);
      setChips(prevChips + prevBet);
    }
  };

  // Deal Cards
  const dealClicked = () => {
    let deckk = checkDeck(deck);
    console.log('deal clicked');
    if (bet === 0) return;

    drawCards(deckk, dealerCards, 2);
    drawCards(deckk, playerCards, 2);

    setDeck(deckk);
    setDealerCards(dealerCards);
    setPlayerCards(playerCards);
    setIsPlaying(true);
    calcCards();
  };

  const hitClicked = () => {
    let deckk = checkDeck(deck);
    drawCards(deckk, playerCards, 1);

    setPlayerCards(playerCards);
    setDeck(deckk);
    calcCards();
    checkForBust();
  };

  const checkDealerStatus = (dealerCards, playerTotal) => {
    let t1,
      t2,
      status = '';

    t1 = calcCardTotal(dealerCards, false);
    t2 = calcCardTotal(dealerCards, true);

    if (Math.min(t1, t2) > 21) {
      status = 'Player Wins!!!';
    } else if (
      (t1 <= 21 && t1 == playerTotal) ||
      (t2 <= 21 && t2 == playerTotal)
    ) {
      status = 'Push';
    } else if (
      (t1 <= 21 && t1 > playerTotal) ||
      (t2 <= 21 && t2 > playerTotal)
    ) {
      status = 'Dealer wins!!!';
    }

    return status;
  };

  const stayClicked = () => {
    //Draw dealer cards until value equals or is higher then user.
    let playerTotal1 = Math.max(playerTotal, playerTotalAlt);
    if (playerTotal1 > 21)
      playerTotal1 = Math.min(playerTotal1, playerTotalAlt);
    let deckk = checkDeck(deck);
    let status = checkDealerStatus(dealerCards, playerTotal1);

    if (status == '') {
      do {
        drawCards(deck, dealerCards, 1);
        status = checkDealerStatus(dealerCards, playerTotal1);
      } while (status == '');
    }

    setDeck(deckk);
    setDealerCards(dealerCards);
    setGameMsg(status);
    calcCards();
  };

  const resetGame = () => {
    debugger;
    let chipss;
    //Calculate chips
    if (gameMsg === 'Push (draw)') {
      chipss = chips + bet;
    } else if (gameMsg === 'Player Wins!!!') {
      chipss = chips + bet * 2;
    }else{
      chipss = chips;
    }

    updateChips(chipss)
    getChips()
    setDeck([]);
    setDealerTotal(0);
    setDealerTotalAlt(0);
    setDealerCards([]);
    setPlayerTotal(0);
    setPlayerTotalAlt(0);
    setPlayerCards([]);
    setIsPlaying(false);
    setBet(0);
    setGameMsg(null);
  };

  return (
    <div className={classes.gameContainer}>
      <CardList
        cardDisplay="Dealer:"
        cardTotal={dealerTotal}
        cardTotalAlt={dealerTotalAlt}
        cards={dealerCards}
      />
      <CardList
        cardDisplay="Player:"
        cardTotal={playerTotal}
        cardTotalAlt={playerTotalAlt}
        cards={playerCards}
      />
      <Controls
        bet={bet}
        chips={chips}
        isPlaying={isPlaying}
        makeBet={makeBet}
        dealClicked={() => dealClicked()}
        hitClicked={hitClicked}
        stayClicked={stayClicked}
        clearBet={clearBet}
      />
      {gameMsg ? <GameMessage msg={gameMsg} resetClicked={resetGame} /> : false}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  gameContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkgreen',
    margin: 0,
    padding: 0,
    height: '100vh'
  },
}));

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

// import { makeStyles } from '@material-ui/core';
// import React from 'react';
// import CardList from '../CardList';
// import cards from '../cards';
// import Controls from '../Controls';
// import GameMessage from '../GameMessage';
// import shuffle from '../shuffle';

// export default class Game extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       deck: [],
//       dealerTotal: 0,
//       dealerTotalAlt: 0,
//       dealerCards: [],
//       playerTotal: 0,
//       playerTotalAlt: 0,
//       playerCards: [],
//       bet: 0,
//       chips: 1000,
//       isPlaying: false,
//       gameMsg: null
//     };
//     this.classes = useStyles();
//   }

//   // if less then 10 cards left suffle a new deck
//   checkDeck = (deck) => {
//     return (this.state.deck.length < 10) ? deck.concat(shuffle(cards)) : deck;
//   };

//   calcCards = () => {
//     this.setState({
//        dealerTotal: this.calcCardTotal(this.state.dealerCards, false),
//        dealerTotalAlt: this.calcCardTotal(this.state.dealerCards, true),
//        playerTotal: this.calcCardTotal(this.state.playerCards, false),
//        playerTotalAlt: this.calcCardTotal(this.state.playerCards, true),
//     });
//   };

//   calcCardTotal = (cards, eleven) => {
//      let sum = Object.keys(cards).reduce(function(total, card) {
//         let cardVal = Number(cards[card].cardValue);
//         cardVal = (cardVal == 1 && eleven) ? 11 : cardVal;
//         return Number(total) + cardVal;
//     }, 0);
//     return sum;
//   };

//   drawCards = (deck, playerCards, numberOfCards) => {
//     var i;
//     for (i = 1; i <= numberOfCards; i++) {
//       let card = deck.pop();
//       playerCards.push(card);
//     }
//     return playerCards;
//   };

//   //check if player bust
//   checkForBust = () => {
//    let t1, t2, min, status = "";
//    t1 = this.calcCardTotal(this.state.playerCards, false);
//    t2 = this.calcCardTotal(this.state.playerCards, true);
//    min = Math.min(t1, t2);
//    if (min > 21) {
//      status = "Player Bust!!!";
//    }

//    this.setState({
//      gameMsg: status
//    });
//  };

//   makeBet = (betVal) => {
//     this.setState(prevState => ({
//       bet: prevState.bet + betVal,
//       chips: prevState.chips - betVal
//     }));
//   };

//   clearBet = () => {
//     this.setState(prevState => ({
//       bet: 0,
//       chips: prevState.chips + prevState.bet
//     }));
//   };

//   // Deal Cards
//   dealClicked = () => {
//     let deck = this.checkDeck(this.state.deck);
//     let dealerCards = this.state.dealerCards;
//     let playerCards = this.state.playerCards;

//     if (this.state.bet === 0) return;

//     this.drawCards(deck, dealerCards, 2);
//     this.drawCards(deck, playerCards, 2);

//     this.setState(prevState => ({
//       deck: deck,
//       dealerCards: dealerCards,
//       playerCards: playerCards,
//       isPlaying: true
//     }), this.calcCards());
//   };

//   hitClicked = () => {
//     let deck = this.checkDeck(this.state.deck);
//     let playerCards = this.state.playerCards
//     this.drawCards(deck, playerCards, 1);

//     this.setState(prevState => ({
//       playerCards: playerCards,
//       deck: deck,
//     }), this.calcCards(), this.checkForBust());
//   };

//   checkDealerStatus = (dealerCards, playerTotal) => {
//     let t1, t2, status = "";

//     t1 = this.calcCardTotal(dealerCards, false);
//     t2 = this.calcCardTotal(dealerCards, true);

//     if (Math.min(t1, t2) > 21) {
//       status = "Player Wins!!!";
//     }
//     else if ((t1 <= 21 && t1 == playerTotal) || (t2 <= 21 && t2 == playerTotal)) {
//       status = "Push";
//     }
//     else if ((t1 <= 21 && t1 > playerTotal) || (t2 <= 21 && t2 > playerTotal)) {
//       status = "Dealer wins!!!";
//     }

//     return status;
//   };

//   stayClicked = () => {
//     //Draw dealer cards until value equals or is higher then user.
//     let playerTotal = Math.max(this.state.playerTotal, this.state.playerTotalAlt);
//     if (playerTotal > 21)
//       playerTotal = Math.min(this.state.playerTotal, this.state.playerTotalAlt);
//     let deck = this.checkDeck(this.state.deck);
//     let dealerCards = this.state.dealerCards;
//     let status = this.checkDealerStatus(dealerCards, playerTotal);

//     if (status == "") {
//         do {
//           this.drawCards(deck, dealerCards, 1);
//           status = this.checkDealerStatus(dealerCards, playerTotal);
//         }
//         while(status == "");
//     }
// <div id="root">
//         <Game />
//       </div>
//     this.setState(prevState => ({
//       deck: deck,
//       dealerCards: dealerCards,
//       gameMsg: status,
//     }), this.calcCards());
//   };

//   resetGame = () => {
//     let chips = this.state.chips;
//     let bet = this.state.bet;
//     debugger;
//     //Calculate chips
//     if (this.state.gameMsg === "Push") {
//       chips = chips + bet;
//     }
//     else if (this.state.gameMsg === "Player Wins!!!") {
//       chips = chips + (bet * 2);
//     }

//     this.setState({
//       deck: [],
//       dealerTotal: 0,
//       dealerTotalAlt: 0,
//       dealerCards: [],
//       playerTotal: 0,
//       playerTotalAlt: 0,
//       playerCards: [],
//       isPlaying: false,
//       bet: 0,
//       chips: chips,
//       gameMsg: null
//     });
//   };

//   render() {
//     return (
//       <div className={this.classes.gameContainer}>
//           <CardList cardDisplay="Dealer:"
//             cardTotal={this.state.dealerTotal}
//             cardTotalAlt={this.state.dealerTotalAlt}
//             cards={this.state.dealerCards} />
//           <CardList cardDisplay="Player:"
//             cardTotal={this.state.playerTotal}
//             cardTotalAlt={this.state.playerTotalAlt}
//             cards={this.state.playerCards} />
//           <Controls
//             bet={this.state.bet}
//             chips={this.state.chips}
//             isPlaying={this.state.isPlaying}
//             makeBet={this.makeBet}
//             dealClicked={this.dealClicked}
//             hitClicked={this.hitClicked}
//             stayClicked={this.stayClicked}
//             clearBet={this.clearBet}
//             />
//            {this.state.gameMsg ?
//           <GameMessage msg={this.state.gameMsg} resetClicked={this.resetGame} />
//           : false}
//       </div>
//     );
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   gameContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: "darkgreen"
//   }
// }))
