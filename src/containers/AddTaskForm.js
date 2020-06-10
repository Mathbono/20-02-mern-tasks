import React from 'react';
import { connect } from 'react-redux';

import { createApiTask } from '../actions/apiTasks';

let AddTaskForm = ({dispatch}) => {
	let input;
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) return;
				dispatch(createApiTask(input.value));
			}}
		>
			<input
				ref={node => {
					input = node;
				}}
			/>
			<button type="submit">Ajouter tâche</button>
		</form>
	);
}

AddTaskForm = connect()(AddTaskForm);

export default AddTaskForm;
