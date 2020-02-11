import React from 'react';
import { useSelector } from 'react-redux';
import { OptionsType, ValueType, ActionMeta } from 'react-select';
import history from '../../Routes/history';

import { RootState } from '../../store/modules/combineReducers';
import { IEvent } from '../../store/modules/films/types';

import Search from '../../assets/Search';

import { customStyles } from '../../styles/ReactSelect';

import {
  Container,
  FormWrapper,
  Form,
  SelectWrapper,
  Select,
  TriangleUp,
} from './styles';

const InputSearch: React.FC = () => {
  const events = useSelector((state: RootState) => state.films.events);

  const filterFilms = (inputValue = '') => {
    return events.filter(
      data => data.event.title.search(new RegExp(inputValue, 'i')) > -1
    );
  };

  const loadOptions = async (
    inputValue: string,
    callback: (options: OptionsType<IEvent>) => void
  ) => {
    callback(filterFilms(inputValue));
  };

  const onChange = (value: ValueType<any>, action: ActionMeta) => {
    if (value && value.event) {
      history.push('/filme', {
        movie: value.event,
      });
    }
  };

  return (
    <Container id="container">
      <FormWrapper>
        <TriangleUp />
        <Form>
          <h2 className="title">O que você procura?</h2>

          <SelectWrapper>
            <Select
              onChange={onChange}
              autoFocus
              styles={customStyles}
              components={{ DropdownIndicator: () => <Search /> }}
              cacheOptions
              loadOptions={loadOptions}
              getOptionLabel={(option: IEvent) => option.event.title}
              getOptionValue={(option: IEvent) => option.event.id}
              defaultOptions
            />
          </SelectWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default InputSearch;
