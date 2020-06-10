import undoable from 'redux-undo';

import * as types from '../constants/apiTasks';

const initialState = () => ({
	completed: false,
	error: false,
	tasks: [],
	message: ""
})

const start = (state, message) => ({
	completed: false,
	error: false,
	tasks: state.tasks,
	message: message
})

function tasksList(state, action) {
	if (!state) {
		state = initialState();
	}
	switch (action.type) {

		case types.SUCCESS:
			return {
				completed: true,
				error: false,
				tasks: action.payload.tasks,
				message: action.payload.message
			}
		case types.ERROR:
			return {
				completed: true,
				error: true,
				tasks: action.payload.tasks,
				message: action.payload.message
			}
		case types.ERROR_CONNECTION:
			return {
				completed: false,
				error: true,
				tasks: [],
				message: "Connection to database failed"
			}

		case types.CREATE_TASK_START:
			return start(state, "Fetching createTask");

		case types.GET_ALL_TASKS_START:
			return start(state, "Fetching getAllTasks");

		case types.GET_TASK_START:
			return start(state, "Fetching getTask");

		case types.TOGGLE_TASK_START:
			return start(state, "Fetching toggleTask");
			
		case types.CLEAN_ALL_TASKS_START:
			return start(state, "Fetching cleanAllTasks");

		default:
			return state;
	}
}

export { tasksList };

const apiTasks = undoable(tasksList);

export default apiTasks;
