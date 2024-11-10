import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let todos = ["Go to the gym", "Eat more fruits and veg"];

  return (
    <>
      <>
        <TodoInput todos={todos} />
        <TodoList todos={todos} />
      </>
    </>
  );
}

export default App;
