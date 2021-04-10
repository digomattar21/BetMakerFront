import { Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    navbar:{
        marginTop:'70px',
        height:'40px',
        width:'100%',
        textAlign:'center',
        border: '1px solid transparent',
        borderRadius:'5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontFamily:'Pragmatica-EL',
        color:'black',
    }
    
  }));

export default function IndexMiddleSectionNav() {
    const classes = useStyles()




  return (
    <div position="fixed" className={classes.navbar}>
      <Typography variant='h3' className={classes.title}>
          Featured
      </Typography>
    </div>
  );
}
