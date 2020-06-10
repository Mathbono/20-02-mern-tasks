import { combineReducers } from 'redux';

import apiTasks from './apiTasks';
import visibilityFilters from './visibilityFilters';
import selectedTask from './selectedTask';

const root = combineReducers({
	apiTasks,
	visibilityFilters,
	selectedTask
});

export default root;
