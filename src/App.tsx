import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import axios from "axios";
import { config } from "./config";

import "./App.css";
import "antd/dist/antd.css";

import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import MovieCardProps from "./components/MovieCard";

const { Header, Content } = Layout;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let searchResult;
      searchResult = movies.filter(
        (movie: { title: string; overview: string }) => {
          return movie.title.toLowerCase().includes(searchValue.toLowerCase());
        }
      );
      if (!searchResult.length) {
        searchResult = movies.filter(
          (movie: { title: string; overview: string }) => {
            return movie.overview
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          }
        );
      }
      setSearchResult(searchResult);
    }, 800);
    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

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
        <Header className="header">
          <img src="assets/logo.svg" alt="logo" className="logo" />
          <div className="search-bar">
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
        </Header>
        <Content className="content">
          <div className="movies-container">
            {searchResult.map(
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
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
