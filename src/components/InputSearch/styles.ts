import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const Container = styled.div`
  min-width: 360px;
  position: absolute;
  top: 44px;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 99;

  @media screen and (max-width: 527px) {
    right: 0;
    min-width: 290px;
  }
`;

export const FormWrapper = styled.div`
  background-color: #252525;
  position: relative;
  padding: 25px;
`;

export const TriangleUp = styled.div`
  position: absolute;
  top: -8px;
  right: 30px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid #252525;
`;

export const Form = styled.form`
  .title {
    margin-bottom: 25px;
    display: block;

    font-size: 1.125rem;
    color: #fff;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;

  &::before {
    right: 18px;
    transform: translate(2px, 0) rotate(-45deg);

    content: '';
    position: absolute;
    top: 50%;
    background: #09f;
    display: block;
    width: 2px;
    height: 8px;
    margin-top: -5px;
  }
`;

export const Select = styled(AsyncSelect)`
  position: relative;
  font-weight: normal;
  width: 100%;

  > div:first-of-type {
    height: 100%;

    padding-right: 0;

    cursor: pointer;

    border: 1px solid transparent;
    border-radius: 4px;

    font-size: 0.875rem;

    border-left-width: 4px;
    border-left-color: #999;

    &:hover {
      border-left-color: #09f;
    }
  }
  /* width: 100%;

  padding: 0.15rem 0.75rem;
  padding-right: 0;

  height: 48px;
  cursor: pointer;
  appearance: none;

  border: 1px solid transparent;
  border-radius: 4px;

  font-size: 0.875rem;

  border-left-width: 4px;
  border-left-color: #999;

  &:active,
  &:hover {
    border-left-color: #09f;
  }

  &:focus {
    border-left-color: #09f;
  }

  option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  } */
`;
