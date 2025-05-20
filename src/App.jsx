/**
 * App Component - main entry point for todo app
 * uses useReducer hook yo manage state
 * computes:
 * - filteredTodo : show todo based on selected filter
 * - activeCount - number if active todo
 * - hasTodoCompleted - boolean to check if any todo is completed
 * dispatch action to reducer to handle todo creation, deletion. toggle, filtering and clearing
 */

import { useReducer } from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import ListItem from "./components/ListItem";
import Footer from "./components/Footer";
import reducer, { initialState } from "./reducer/todoReducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos, filter } = state;
  console.log(todos, filter)

  const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : todos;

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const hasTodoCompleted = todos.some((todo) => todo.completed);

  return (
    <div className="card">
      <Header />
      <InputBox
        addTodoItem={(text) => dispatch({ type: "ADD_TODO", payload: text })}
      />
      <ul>
        {filteredTodos.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            toggleComplete={() =>
              dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id })
            }
            deleteTodo={() =>
              dispatch({ type: "DELETE_TODO", payload: todo.id })
            }
          />
        ))}
      </ul>
      <Footer
        activeCount={activeCount}
        setFilter={(filter) =>
          dispatch({ type: "SET_FILTER", payload: filter })
        }
        currentFilter={filter}
        clearCompleted={() => dispatch({ type: "CLEAR_COMPLETED" })}
        showClearCompleted={hasTodoCompleted}
      />
    </div>
  );
}

export default App;