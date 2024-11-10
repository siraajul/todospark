import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  //Add Function
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  //Delete Function
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }
  //Update Function
  function handleUpdateTodo(index) {}
  return (
    <>
      <>
        <TodoInput handleAddTodos={handleAddTodos} />
        <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
      </>
    </>
  );
}

export default App;
