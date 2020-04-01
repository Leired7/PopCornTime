import React from "react";
import Movie from "./components/Movie";
import PopCorn from "./img/palomitas-de-maiz.png";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { CardColumns } from "react-bootstrap";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmsApi: null,
      loading: true,
      favoriteFilms: []
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
          films: data.movies,
          loading: false,
          favoriteFilms: []
        });
        console.log(this.state.films);
      });
  }

  addToFavorite(indexOfMovie) {
    !this.state.favoriteFilms.includes(indexOfMovie)
      ? this.setState({
          favoriteFilms: [...this.state.favoriteFilms, indexOfMovie]
        })
      : console.log(indexOfMovie);
  }

  render() {
    if (this.state.loading) {
      return <div>"La info está llegando ..."</div>;
    }
    return (
      <React.Fragment>
        <header>
          <img src={PopCorn} alt="Logo of Pop Corn" />
          <h1>Welcome to Pop Corn Time database</h1>
        </header>
        <CardColumns className="container">
          <Movie
            infoFilms={this.state.films}
            favoriteFilms={this.state.favoriteFilms}
            addToFavorite={indexOfMovie => {
              this.addToFavorite(indexOfMovie);
            }}
          />
        </CardColumns>
      </React.Fragment>
    );
  }
}

export default App;
