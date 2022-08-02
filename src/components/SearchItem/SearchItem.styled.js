import styled from "styled-components";

export const SearchItemCon = styled.input`
  background: rgb(0, 0, 0, 0.1);
  border: none;
  border-radius: 10px;
  max-width: 80vw;
  width: 300px;
  height: 50px;
  padding-left: 10px;
  font-size: 1.3rem;
  color: #fff;
  outline: none;
  transition: ${({ theme }) => theme.transitions.mainTransition};
  box-shadow: ${({ theme }) => theme.boxShadows.mainBoxShadow};
  &:focus {
    background-color: rgb(0, 0, 0, 0.3);
  }
`;
