import React, { HTMLProps } from 'react';
import { IconType } from 'react-icons';
import { Spinner } from './styles';

interface Props {
  size?: number | undefined;
  style?: HTMLProps<IconType> | undefined;
}
const Loading: React.FC<Props> = ({ size, style }) => (
  <Spinner size={size} color="#fff" style={style} />
);

export default Loading;
