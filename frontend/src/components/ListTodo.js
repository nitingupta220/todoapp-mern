import React from 'react';
const ListTodo = ({ todos, deleteTodo }) => {
	return (
		<ul>
			{todos && todos.length > 0 ? (
				todos.map((todo) => {
					return (
						<li key={todo._id}>
							{todo.action}
                            <span onClick={() => deleteTodo(todo._id)} className="right">X</span>
						</li>
					);
				})
			) : (
				<li>No todo(s) left</li>
			)}
		</ul>
	);
};
export default ListTodo;
