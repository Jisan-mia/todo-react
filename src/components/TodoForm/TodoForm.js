import React, { useState } from "react";

const TodoForm = (props) => {
	const [input, setInput] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={(e) => setInput(e.target.value)}
				type="text"
				value={input}
				className="add-todo-input"
				placeholder="Add a todo"
				name="text"
			/>
			<input type="submit" value="Add Todo" />
		</form>
	);
};

export default TodoForm;
