import styled from 'styled-components';

export const Container = styled.div`
  min-width: 360px;
  position: absolute;
  top: 44px;
  right: 10px;
  display: flex;
  flex-direction: column;
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

    > span {
      padding-left: 5px;
    }
  }

  > div {
    > span {
      display: inline-block;
      padding: 5px;
      margin-top: 5px;
      font-size: 0.813rem;
      color: #f30;
      border: 1px solid #f30;
      line-height: normal;
    }

    button {
      min-width: 169px;
      border-radius: 4px;
      text-transform: uppercase;
      font-size: 1rem;

      color: #252525;
      background-color: #09f;
      border-color: #09f;

      display: inline-block;
      font-weight: 400;
      line-height: 1.4;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;

      user-select: none;
      border: 1px solid transparent;
      padding: 0.563rem 1.062rem;

      margin-top: 1.062rem;
    }

    > span {
      display: block;
    }
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

  &::after {
    right: 13px;
    transform: translate(2px, 0) rotate(45deg);

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

export const Select = styled.select`
  margin-bottom: 1.062rem;
  width: 100%;

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
  }
`;
