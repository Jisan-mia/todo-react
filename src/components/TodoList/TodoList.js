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

	//update todo
	const updateTodo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}
		// const matchedTodo = todos.map(item => item.id === todoId ? newText : item)
		setTodos((prev) =>
			prev.map((item) => (item.id === todoId ? newValue : item))
		);
	};

	//remove todo
	const removeTodo = (id) => {
		const todosAfterRemove = [...todos].filter((todo) => todo.id !== id);
		setTodos(todosAfterRemove);
	};

	//complted todo
	const completeTodo = (id) => {
		let updateTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updateTodos);
	};

	return (
		<div className="todo">
			<h1>Jisan Todos</h1>
			<TodoForm onSubmit={addTodo}></TodoForm>
			{todos.map((todo, index) => (
				<Todo
					key={index}
					todo={todo}
					updateTodo={updateTodo}
					removeTodo={removeTodo}
					completeTodo={completeTodo}
				/>
			))}
		</div>
	);
};

export default TodoList;
