import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1046px;
  padding-bottom: 50px;
`;

export const filtering = styled.div`
  h1 {
    font-weight: 500;
  }

  margin-bottom: 16px;
`;

export const ListOptinsFiltering = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 10px;

  @media (max-width: 560px) {
    flex-wrap: wrap;
  }
`;

export const Option = styled.li`
  position: relative;

  ${(props) =>
    props.toggle
      ? css`
          background-color: #2f80ed;
          border: 1px solid #2f80ed;
          color: white;
        `
      : css`
          background-color: transparent;
          border: 1px solid #4f4f4f;
          color: #4f4f4f;

          &:hover {
            border-color: #2f80ed;
            color: #2f80ed;
          }
        `}

  margin-right: 16px;
  padding: 8px 22px;
  border-radius: 12px;

  margin-top: 15px;

  transition: all 0.15s ease-in-out;
  cursor: pointer;

  @media (max-width: 560px) {
    font-size: 14px;
  }
`;

export const ContainerListProjects = styled.article`
  display: grid;
  grid-gap: 25px;
`;

export const Project = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;

  h1 {
    margin: 15px 0;
    font-size: 22px;
  }

  p {
    min-height: 82px;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;

    color: #828282;
    overflow: hidden;
  }

  @media (max-width: 590px) {
    flex-direction: column;

    width: 100%;
    max-width: 100%;
  }
`;

export const ImgProj = styled.div`
  height: 100%;
  max-height: 200px;
  width: 100%;
  max-width: 200px;

  margin-right: 20px;

  background-image: url(${(props) => props.srcDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border-radius: 12px;

  @media (max-width: 590px) {
    max-width: 100%;
    height: 200px;
    margin-bottom: 12px;

    background-image: url(${(props) => props.srcMobile});
  }
`;

export const InfoProject = styled.div`
  width: 80%;
`;

export const ContainerButton = styled.div`
  margin-top: 10px;
  width: 100%;
  max-width: 180px;

  display: flex;
  justify-content: space-between;
`;

export const Button = styled.a`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.ftColor};

  width: 85px;
  height: 33px;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #2f80ed;
  border-radius: 8px;
  font-size: 14px;

  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

export const ContainerListing = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  div {
  }
`;

export const option = styled.div`
  margin-left: 12px;
  border: 1px solid #4f4f4f;
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  border-radius: 4px;

  ${(props) =>
    props.selected
      ? css`
          background-color: #2f80ed;
          color: white;
          border-color: #2f80ed;
        `
      : css`
          background-color: transparent;
        `}

  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    border-color: #2f80ed;
    color: #2f80ed;
  }
`;

export const arrow = styled(option)`
  rotate: ${(props) => props.rotate + "deg"};

  img {
    height: 12px;
    object-fit: contain;
  }
`;
