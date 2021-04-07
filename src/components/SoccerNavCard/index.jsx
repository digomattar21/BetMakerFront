import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    gridRow: {
      marginTop: '0px',
    },
    sideBar: {
      margin: 0,
      padding: 0,
    },
    sportDiv:{
      height: '35px',
      width:'100%',
      backgroundColor: '#383838',
      padding:'10px',
      cursor:'pointer'
    },
    sportTitle:{
      color: '#d3d3d3',
      marginLeft:'10px',
      fontSize: '17px',
      fontWeight: 'bold',
      fontFamily: 'Pragmatica-EL'
    }
  }));


export const SoccerNavCard = () => {
  const classes = useStyles();
  return (
    <Link href={`/sports/soccer`}>
        <Grid item xs={12} className={classes.gridRow}>
            <div className={classes.sportDiv} onMouseOver={(e)=>handleMouseOver(e)} onMouseOut={(e)=>handleMouseOut(e)}>
                <h1 className={classes.sportTitle}>Soccer</h1>
            </div>
        </Grid>
    </Link>
  );
};

function handleMouseOver(e){
  e.target.style.fontSize='19px'
  e.target.style.color='white'

}

function handleMouseOut(e){
  e.target.style.fontSize='17px'
  e.target.style.color='#d3d3d3'

}




  
