// Reducer function for TODO
/**
 * ADD_TODO: adds new todo item with id, text and completed status
 * TOGGLE_COMPLETE: Toggles the completed status if user selects a todo
 * DELETE_TODO: Removes a item from todo array by its id
 * SET_FILTER: Updates the current filter value
 * CLEAR_COMPLETED: removes all todos that are marked as completed
 * After every action, a new updated state is returned
 */ 

export const initialState = {
    todos: [],
    filter: "all",
  };
  
  export default function reducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: Date.now(), text: action.payload, completed: false },
          ],
        };
      case "TOGGLE_COMPLETE":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      case "SET_FILTER":
        return {
          ...state,
          filter: action.payload,
        };
      case "CLEAR_COMPLETED":
        return {
          ...state,
          todos: state.todos.filter((todo) => !todo.completed),
        };
      default:
        return state;
    }
  }