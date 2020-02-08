import React from 'react';
import { useDispatch } from 'react-redux';
import { loadFilmsRequest } from '../../store/modules/films/actions';

import {
  Container,
  FormWrapper,
  Form,
  SelectWrapper,
  Select,
  TriangleUp,
} from './styles';

import { City } from '../../types/index';

interface Props {
  className: string;
  cityCode: number;
  cities: City[];
  setCityCode: React.Dispatch<React.SetStateAction<number>>;
}

const SelectCity: React.FC<Props> = ({
  className,
  cityCode,
  cities,
  setCityCode,
}) => {
  const dispatch = useDispatch();

  const handleSelect = (e: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setCityCode(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(cityCode);
    dispatch(loadFilmsRequest(cityCode));
  };

  return (
    <Container className={className} onClick={e => e.stopPropagation()}>
      <FormWrapper>
        <TriangleUp />
        <Form onSubmit={handleSubmit}>
          <strong className="title">
            Você está em:
            <span> São Paulo</span>
          </strong>

          <div>
            <SelectWrapper>
              <Select
                onClick={handleSelect}
                onChange={e => handleSelectChange(e)}
                id="state"
                name="state"
                min-length="1"
                value={cityCode}
              >
                <option value="">Estado</option>
                {cities.map(c => (
                  <option key={`${c.code}`} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </SelectWrapper>
            <span className="">Por favor, selecione um estado.</span>

            <button type="submit">TROCAR CIDADE</button>
          </div>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default SelectCity;
