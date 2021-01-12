import React from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
const App = () => {
	return (
		<div className="todo-app">
			<TodoList></TodoList>
		</div>
	);
};

export default App;
