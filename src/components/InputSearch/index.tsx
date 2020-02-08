import React from 'react';
import AsyncSelect from 'react-select/async';
import { OptionsType, components } from 'react-select';

import {
  Container,
  FormWrapper,
  Form,
  SelectWrapper,
  Select,
  TriangleUp,
} from './styles';

import { City } from '../../types/index';

import DropDownIndicator from '../ReactSelect/DropDownIndicator';

import Search from '../../assets/Search';

import { customStyles } from '../../styles/ReactSelect';

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

interface Props {
  className: string;
}

const InputSearch: React.FC<Props> = ({ className }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const filterColors = (inputValue: string) => {
    return colourOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: OptionsType<any>) => void
  ) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  return (
    <Container className={className} onClick={e => e.stopPropagation()}>
      <FormWrapper>
        <TriangleUp />
        <Form onSubmit={handleSubmit}>
          <h2 className="title">O que você procura?</h2>

          <SelectWrapper>
            <Select
              styles={customStyles}
              components={{ DropdownIndicator: () => <Search /> }}
              cacheOptions
              loadOptions={loadOptions}
              defaultOptions
            />
          </SelectWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default InputSearch;
