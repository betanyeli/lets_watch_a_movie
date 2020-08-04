import React, { useState, useEffect } from "react";
import {AppBar, Toolbar, IconButton, Typography, InputBase} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import * as ApiManager from "../../Services/ApiManager";
import Cards from '../Cards/Cards'
import useStyles from "./Styles";

export default function SearchAppBar() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("love");
  const [search, setSearch] = useState("love");
  useEffect(() => {
    async function getData() {
      const result = await ApiManager.listMovies(search);
     setData(result)
      console.log("resuuult con hooks", result);
      
      
    }
    getData();
  }, [search]);

  return (
      <React.Fragment>
    <div className={classes.root}>
      <AppBar position="static">
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
            Let's watch a movie :D
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
    <div className={classes.cardContainer}>
            {data.Search !== undefined ? 
                        data.Search.map(item => (
                            <Cards key={item.imdbID} props={item} />
                            
                            // <li key={item.imdbID}>
                            //   <a href={item.Title}>{item.Title}</a>
                            // </li>
                          )) : "404"
            }
            </div>
    </React.Fragment>
  );
}
