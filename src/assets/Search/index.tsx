import React from 'react';

import { SvgIcon, Image } from './styles';

export default function Search() {
  return (
    <SvgIcon className="svg-icon" width="24" height="24">
      <use xlinkHref="#icon-search">
        <Image viewBox="0 0 24 24" id="icon-search">
          <title>search</title>
          <path
            fillRule="evenodd"
            d="M9.75 2.75a6.625 6.625 0 0 1 4.99 10.983c.039.027.077.06.113.095l5.569 5.57c.341.341.36.875.043 1.192-.317.318-.851.298-1.193-.043l-5.569-5.57a.939.939 0 0 1-.142-.182A6.625 6.625 0 1 1 9.75 2.75zm0 1.625a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-3.417 3.74c.206.019.36.2.341.406-.184 2.152.69 3.352 2.703 3.727a.375.375 0 0 1-.138.737c-2.398-.447-3.529-1.998-3.312-4.528.018-.206.2-.359.406-.341z"
          />
        </Image>
      </use>
    </SvgIcon>
  );
}
