import styled from "styled-components";
import { RemoveItemCon } from "../RemoveItem/RemoveItem.styled";

export const TodoItemCon = styled.div`
  position: relative;
  padding: 1rem;
  background: ${({ bg }) => bg};
  border-radius: 7px;
  width: 170px;
  height: 170px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.mainTransition};
  animation: apper ${({ theme }) => theme.transitions.mainTransition};
  transform: scale(1);

  @keyframes apper {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  &:nth-child(2):not(&:last-child) {
    grid-row: span 2;
    height: 100%;
  }

  &:last-child:not(&:nth-child(2)) {
    grid-column: span 2;
    width: 100%;
  }

  &:nth-last-child(2):not(&:nth-child(odd)):not(&:nth-child(2)) {
    grid-column: span 2;
    width: 100%;
  }

  h3 {
    text-transform: capitalize;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.titleColor};
    text-align: center;
    overflow: hidden;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textColor};
    text-align: center;
    overflow: hidden;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  &:hover ${RemoveItemCon} {
    opacity: 1;
  }
`;
