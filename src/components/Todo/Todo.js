import React from "react";

const Todo = ({ todo }) => {
	return (
		<div className="todo-row">
			<div className="todo-text">{todo.text}</div>
			<div className="icons"></div>
		</div>
	);
};

export default Todo;
