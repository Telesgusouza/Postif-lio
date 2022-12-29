import styled from "styled-components";

export const Container = styled.section`
  margin-top: 30px;
  h1 {
    margin-bottom: 26px;
  }

  margin-bottom: 50px;
`;

export const ContainerHobbies = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;

  @media (max-width: 930px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 730px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const Hobbie = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    height: 140px;

    border-radius: 12px;
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 10px;
  }
`;
