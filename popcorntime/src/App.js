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
      films: null,
      loading: true
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
          {this.state.films.map((item, index) => {
            return (
              <Movie
                key={index}
                director={item.director}
                title={item.title}
                plot={item.plot}
              />
            );
          })}
        </CardColumns>
        <footer>
          Iconos diseñados por
          <a href="https://www.flaticon.es/autores/freepik" title="Freepik">
            &nbsp; Freepik &nbsp;
          </a>
          from
          <a href="https://www.flaticon.es/" title="Flaticon">
            &nbsp; www.flaticon.es &nbsp;
          </a>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
