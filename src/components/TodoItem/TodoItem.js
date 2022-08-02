import React from "react";
import { TodoItemCon } from "./TodoItem.styled";
import RemoveItem from "../RemoveItem/RemoveItem";

export default function Index({ handleClick, bg, title, descr, handleRemove }) {
  const removeItem = (e) => {
    e.stopPropagation();
    handleRemove();
  };

  return (
    <TodoItemCon bg={bg} onClick={() => handleClick()}>
      <RemoveItem removeItem={removeItem} />
      <h3>{title}</h3>
      <p>{descr}</p>
    </TodoItemCon>
  );
}
