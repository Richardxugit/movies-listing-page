import { Card, Button, Image, Typography } from "antd";

import { config } from "../config";

import "./MovieCard.css";

const { Meta } = Card;

interface MovieCardProps {
  title: string;
  poster: string;
  overview: string;
}

const MovieCard = ({ title, poster, overview }: MovieCardProps) => {
  return (
    <div className="card">
      <Card
        style={{ width: 300, height: 650 }}
        cover={<Image src={config.IMAGE_URL + poster} />}
      >
        <span className="layout">
          <Meta
            title={title}
            description={
              <Typography.Paragraph
                ellipsis={{
                  rows:3,
                  expandable: false,
                }}
              >
                {overview}
              </Typography.Paragraph>
            }
          />
          <Button className="button">Read More...</Button>
        </span>
      </Card>
    </div>
  );
};

export default MovieCard;
