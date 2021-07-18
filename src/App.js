import React from "react";
import './App.css';
import TodoForm from "./Components/TodoForm";
import ToDoOutlay from "./Components/TodoForm";
import TaskCompleted from "./Components/TaskCompleted";

function App() {
  return (
    <div className="App">
        <h1> To Do App</h1>
        <TodoForm />
        <ToDoOutlay />
        <TaskCompleted />
    </div>
  );
}

export default App;
