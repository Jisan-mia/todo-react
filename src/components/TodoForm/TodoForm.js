import React, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput("");
	};
	return (
		<form onSubmit={handleSubmit} className="todo-form">
			{props.edit ? (
				<>
					<input
						onChange={(e) => setInput(e.target.value)}
						type="text"
						value={input}
						className="add todo-input"
						placeholder="Update Todo"
						name="text"
						ref={inputRef}
						autoComplete="off"
					/>
					<input
						className="todo-button edit"
						type="submit"
						value="Update Todo"
					/>
				</>
			) : (
				<>
					<input
						onChange={(e) => setInput(e.target.value)}
						type="text"
						value={input}
						className="edit todo-input"
						placeholder="Add a todo"
						name="text"
						ref={inputRef}
						autoComplete="off"
					/>
					<input className="todo-button add" type="submit" value="Add Todo" />
				</>
			)}
		</form>
	);
};

export default TodoForm;
