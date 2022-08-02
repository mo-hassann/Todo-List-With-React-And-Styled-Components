import React, { useEffect, useReducer } from "react";
import { reducer, initialValue, updateLocalStorageElements } from "./state";

import { TodoListCon } from "./TodoList.styled";

import TodoItem from "../TodoItem/TodoItem";
import AddItem from "../AddItem/AddItem";
import TodoItemModal from "../TodoItemModal/TodoItemModal";

export default function TodoList({ searchKey }) {
  const [state, dispach] = useReducer(reducer, initialValue);

  useEffect(() => {
    updateLocalStorageElements(state.todoItems);
  }, [state]);

  const TodoElements = () => {
    const filtredTodoItems = state.todoItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchKey.toLowerCase()) ||
        item.descr.toLowerCase().includes(searchKey.toLowerCase())
    );
    console.log(filtredTodoItems);
    return filtredTodoItems.map((item) => {
      return (
        <TodoItem
          key={item.id}
          handleClick={() => dispach({ type: "SHOW_ITEM_MODAL", itemId: item.id })}
          handleRemove={() => dispach({ type: "REMOVE_ITEM", itemId: item.id })}
          bg={item.color}
          title={item.title}
          descr={item.descr}
        />
      );
    });
  };

  return (
    <TodoListCon>
      {!searchKey && <AddItem handleClick={() => dispach({ type: "SHOW_ITEM_MODAL" })} />}
      {TodoElements().length ? TodoElements() : <div className="no-items">no items 😑</div>}
      {state.showItemModal && (
        <TodoItemModal
          todoItem={state.todoItems.find((item) => item.id === state.showItemModalId)}
          updateItem={(newItem) =>
            state.showItemModalId
              ? dispach({ type: "UPDATE_ITEM", itemId: state.showItemModalId, newItem })
              : dispach({ type: "ADD_ITEM", newItem })
          }
          closeItemModal={() => dispach({ type: "CLOSE_ITEM_MODAL" })}
        />
      )}
    </TodoListCon>
  );
}
