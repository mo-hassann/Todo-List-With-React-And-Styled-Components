import styled from "styled-components";
import { TodoItemCon } from "../TodoItem/TodoItem.styled";

export const AddItemCon = styled(TodoItemCon)`
  background-color: transparent;
  border: 2px solid #eee;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
  grid-column: 1 !important;
  grid-row: 1 !important;

  &:hover {
    background-color: #eee;
    color: #333;
    transform: unset;
    opacity: unset;
  }
`;
