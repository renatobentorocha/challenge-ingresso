import React from 'react';
import { components, IndicatorProps } from 'react-select';

import Search from '../../assets/Search';

export const DropdownIndicator = (props: IndicatorProps<any>) => {
  return (
    <components.DropdownIndicator {...props}>
      <Search />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
