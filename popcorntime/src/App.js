import React from "react";
import Movie from "./components/Movie.js";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: null
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    // Send the request
    axios
      .get(
        "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      )
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          films: data.movies[0]
        });
        console.log(this.state.films);
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.films ? (
          <Movie movies={this.state.films} />
        ) : (
          <p>No data yet</p>
        )}
      </div>
    );
  }
}

export default App;
