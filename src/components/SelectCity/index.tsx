import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadFilmsRequest } from '../../store/modules/films/actions';
import { RootState } from '../../store/modules/combineReducers';

import { City } from '../../types/index';
import Loading from '../Loading';

import {
  Container,
  FormWrapper,
  Form,
  SelectWrapper,
  Select,
  TriangleUp,
} from './styles';

interface Props {
  className: string;
  city: City;
  cities: City[];
  setCity: React.Dispatch<React.SetStateAction<City>>;
}

const SelectCity: React.FC<Props> = ({ className, city, cities, setCity }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City>(city);

  const loading = useSelector((state: RootState) => state.films.loading);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    const option = e.target.options[e.target.selectedIndex];

    const code = Number(option.value);

    if (code) setError(false);

    setSelectedCity({
      code,
      name: option.label,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedCity.code) {
      dispatch(loadFilmsRequest(selectedCity.code));
      setCity(selectedCity);
    } else {
      setError(true);
    }
  };

  return (
    <Container className={className} onClick={e => e.stopPropagation()}>
      <FormWrapper>
        <TriangleUp />
        <Form onSubmit={handleSubmit}>
          <strong className="title">
            Você está em:
            <span>{selectedCity.name}</span>
          </strong>
          <div>
            <SelectWrapper>
              <Select
                onChange={e => handleSelectChange(e)}
                id="state"
                name="state"
                min-length="1"
                value={selectedCity.code}
              >
                <option value={0}>Estado</option>
                {cities.map(c => (
                  <option key={`${c.code}`} value={c.code} label={c.name} />
                ))}
              </Select>
            </SelectWrapper>
            {error && <span>Por favor, selecione um estado.</span>}

            <button type="submit">
              {loading ? <Loading /> : 'TROCAR CIDADE'}
            </button>
          </div>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default SelectCity;
