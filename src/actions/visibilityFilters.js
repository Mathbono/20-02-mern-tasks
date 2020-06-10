import * as types from '../constants/visibilityFilters';

export const setVisibilityFilter = filter => ({
	type: types.SET_VISIBILITY_FILTER,
	filter: filter
})
