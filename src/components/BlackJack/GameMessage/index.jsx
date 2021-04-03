import { makeStyles } from "@material-ui/core";

const GameMessage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.backdrop}>
      <p>{props.msg}</p>
      <button onClick={() => props.resetClicked()}>Play Again</button>
    </div>
  );
};


const useStyles = makeStyles((theme) => ({
  backdrop: {
    textAlign: "center",
    margin: "100px 0",
    padding: "100px 0",
    fontSize: "5em",
    fontWeight: "bolder",
    backgroundColor: "rgba(100,124,100,0.75)",
    borderStyle: "solid",
    borderWidth: "5px",
    cursor: "pointer",
  },
}));

export default GameMessage;
