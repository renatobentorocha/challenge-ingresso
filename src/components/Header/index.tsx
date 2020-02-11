import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo';
import Search from '../../assets/Search';
import Location from '../../assets/Location';
import SelectCity from '../SelectCity';
import InputSearch from '../InputSearch';

import { City } from '../../types/index';
import cities, { RioDeJaneiro } from '../../data/cities';

import { loadFilmsRequest } from '../../store/modules/films/actions';

import { Container, Content, Nav, Text } from './styles';

const INTIAL_CITY = RioDeJaneiro;

const Header: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showCity, setShowCity] = useState(false);

  const refFilter = useRef<HTMLDivElement>(null);
  const refCities = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilmsRequest(INTIAL_CITY.code));
  }, []);

  useEffect(() => {
    function handle(ref: HTMLDivElement, event: MouseEvent) {
      return ref && event.target instanceof Node && !ref.contains(event.target);
    }

    function handleFilter(event: MouseEvent) {
      if (refFilter.current && handle(refFilter.current, event)) {
        setShowFilter(false);
      }
    }

    function handleCities(event: MouseEvent) {
      if (refCities.current && handle(refCities.current, event)) {
        setShowCity(false);
      }
    }

    document.addEventListener('mousedown', handleFilter);
    document.addEventListener('mousedown', handleCities);

    return () => {
      document.removeEventListener('mousedown', handleFilter);
      document.removeEventListener('mousedown', handleCities);
    };
  }, []);

  const [city, setCity] = useState<City>(INTIAL_CITY);

  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <div ref={refFilter}>
            <a href="/#" onClick={() => setShowFilter(!showFilter)}>
              <Search />
              <Text id="search">Busca</Text>
            </a>
            {showFilter && <InputSearch className="input-search" />}
          </div>
          <div ref={refCities}>
            <a href="/#" onClick={() => setShowCity(!showCity)}>
              <Location />
              <Text id="location">{city.name}</Text>
            </a>
            {showCity && (
              <SelectCity
                className="select-city"
                city={city}
                cities={cities}
                setCity={setCity}
              />
            )}
          </div>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
