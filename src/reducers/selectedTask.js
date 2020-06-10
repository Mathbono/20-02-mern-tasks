import * as types from '../constants/selectedTask';

export default function selectedTask(state = {}, action) {
	switch (action.type) {

		case types.SELECTED_TASK:
			return action.task;

		default:
			return state;
	}
}
