import { useContext, useState } from "react";
import React from "react";
import {
  Button,
  FormHelperText,
  Grid,
  Icon,
  Input,
  makeStyles,
} from "@material-ui/core";
import AuthContext from "../../context/UserProvider/context";
import Api from "../../utils/api.utils";
import { useRouter } from "next/router";
import EmailIcon from "@material-ui/icons/Email";

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
    marginTop: "10%",
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Pragmatica-EL",
    color: "lightgray",
  },
  lockIcon: {
    marginTop: "15%",
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

const Confirm = (props) => {
  const [inputCode, setInputCode] = useState("");
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const classes = useStyles();

  const { userAuth, changeUserAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputCode(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let payload = { inputCode };
    try {
      let req = await Api.confirmCode(payload);

      changeUserAuth(true);
      router.push("/");
    } catch (error) {
      console.log(error);
      changeUserAuth(false);
      setMessage(error);
    }
  };

  return (
    <>
      <Grid item xs={4} />
      <Grid item xs={3} className={classes.container}>
        <h3 className={classes.formTitle}>
          Confirme o Codigo enviado a seu email
        </h3>
        <div>
          <Icon>
            <EmailIcon fontSize="inherit" className={classes.lockIcon} />
          </Icon>
        </div>
        <div className={classes.formContainer}>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className={classes.formControl}
          >
            <div className={classes.inputContainer}>
              <Input
                id="inputCode"
                name="inputCode"
                value={inputCode}
                onChange={(e) => handleChange(e)}
                placeholder="- - - - - -"
                type="text"
                aria-describedby="my-helper-text3"
                style={{ fontSize: "20px", color: "white" }}
              />
            </div>
            <div>
              <Button
                className={classes.btnSubmitContainer}
                size="Large"
                variant="contained"
                color="inherit"
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

export default Confirm;
