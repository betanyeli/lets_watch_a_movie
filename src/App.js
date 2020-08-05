import React from "react";
import "./App.css";
import SearchAppBar from './Components/Navbar/Navbar'

export class App extends React.Component {
  // async componentDidMount() {
  //   let query = "Eternal Sunshine of the Spotless Mind"
  //   await ApiManager.listMovies(query);
  // }

  render() {
    return (
      <div className="App">
<SearchAppBar />
      </div>
    );
  }
}

export default App;
