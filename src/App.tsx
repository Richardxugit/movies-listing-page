import { Layout } from "antd";

import "./App.css";
import "antd/dist/antd.css";

import MovieCard from "./components/MovieCard";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout className="App">
      <Layout>
        <Header>
          <div className="logo">
            <img src="assets/logo.svg" alt="logo" />
          </div>
        </Header>
        <Content className="content"><MovieCard /></Content>
      </Layout>
    </Layout>
  );
};

export default App;
