import React, { useRef } from "react";
import { SearchItemCon } from "./SearchItem.styled";

export default function SearchItem({ setSearchKey }) {
  const searchBox = useRef(null);
  return (
    <SearchItemCon
      ref={searchBox}
      onChange={() => setSearchKey(searchBox.current.value)}
      type="text"
      placeholder="🔍 Search..."
    ></SearchItemCon>
  );
}
