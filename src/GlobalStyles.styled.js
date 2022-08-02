import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    background: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textColor};
    font-family: Arial, Helvetica, sans-serif;
}

#root{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}

::placeholder { 
  color: #fff;
  opacity: 0.8;
}

`;

export const theme = {
  colors: {
    firstColor: "#673ab7",
    firstColorDarker: "#522e93",
    backgroundColor: "linear-gradient(220deg, #9c27b0, #3f51b5)",
    titleColor: "#fff",
    textColor: "#eee",
  },
  transitions: {
    mainTransition: "ease 0.6s",
  },
  boxShadows: {
    mainBoxShadow: "5px 7px 13px rgba(0,0,0, 0.22)",
  },
};

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.firstColor};
  color: ${({ theme }) => theme.colors.textColor};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 1.4rem;
  transition: ${({ theme }) => theme.transitions.mainTransition};

  &.error {
    pointer-events: none;
    opacity: 0.5;
  }

  &.cancle {
    background-color: #e91e63;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonCon = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
