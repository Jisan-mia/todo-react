import React, { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	//add todos
	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.test)) {
			return;
		}

		const newTodos = [todo, ...todos];
		setTodos(newTodos);
	};

	return (
		<div>
			<TodoForm onSubmit={addTodo}></TodoForm>
			{todos.map((todo, index) => (
				<Todo key={index} todo={todo}></Todo>
			))}
		</div>
	);
};

export default TodoList;
