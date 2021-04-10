import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/UserProvider/context';
import CachedIcon from "@material-ui/icons/Cached";
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cacheIcon: {
    fontSize: "25px",
    color: "#D6ED17FF",
    animation: "$spin 3s infinite",
  },
}))


function Home() {
  const {userAuth,changeUserAuth} = useContext(AuthContext);
  const [loading, setLoading] = useState(true)
  const router = useRouter();
  const classes = useStyles();

  useEffect(()=>{
    router.push('/home')
  },[])

  return (
    <>
      {loading && 
        <CachedIcon className={classes.cachedIcon}/>
      }
    </>
  );
}





export default Home;