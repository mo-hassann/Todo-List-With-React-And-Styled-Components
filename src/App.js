import React, { useState } from "react";
import { GlobalStyles, theme } from "./GlobalStyles.styled";
import { ThemeProvider } from "styled-components";

import SearchItem from "./components/SearchItem/SearchItem";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  const [searchKey, setSearchKey] = useState("");
  console.log(searchKey);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <SearchItem setSearchKey={setSearchKey} />
        <TodoList searchKey={searchKey} />
      </>
    </ThemeProvider>
  );
}
