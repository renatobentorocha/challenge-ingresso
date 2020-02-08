import React, { useState } from 'react';

import Logo from '../../assets/Logo';
import Search from '../../assets/Search';
import Location from '../../assets/Location';

import SelectCity from '../SelectCity';
import InputSearch from '../InputSearch';

import { Container, Content, Nav, Text } from './styles';

import { City } from '../../types/index';
import cities from '../../data/cities';

const SAO_PAULO = 1;

export default function Header() {
  const [showSelectCity, setShowSelectCity] = useState(false);
  const [showInputSearch, setShowInputSearch] = useState(false);
  const [cityCode, setCityCode] = useState(SAO_PAULO);

  return (
    <Container>
      <Content>
        <Logo />
        <Nav>
          <div>
            <a href="/#" onClick={() => setShowInputSearch(!showInputSearch)}>
              <Search />
              <Text id="search">Busca</Text>
            </a>
            {showInputSearch && <InputSearch className="teste" />}
          </div>
          <div>
            <a href="/#" onClick={() => setShowSelectCity(!showSelectCity)}>
              <Location />
              <Text id="location">São Paulo</Text>
            </a>
            {showSelectCity && (
              <SelectCity
                className="teste"
                cityCode={cityCode}
                cities={cities}
                setCityCode={setCityCode}
              />
            )}
          </div>
        </Nav>
      </Content>
    </Container>
  );
}
