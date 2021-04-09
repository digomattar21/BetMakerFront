import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Icon,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import Api from "../../utils/api.utils";
import { useRouter } from "next/router";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#383838",
    marginTop: "10%",
    border: "1px solid transparent",
    borderRadius: "25px",
  },
  formControl: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    marginTop: "3%",
  },
  helperText: {
    fontSize: "12px",
    textAlign: "center",
    color: "lightgray",
  },
  inputContainer: {
    marginTop: "50px",
  },
  formTitleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
  },
  formTitle: {
    textAlign: "center",
    fontSize: "30px",
    color: "lightgray",
  },
  lockIcon: {
    marginTop: "25%",
    fontSize: "150px",
    color: "#D6ED17FF",
  },
  btnSubmitContainer: {
    marginTop: "40px",
    marginBottom: "30px",
    fontSize: "14px",
    padding: "10px 40px",
    backgroundColor: "#D6ED17FF",
    color: "#1e2833",
    "&:hover": {
      backgroundColor: "white",
      color: "#1e2833",
    },
  },
  errorMessage: {
    color: "red",
  },
}));

export const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const classes = useStyles();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let payload = {
      username: username,
      email: email,
      password: password,
    };
    try {
      console.log("entrou");
      let req = await Api.signup(payload);
      console.log(req);
      router.push("/auth/confirm");
    } catch (error) {
      console.log(error);
      setMessage(error)
    }
  };

  return (
    <>
      <Grid item xs={4} />
      <Grid item xs={3} className={classes.container}>
        <div>
          <Icon>
            <LockIcon fontSize="inherit" className={classes.lockIcon} />
          </Icon>
        </div>
        <div className={classes.formContainer}>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className={classes.formControl}
          >
            <div className={classes.inputContainer}>
              <Input
                id="email"
                name="email"
                value={email}
                onChange={(e) => handleChange(e)}
                placeholder="Email"
                type="email"
                aria-describedby="my-helper-text1"
                style={{ fontSize: "18px", color: "white" }}
              />
              <FormHelperText
                className={classes.helperText}
                id="my-helper-text1"
              >
                We'll never share your email.
              </FormHelperText>
            </div>
            <div className={classes.inputContainer}>
              <Input
                id="username"
                name="username"
                value={username}
                onChange={(e) => handleChange(e)}
                placeholder="Username"
                type="text"
                aria-describedby="my-helper-text2"
                style={{ fontSize: "18px", color: "white" }}
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
                style={{ fontSize: "18px", color: "white" }}
              />
              <FormHelperText
                className={classes.helperText}
                id="my-helper-text3"
              >
                Must Be Strong.
              </FormHelperText>
            </div>
            <div>
              <Button
                className={classes.btnSubmitContainer}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        {message && <h3 className={classes.errorMessage}>{message}</h3>}
      </Grid>
      <Grid item xs={4} />
    </>
  );
};
