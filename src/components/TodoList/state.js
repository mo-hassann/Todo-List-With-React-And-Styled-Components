const localStorageElements = JSON.parse(localStorage.getItem("todoItems"));

export const updateLocalStorageElements = (newTodoItems) => {
  localStorage.setItem("todoItems", JSON.stringify(newTodoItems));
};

export const initialValue = {
  todoItems: localStorageElements || [],
  colors: ["#4caf50", "#e91e63", "#ff9800", "#795548", "#607d8b"],
  showItemModal: false,
  showItemModalId: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(action);
      const newItem = {
        ...action.newItem,
        id: Math.random(),
        color: state.colors[Math.floor(Math.random() * state.colors.length)],
      };
      const newTodoItems = [newItem, ...state.todoItems];
      return {
        ...state,
        todoItems: newTodoItems,
        showItemModal: false,
      };

    case "SHOW_ITEM_MODAL":
      return { ...state, showItemModal: true, showItemModalId: action.itemId };

    case "CLOSE_ITEM_MODAL":
      return { ...state, showItemModal: false, showItemModalId: null };

    case "UPDATE_ITEM":
      const updatedItem = action.newItem;
      const updatedTodoItems = state.todoItems.map((item) =>
        item.id === action.itemId ? { ...item, ...updatedItem } : item
      );
      return { ...state, todoItems: updatedTodoItems };

    case "REMOVE_ITEM":
      return {
        ...state,
        showItemModal: false,
        todoItems: state.todoItems.filter((item) => item.id !== action.itemId),
      };

    default:
      return state;
  }
};
