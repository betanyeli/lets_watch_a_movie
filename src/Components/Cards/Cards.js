import React from 'react';
import clsx from 'clsx';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from "./Styles";




export const Cards=({props}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props}
        subheader={props}
      />
      <CardMedia
        className={classes.media}
        image={props}
        title={props}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {props}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
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
          <Typography paragraph>{props}</Typography>
          <Typography paragraph>
           {props}
          </Typography>
          <Typography paragraph>
           {props}
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Cards;