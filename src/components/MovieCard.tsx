import { Card, Button } from "antd";

import "./MovieCard.css";

const { Meta } = Card;

const MovieCard = () => {
  return (
    <Card
      className="card"
      style={{ width: 240 }}
      cover={<img alt="example img" src="assets/logo.svg" />}
    >
      <span className="layout">
        <Meta title="This is Title" description="This is Description" />
        <Button className="button">Read More...</Button>
      </span>
    </Card>
  );
};

export default MovieCard;
