import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "../TodoForm/TodoForm";

const Todo = ({ todo, removeTodo, updateTodo, completeTodo }) => {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});
	const { id, text } = todo;

	const submitUpdate = (value) => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};

	if (edit.id) {
		return <TodoForm onSubmit={submitUpdate} edit={edit} />;
	}

	return (
		<div className={todo.isComplete ? "todo-row complete" : "todo-row"}>
			<div onClick={() => completeTodo(todo.id)} className="todo-text">
				{text}
			</div>
			<div className="icons">
				<TiEdit
					onClick={() => setEdit({ id: id, value: text })}
					className="edit-icon"
				/>
				<RiCloseCircleLine
					onClick={() => removeTodo(id)}
					className="delete-icon"
				/>
			</div>
		</div>
	);
};

export default Todo;
