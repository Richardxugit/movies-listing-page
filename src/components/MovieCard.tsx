import { Card, Button, Typography, Tag } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { config } from "../config";

import "./MovieCard.css";

const { Meta } = Card;

interface MovieCardProps {
  id: number;
  title: string;
  poster: string;
  overview: string;
  handleWatchedMoviesOnChange: (id: number) => void;
  checkWatched: (id: number) => boolean;
}

const MovieCard = ({
  id,
  title,
  poster,
  overview,
  handleWatchedMoviesOnChange,
  checkWatched,
}: MovieCardProps) => {
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
        <Tag visible={checkWatched(id)} color="#9352b4" className="tag">
          Watched
        </Tag>
        <span className="layout">
          <Meta
            title={title}
            description={
              <Typography.Paragraph
                ellipsis={{
                  rows: 3,
                  expandable: false,
                }}
                style={{ textAlign: "justify" }}
              >
                {overview}
              </Typography.Paragraph>
            }
          />
          <div>
            <Button className="button" size="middle" shape="round">
              <a target="_blank" href="https://www.imdb.com" rel="noreferrer">
                Read More...
              </a>
            </Button>
            {!checkWatched(id) && (
              <Button
                size="middle"
                type="ghost"
                className="toggleButton"
                shape="round"
                onClick={() => handleWatchedMoviesOnChange(id)}
              >
                Watched?
              </Button>
            )}
          </div>
        </span>
      </Card>
    </div>
  );
};

export default MovieCard;
