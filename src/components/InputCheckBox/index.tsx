import React from 'react';

interface Props {
  title: string;
  name?: string;
  id: string;
}

export default function InputCheckBox({ title = '', id = '', name = '' }) {
  return (
    <label htmlFor={id} style={{ display: 'flex', alignItems: 'center' }}>
      {title}
      <input
        id={id}
        name={name}
        type="checkbox"
        style={{
          height: '20px',
          width: '20px',
          marginLeft: '5px',
          cursor: 'pointer',
        }}
      />
    </label>
  );
}
