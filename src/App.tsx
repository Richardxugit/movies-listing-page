import { useEffect, useState } from "react";
import { Layout } from "antd";
import axios from "axios";
import { config } from "./config";

import "./App.css";
import "antd/dist/antd.css";

import MovieCard from "./components/MovieCard";

const { Header, Content } = Layout;

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `${config.BACKEND_URL}/list/1?api_key=${config.API_KEY}`
        );
        const data = response.data;
        setMovies(data.items);
      } catch (err) {
        console.error(err);
      }
    };
    getMovies();
  }, []);

  return (
    <Layout className="App">
      <Layout>
        <Header>
          <div className="logo">
            <img src="assets/logo.svg" alt="logo" />
          </div>
        </Header>
        <Content className="content">
          {movies.map(
            (movie: {
              id: number;
              title: string;
              overview: string;
              poster_path: string;
            }) => {
              return (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  overview={movie.overview}
                  poster={movie.poster_path}
                />
              );
            }
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
