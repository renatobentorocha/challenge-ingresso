import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/modules/combineReducers';

import {
  Container,
  SectionFilterFilms,
  TitleFilter,
  FilterOptions,
  CheckBox,
  TitleInTheaters,
  FilmsWrapper,
  Article,
  Image,
  Loading,
} from './styles';

export default function Home() {
  const { events, loading } = useSelector((state: RootState) => ({
    events: state.films.events,
    loading: state.films.loading,
  }));

  return (
    <Container>
      <SectionFilterFilms>
        <TitleFilter>Filmes</TitleFilter>

        <FilterOptions>
          <CheckBox title="2D" id="2D" name="2D" />
          <CheckBox title="DUB" id="DUB" name="DUB" />
          <CheckBox title="3D" id="3D" name="3D" />
          <CheckBox title="D-BOX" id="D-BOX" name="D-BOX" />
          <CheckBox title="LEG" id="LEG" name="LEG" />
          <CheckBox title="XD" id="XD" name="XD" />
          <CheckBox title="VIP" id="VIP" name="VIP" />
          <CheckBox title="4d" id="4d" name="4d" />
          <CheckBox title="Cinépic" id="Cinépic" name="Cinépic" />
        </FilterOptions>
      </SectionFilterFilms>

      {loading ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Loading size={100} />
        </div>
      ) : (
        <section>
          <TitleInTheaters>Em Cartaz</TitleInTheaters>
          <FilmsWrapper>
            {events.map(({ event }) => (
              <Article key={event.title}>
                <a
                  href={
                    event?.trailers.length > 0
                      ? event.trailers[0].url
                      : event.siteURL
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={event?.images[0].url} alt={event.title} />
                </a>
              </Article>
            ))}
          </FilmsWrapper>
        </section>
      )}
    </Container>
  );
}
