import { createSelector } from 'reselect';

import { VISIBILITY_FILTERS } from '../constants/visibilityFilters';

const getTasks = (state) => state.apiTasks.present.tasks;
const getVisibilityFilter = (state) => state.visibilityFilters;

const getVisibleTasks = createSelector(
	[getTasks, getVisibilityFilter],
	(tasks, visibilityFilter) => {
		switch (visibilityFilter) {
			case VISIBILITY_FILTERS.SHOW_ALL:
				return tasks;
			case VISIBILITY_FILTERS.SHOW_DELETED:
				return tasks.filter((task) => task.deleted);
			case VISIBILITY_FILTERS.SHOW_ACTIVE:
				return tasks.filter((task) => !task.deleted);
			default:
				return tasks;
		}
	}
);

export default getVisibleTasks;
