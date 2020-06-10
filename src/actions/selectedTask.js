import * as types from '../constants/selectedTask';

export const selectedTask = task => ({
	type: types.SELECTED_TASK,
	task: task
})
