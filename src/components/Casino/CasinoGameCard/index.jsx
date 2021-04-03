import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useRouter } from 'next/router';


export default function CasinoGameCard({name,imgSrc,description}) {
  const classes = useStyles();
  const router = useRouter()

  const handlePlayClick = () => {
    router.push('/casino/blackjack')
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title="Img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actionsContainer}>
        <Button size="large" color="primary" onClick={()=>handlePlayClick()}>
          Play
        </Button>
        <Button size="large" color="primary">
          Share
        </Button>
        <Button size="large" color="primary">
          <FavoriteBorderIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
  actionsContainer:{
    display:'flex',
    justifyContent: 'center'
  }
});