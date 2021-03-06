import React from "react";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import useStyles from "./Styles";
import NotFoundImg from "../../Assets/404.png";

export const Cards = ({ props }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={props.Title} subheader={props.Year} />
      <CardMedia
        className={classes.media}
        image={props.Poster === "N/A" ? NotFoundImg : props.Poster}
        title={props.Actors}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Genre: {props.Genre}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color="secondary" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {parseInt(props.imdbRating) > 5 ? (
            <IconButton color="primary" aria-label="add to favorites"> Ranking: 
              <ThumbUpIcon />
            </IconButton>
          ) : (
            <IconButton color="primary" aria-label="add to favorites">
              Ranking: <ThumbDownIcon />
            </IconButton>
          )}
          <Typography paragraph>Actors: {props.Actors}</Typography>
          <Typography paragraph>Description: {props.Plot}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Cards;
