import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { MdWeb } from 'react-icons/md';

import { IMovie } from '../../store/modules/films/types';
import { Container, Header, Content } from './styles';

interface RouteProps {
  movie: IMovie;
}

const Film: React.FC<RouteComponentProps<{}, {}, RouteProps>> = ({
  location: {
    state: { movie: movieProps },
  },
}) => {
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    setMovie(movieProps);
  }, [movieProps]);

  return (
    <Container imageUrl={movie?.images[1].url}>
      <Header>
        <Content>
          <img
            src={movie?.images[0].url}
            alt={movie?.title}
            style={{ width: '220px' }}
          />
          <div className="media-wrapper">
            <h1>{movie?.title}</h1>
            <div className="media">
              <a
                href={movie?.siteURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdWeb />
                <span>Site</span>
              </a>

              {movie?.trailers.map(t => (
                <a href={t.url} target="_blank" rel="noopener noreferrer">
                  <svg className="svg-icon">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="#icon-play-2"
                    >
                      <svg viewBox="0 0 24 24" id="icon-play-2">
                        <title>play-2</title>
                        <path
                          fillRule="evenodd"
                          d="M7.174 3.248L19.2 10.95c.724.51.724 1.526 0 2.004L7.174 20.718c-1.03.62-1.674-.02-1.674-.741v-16c0-1.077 1.057-1.17 1.674-.729z"
                        />
                      </svg>
                    </use>
                  </svg>
                  <span>Trailer</span>
                </a>
              ))}
            </div>
          </div>
        </Content>
      </Header>
    </Container>
  );
};

export default Film;
