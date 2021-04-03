import { Button, makeStyles } from "@material-ui/core";

const GameMessage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.backdrop}>
      <p>{props.msg}</p>
      <Button size='large' variant='filled' className={classes.playAgainBtn} onClick={() => props.resetClicked()}>Play Again</Button>
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
  playAgainBtn:{
    backgroundColor:"blue",
    color:'white',
    fontSize: "20px",
    marginTop: '60px'
  }
}));

export default GameMessage;
