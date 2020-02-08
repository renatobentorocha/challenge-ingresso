import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
`;

export const Content = styled.div`
  padding: 10px;
  height: 54px;
  position: relative;
  background: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  > div {
    position: relative;
    display: flex;
    align-items: center;

    > a:first-child {
      margin-right: 20px;
    }

    > a {
      display: flex;
      align-items: center;
    }
  }
`;

export const Text = styled.span`
  display: inline-block;
  font-size: 0.813rem;
  color: #fff;
  text-align: right;
  cursor: pointer;
`;
