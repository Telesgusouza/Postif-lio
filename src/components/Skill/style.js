import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 17px;
  h1 {
    font-size: 18px;
  }
`;

export const Skill = styled.div`

  display: grid;
  grid-template-columns: 2fr 4fr;
  align-items: center;

  font-size: 16px;
  font-weight: 500;

  position: relative;

  .SpeechBubble {
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  p {
    width: 95%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    cursor: default;
  }

  &:hover > .SpeechBubble {
    opacity: 1;
  }
`;

export const SkillBar = styled.div`
  position: relative;

  height: 9px;
  width: 100%;
  background-color: #c4c4c4;
  border-radius: 10px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.level}%;

    background-color: #2f80ed;
    border-radius: 10px;
  }
`;
