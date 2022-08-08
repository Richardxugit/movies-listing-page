import { Card, Button, Typography } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    <div className="card-container">
      <Card
        style={{ width: 300, height: 650 }}
        cover={
          <LazyLoadImage
            width={300}
            height={450}
            effect="black-and-white"
            alt="This is a post"
            src={config.IMAGE_URL + poster}
            loading="lazy"
          />
        }
      >
        <span className="layout">
          <Meta
            title={title}
            description={
              <Typography.Paragraph
                ellipsis={{
                  rows: 3,
                  expandable: false,
                }}
              >
                {overview}
              </Typography.Paragraph>
            }
          />
          <Button className="button">
            <a target="_blank" href="https://www.imdb.com">
              Read More...
            </a>
          </Button>
        </span>
      </Card>
    </div>
  );
};

export default MovieCard;
