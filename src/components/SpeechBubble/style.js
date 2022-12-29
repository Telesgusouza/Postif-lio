import styled from "styled-components";

export const Container = styled.div`
  transition: all 0.15s ease-in-out;

  position: absolute !important;
  top: 32px;
  z-index: 5;
  padding: 2px 5px;
  border-radius: 3px;
  border-top-left-radius: 0;

  background-color: #222222;
  color: white;
  max-width: fit-content;

  font-size: 12px;

  &::after {
    content: "";
    transition: all 0.15s ease-in-out;
    position: absolute;
    top: -8px;
    left: 0;
    border: 4px solid #222222;
    border-right: 4px solid transparent;
    border-top: 4px solid transparent;
  }
`;
