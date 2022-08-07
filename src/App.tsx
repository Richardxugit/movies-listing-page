import { Layout } from "antd";

import "./App.css";
import "antd/dist/antd.css";

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
        <Content className="content">Movies List</Content>
      </Layout>
    </Layout>
  );
};

export default App;
