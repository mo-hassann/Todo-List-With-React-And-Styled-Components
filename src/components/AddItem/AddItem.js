import React from "react";
import { AddItemCon } from "./AddItem.styled";

export default function AddItem({ handleClick }) {
  return <AddItemCon onClick={handleClick}>+</AddItemCon>;
}
