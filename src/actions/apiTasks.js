import * as types from '../constants/apiTasks';

const treat = (url, options, starter) => async dispatch => {
	dispatch({
		type: starter,
		payload: {}
	});
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		if (response.ok) {
			dispatch({
				type: types.SUCCESS,
				payload: data
			});
		}
		else {
			dispatch({
				type: types.ERROR,
				payload: data
			});
		}
	}
	catch {
		dispatch({
			type: types.ERROR_CONNECTION,
			payload: {}
		});
	}
}

export const createApiTask = text => treat(
	"http://localhost:3001/api/v1/task",
	{method: "POST", headers: {
		"Content-Type": "application/json",
		"Access-Control-Request-Headers": "Content-Type"
	}, body: JSON.stringify({text: text})},
	types.CREATE_TASK_START
);

export const getAllApiTasks = () => treat(
	"http://localhost:3001/api/v1/tasks",
	{method: "GET"},
	types.GET_ALL_TASKS_START
);

export const getApiTask = id => treat(
	`http://localhost:3001/api/v1/task/${id}`,
	{method: "GET"},
	types.GET_TASK_START
);

export const toggleApiTask = id => treat(
	`http://localhost:3001/api/v1/task/${id}`,
	{method: "PUT"},
	types.TOGGLE_TASK_START
);

export const cleanAllApiTasks = () => treat(
	"http://localhost:3001/api/v1/tasks",
	{method: "DELETE"},
	types.CLEAN_ALL_TASKS_START
);
