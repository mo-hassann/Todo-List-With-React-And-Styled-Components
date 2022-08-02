import React from "react";
import { RemoveItemCon } from "./RemoveItem.styled";

export default function RemoveItem({ removeItem }) {
  return <RemoveItemCon onClick={removeItem}>x</RemoveItemCon>;
}
