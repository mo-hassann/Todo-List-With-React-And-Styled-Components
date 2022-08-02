import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { OverlayCon, TodoItemCard } from "./TodoItemModal.styled";
import { Button, ButtonCon } from "../../GlobalStyles.styled";

const Overlay = ({ closeItemModal }) => {
  return <OverlayCon onClick={closeItemModal} />;
};

const Modal = ({ todoItem = {}, updateItem, closeItemModal }) => {
  const [err, setErr] = useState(true);
  const titleRef = useRef(null);
  const descrRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value.trim();
    const descr = descrRef.current.value.trim();
    if (!err) {
      updateItem({ title, descr });
      closeItemModal();
    }
  };

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const checkErrors = () => {
    const title = titleRef.current.value.trim();
    if (title) {
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <TodoItemCard onClick={(e) => e.stopPropagation()}>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            defaultValue={todoItem.title}
            onChange={checkErrors}
            ref={titleRef}
          />
          <textarea
            placeholder="description"
            defaultValue={todoItem.descr}
            onChange={checkErrors}
            ref={descrRef}
          />
          <ButtonCon>
            <Button className={err ? "error" : ""} type="submit">
              done
            </Button>
            <Button className="cancle" onClick={closeItemModal}>
              cancle
            </Button>
          </ButtonCon>
        </form>
      </div>
    </TodoItemCard>
  );
};

export default function TodoItemModal(props) {
  return createPortal(
    <>
      <Overlay {...props} />
      <Modal {...props} />
    </>,
    document.getElementById("overlay-root")
  );
}
