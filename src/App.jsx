import "./App.css";
import AddTodo from "./features/TodoList/AddTodo";
import TodoList from "./features/TodoList/TodoList";

function App() {
  return (
    <>
      <div className="title">
        <h1>Todo App_ Redux Toolkit </h1>
      </div>

      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
