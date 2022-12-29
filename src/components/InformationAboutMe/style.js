import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  margin: 0 auto;

  margin-top: 40px;
  min-height: 311px;

  max-width: 1400px;

  @media (max-width: 856px) {
    flex-direction: column;
  }
`;

export const ImgProfilePicture = styled.img`
  width: 100%;
  max-height: 250px;
  border-radius: 12px;

  @media (max-width: 570px) {
    width: fit-content;
  }

  @media (max-width: 425px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    margin-bottom: 3px;
    font-weight: 600;
  }

  p {
    font-weight: 500;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 856px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 23px;
  }

  @media (max-width: 425px) {
    font-size: 15px;

    h1 {
      font-size: 22px;
    }
  }
`;

export const ContactInformation = styled.div`
  margin-left: 20px;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
    float: right;

    position: relative;

    cursor: pointer;

    .SpeechBubble {
      opacity: 0;
    }

    &:hover {
      .SpeechBubble {
        opacity: 1;
      }
    }

    img {
      height: 18px;
      width: fit-content;
      margin-right: 18px;
    }
  }

  @media (max-width: 856px) {
    margin: 0;
    margin-top: 31px;

    div {
      justify-content: flex-start;
      width: 100%;

      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const ContainerContentToggle = styled.div`
  width: 100%;
  max-width: 250px;

  display: flex;
  margin-right: 33px;

  @media (max-width: 856px) {
    max-width: 100%;
  }
`;

export const contentToggle = styled.div`
  display: none;

  p {
    margin-left: 30px;
  }

  @media (max-width: 856px) {
    display: block;
  }

  @media (max-width: 570px) {
    display: none;
  }
`;

export const Content = styled.div`
  margin-top: 37px;
  font-weight: 500;
  font-size: 17px;

  @media (max-width: 856px) {
    display: none;
  }

  @media (max-width: 570px) {
    display: block;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

export const SocialMedia = styled.div`
  margin-top: 15px;

  a {
    width: 25px;

    &:nth-child(1) {
      margin-right: 18px;
    }
  }

  img {
    width: 25px;
  }
`;
