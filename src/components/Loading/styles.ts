import styled, { keyframes } from 'styled-components';
import { MdRotateRight } from 'react-icons/md';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(MdRotateRight).attrs({})`
  animation: ${spin} 2s linear infinite;
`;
