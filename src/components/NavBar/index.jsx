import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { SettingsPopUp } from '../SettingsPopUp';
import Link from 'next/link';
import AuthContext from '../../context/UserProvider/context';
import { useRouter } from 'next/router';
import Api from '../../utils/api.utils';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import UserInfoContext from '../../context/UserInfoProvider/context';
import NotificationsIcon from '@material-ui/icons/Notifications';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: '75%',
  },
  subtitle: {
    fontSize: '14px',
    color: '#383838',
  },
  liveBtn2:{
    fontSize: '14px',
    color: '#383838',
    marginLeft: '10vw'
  },
  casinoBtn:{
    marginLeft:'10vw',
    borderRadius:'10%'
  },
  title: {
    flexGrow: 1,
    fontSize: 24,
    fontFamily: 'Pragmatica-EL',
    marginLeft: '5px',
    color: 'black',
    '&:hover': {
      color: 'white',
      fontSize: 25,
    },
  },
  loginSettingsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navbar: {
    width: '100%',
    backgroundColor: '#D6ED17FF',
  },
  menuBtnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 19,
  },
  loginBtn: {
    fontSize: '19px',
    backgroundColor: '#383838',
    color:'white'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  moneyLogo: {
    fontSize: '26px',
  },
  money:{
    fontSize: '16px',
    fontWeight: 'bold',
    color:'#383838',
    marginRight:'15px'
  },
  notificationsIcon:{
    fontSize: '23px',
    color:'black',
    backgroundColor:'transparent',
    '&:hover': {
      color: 'black',
      fontSize: '25px',
      background: 'transparent'
    }
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  const { userAuth, changeUserAuth } = useContext(AuthContext);
  const {userInfo, getUserInfo} = useContext(UserInfoContext);
  const router = useRouter();

  const [money,setMoney] = useState(null)

  const homeClick = () => {
    router.push('/');
  };

  const logoutClick = async () => {
    try {
      await Api.logout();
      changeUserAuth(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async()=>{
    try{
      if (userAuth){
        let user = await getUserInfo()
        console.log('userauth', user)
        setMoney(user.money)
      }
    }catch(err){
      console.log(err.message)
    }
  };


  useEffect(()=>{
    getUser()
  },[])

  


  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar className={classes.loginSettingsContainer}>
        <div className={classes.menuBtnContainer}>
          <div className={classes.logoContainer} onClick={() => homeClick()}>
            <MonetizationOnIcon className={classes.moneyLogo} />
            <Typography className={classes.title}>LevBets</Typography>
          </div>
          {userAuth && (
            <>
            <Link href="/casino">
            <Button className={classes.casinoBtn}>
            <Typography variant="h6" className={classes.subtitle}>
                Casino
                </Typography>
            </Button>

            </Link>
            </>
          )}
        </div>

        {!userAuth && (
          <div className={classes.menuBtnContainer}>
            <Link href="/auth/login">
              <Button
                variant="contained"
                size="large"
                className={classes.loginBtn}
                color="inherit"
              >
                <h6 style={{ fontSize: '10px',color:'white' }}>Login</h6>
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                variant="outlined"
                size="large"
                className="loginBtn"
                color="inherit"
              >
                <h6 style={{ fontSize: '10px', color:'#383838'}}>Sign Up</h6>
              </Button>
            </Link>
            <SettingsPopUp options={['About', 'Team', 'Contact']} />
          </div>
        )}

        {userAuth && (
          <div className={classes.menuBtnContainer}>
            <Link href="/account/wallet">
              <Typography className={classes.money}>$ {money && money.toString()}</Typography>
            </Link>
            <Button
              variant="contained"
              size="large"
              className="loginBtn"
              onClick={(e) => logoutClick(e)}
            >
              <h6 style={{ fontSize: '10px' }}>Log Out</h6>
            </Button>
            <Button style={{backgroundColor:'none', borderRadius:'40%'}}>
              <NotificationsIcon className={classes.notificationsIcon} />
            </Button>

            <SettingsPopUp
              options={['About', 'Contact', 'Notifications']}
            />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};


