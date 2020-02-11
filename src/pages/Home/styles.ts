import styled from 'styled-components';
import InputCheckBox from '../../components/InputCheckBox';
import TLoading from '../../components/Loading';

export const Container = styled.div`
  padding: 10px;
  padding-top: 54px;
  height: 100%;
`;

export const SectionFilterFilms = styled.section``;

export const Title = styled.h1`
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  line-height: 1.1;
  padding: 12px 0;
  text-transform: uppercase;
`;

export const TitleFilter = styled(Title)``;

export const FilterOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-row-gap: 12px;
`;

export const CheckBox = styled(InputCheckBox)``;

export const TitleInTheaters = styled(Title)`
  position: relative;
  color: #ff7300;

  font-weight: bold;

  border-bottom: 1px solid #5f5f5f;

  &::after {
    content: '';
    border-bottom: 1px solid #ff7300;
    width: 88px;
    position: absolute;
    bottom: -1px;
    left: 0;
  }
`;

export const FilmsWrapper = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-row-gap: 12px;
`;

export const Article = styled.article`
  margin: 0 auto;
`;

export const Image = styled.img`
  -webkit-transition: -webkit-transform 0.5s ease;
  transition: -webkit-transform 0.5s ease;
  -o-transition: -o-transform 0.5s ease;
  transition: transform 0.5s ease;
  transition: transform 0.5s ease, -webkit-transform 0.5s ease,
    -o-transform 0.5s ease;

  width: 240px;
`;

export const Loading = styled(TLoading).attrs({})``;
