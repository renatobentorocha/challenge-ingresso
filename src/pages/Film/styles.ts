import styled from 'styled-components';

interface PropsContainer {
  imageUrl: string | undefined;
}
export const Container = styled.div<PropsContainer>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: ${props => `url(${props.imageUrl})`};
  background-repeat: no-repeat;
`;

export const Header = styled.header`
  width: 100%;
  height: 100%;
  max-width: 985px;
  margin: 0 auto;
  margin-top: 9rem;
`;

export const Content = styled.div`
  display: flex;

  @media screen and (max-width: 586px) {
    flex-direction: column;
    align-items: center;
  }

  > div {
    margin-left: 15px;
  }

  svg {
    width: 30px;
    height: 30px;
    fill: #09f;
  }

  .media {
    display: flex;

    span {
      color: #09f;
      padding-left: 3px;
    }

    > a {
      display: flex;
      align-items: center;
      padding: 20px;
    }

    > a:first-child {
      padding-left: 0;
    }
  }
`;
