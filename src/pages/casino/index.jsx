import { Grid, makeStyles } from '@material-ui/core';
import { CasinoNavBar, NavBar } from '../../components/Casino/CasinoNavBar';
import CasinoGameCard from '../../components/Casino/CasinoGameCard';

export default function Casino() {
  const description = `Live game pays 2:1, 6 decks `;
  const BlackJackImg = '/assets/img/blackjackImg1.png'

  return (
    <>
      <CasinoNavBar />
      <Grid container spacing={3} >
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={6}>
          <CasinoGameCard name={'BlackJack'} imgSrc={'assets/img/bjimg1.jpg'} description={description} path={'/casino/blackjack'}/>
          <CasinoGameCard name={'Roulette'} imgSrc={BlackJackImg} description={description} path={'/casino/roulette'}/>
        </Grid>


      </Grid>
    </>
  );
};



