import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Grid
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as ApiManager from "../../Services/ApiManager";
import Cards from "../Cards/Cards";
import useStyles from "./Styles";

export default function SearchAppBar() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("love");
  const [search, setSearch] = useState("love");
  const [details, setDetails] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await ApiManager.listMovies(search);
      
      let arrTitles = result.Search === undefined ? [] : result.Search.map(el=>el.Title)
        for (let i = 0; i < arrTitles.length; i++) {
            const moreDetails = await ApiManager.moreDetails(arrTitles[i])
            //console.log("mas detalles", moreDetails)
            details.push(moreDetails)
            //console.log("details",details)
            
        }
      setData(result);
      //console.log("resuuult con hooks", result);
    }
    getData();
  }, [search]);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" className={classes.background}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>

            <Typography className={classes.title} variant="h6" noWrap>
              Let's watch a movie
              <IconButton
              edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <FavoriteIcon />
            </IconButton>
            </Typography>
            <div className={classes.search}>
              <InputBase
                placeholder="Press Search Button to Start…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <IconButton aria-label="delete" onClick={() => setSearch(query)}>
                <SearchIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <Grid container spacing={4} className={classes.cardContainer} >
        {data.Search !== undefined
          ? details.map((item) => (
              <Grid key={item.imdbID} xs={12} sm={6} md={4} className={classes.cardContainer}>
                <Cards props={item} />
              </Grid>
            ))
          : "404"}
      </Grid>
    </React.Fragment>
  );
}
