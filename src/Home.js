import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
const Card = ({ movie }) => {
  const { title, poster_path, overview } = movie;
  return (
    <li className="list">
      <div className="card">
        <div className="title">{title}</div>
        <div className="overview">{overview}</div>
        <img
          className="image"
          alt="movie bg"
          src={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
        />
      </div>
    </li>
  );
};
const Home = () => {
  const [data, setData] = useState();
  const getDetails = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setData(data);
      });
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <ul className="home">
        {data && data.results.map((movie) => <Card movie={movie} />)}
      </ul>
    </div>
  );
};

export default Home;
