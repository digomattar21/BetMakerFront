import { makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/UserProvider/context";
import Api from "../../utils/api.utils";
import CasinoGameCard from "../Casino/CasinoGameCard";

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    casinoContainer:{
        width:'100%',
        height:'auto',
        display:'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    }
}));


const IndexMiddleSection = () => {
  const classes = useStyles();
  const { userAuth, changeUserAuth } = useContext(AuthContext);
  const [bjPath, setBjPath] = useState('#');
  const [roulettePath, setRoulettePath] = useState('#');

  useEffect(()=>{
    if (userAuth){
        setBjPath('/casino/blackjack');
        setRoulettePath('/casino/roulette')
    }else{
        setBjPath('#');
        setRoulettePath('#')
    }
  },[userAuth])

  return (
      <div className={classes.mainContainer}>
        <div className={classes.casinoContainer}>

            <CasinoGameCard name='BlackJack' description='6 deck game pays 3/2' imgSrc='assets/img/bjimg1.jpg' path={bjPath}/>
            <CasinoGameCard name='Roulette' description='New Roulette Game On Demand' imgSrc='assets/img/rouletteimg1.jpg' path={roulettePath}/>

        </div>
        
      </div>
  )
};







export default IndexMiddleSection;