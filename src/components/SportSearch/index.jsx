import React from 'react';
import { Grid, makeStyles, fade } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';



export const SportSearch = ({searchValue, handleSearchValueChange}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.gridRow}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon  />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={searchValue}
          onChange={(e)=>handleSearchValueChange(e)}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  gridRow: {
    backgroundColor: '#383838',
    width: '100%',
    color: '#fffff',
    borderColor: 'white',
    flexGrow: 1,
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  textField: {
    color: 'white',
    fontSize: 19,
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.7),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.9),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: '35px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'black',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },

  },
}));
