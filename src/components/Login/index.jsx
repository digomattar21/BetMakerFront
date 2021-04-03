import {useContext, useState } from 'react';
import React from 'react';
import { Button, FormHelperText, Grid, Icon, Input, makeStyles } from '@material-ui/core';
import  AuthContext  from '../../context/UserProvider/context';
import Api from '../../utils/api.utils';
import LockIcon from '@material-ui/icons/Lock';
import { useRouter } from 'next/router';



export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()

  const {userAuth,changeUserAuth} = useContext(AuthContext);
  const classes = useStyles()

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
      console.log(name)
    } else {
      setPassword(value);
      console.log(password)
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let payload = { username, password };
    try {
      let req = await Api.login(payload)
      if (req.status === 200){
        router.push('/')
        changeUserAuth(true)
      }else{
        throw new Error(e)
      }

      console.log(req)
    } catch (error) {
      console.log(error);
      changeUserAuth(false)
    }
  };

  return (
    <>
    <Grid item xs={4} />
      <Grid item xs={3} className={classes.container}>
        <div>
          <Icon>
            <LockIcon fontSize='inherit'  className={classes.lockIcon}/>
          </Icon>
        </div>
        <div className={classes.formContainer}>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className={classes.formControl}
          >

            <div className={classes.inputContainer}>
              <Input
                id="username"
                name="username"
                value={username}
                onChange={(e) => handleChange(e)}
                placeholder="Username"
                type="text"
                aria-describedby="my-helper-text2"
                style={{ fontSize: '18px', color:"white" }}
              />
              <FormHelperText
                className={classes.helperText}
                id="my-helper-text2"
              >
                Must be Unique
              </FormHelperText>
            </div>
            <div className={classes.inputContainer}>
              <Input
                id="password"
                name="password"
                value={password}
                onChange={(e) => handleChange(e)}
                placeholder="********"
                type="password"
                aria-describedby="my-helper-text3"
                style={{ fontSize: '18px', color:"white" }}
              />
              <FormHelperText
                className={classes.helperText}
                id="my-helper-text3"
              >
                Must Be Strong.
              </FormHelperText>
            </div>
            <div>
              <Button className={classes.btnSubmitContainer} variant="contained" color="primary" type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </Grid>
      <Grid item xs={4} />
      </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383838',
    marginTop: '10%',
    border: '1px solid transparent',
    borderRadius: '25px'
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: '3%',
  },
  helperText: {
    fontSize: '12px',
    textAlign: 'center',
    color:'lightgray'
  },
  inputContainer: {
    marginTop: '50px',
  },
  formTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '8%',
  },
  formTitle: {
    textAlign: 'center',
    fontSize: '30px',
    color:'lightgray'
  },
  lockIcon:{
    marginTop:'25%',
    fontSize: '125px',
    color:'#D6ED17FF'
  },
  btnSubmitContainer: {
    marginTop:'40px',
    marginBottom:'30px',
    fontSize: '14px',
    padding:'10px 40px',
    backgroundColor:'#D6ED17FF',
    color: '#1e2833',
    '&:hover': {
      backgroundColor: 'white',
      color: '#D6ED17FF'
    }
}
}));

