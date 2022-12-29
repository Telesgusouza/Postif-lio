import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 50px !important;
`;

export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100px;
  margin: 0 auto;
  margin-top: 40px;
  padding-bottom: 50px !important;

  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 34px;

  section {
    height: fit-content;
  }

  @media (max-width: 930px) {
    grid-template-columns: 1fr;
  }
`;
