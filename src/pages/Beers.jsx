import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import Menu from "./Menu/Menu.js";
import Search from "../components/Search/Search";
import axios from "axios";


const Beers = () => {

    const [fetching, setFetching] = useState(false);
    const [beers, setBeers] = useState([]);
    const [text, setText] = useState([]);
  
    useEffect(() => {
      axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
        setBeers(response.data);
        setText(response.data);
        setFetching(true);
      });
  
    }, []);
  
    const filter = (filteredText) => {
      let inputText = beers;
  
      if (text === "") {
        setText(beers);
      } else {
        setText(
          inputText.filter((beer) => beer.name.includes(text))
        );
      }
    };
  
    return fetching ? (
      <div>
        <Menu />
        <Search filter={filter} />
        <div className="beerContainer">
          {filteredText.map((beer) => {
            return (
              <Link to={`/beer/${beer._id}`} key={beer._id}>
                <div className="beerContainerSingular">
                  <div className="beerImageContainer">
                    <img src={beer.image_url} class="beerListImage" alt="Beer" />
                  </div>
                  <div className="beerInfo">
                    <h1>{beer.name}</h1>
                    <h3>{beer.tagline}</h3>
                    <p>
                      <span className="beerInfoSpan">Created by: </span>
                      <span className="preventClickColor">{beer.name}</span>
                    </p>
                  </div>
                </div>
                <hr />
              </Link>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="loadingFetchingPage">Loading</div>
    );
  };
  
  export default Beers;