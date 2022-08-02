import styled from "styled-components";

export const RemoveItemCon = styled.button`
  position: absolute;
  top: -3%;
  right: -3%;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 50%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  opacity: 0;
  transition: ${({ theme }) => theme.transitions.mainTransition};
  cursor: pointer;
  z-index: 100;

  &:hover {
    background-color: darkred;
  }
`;
