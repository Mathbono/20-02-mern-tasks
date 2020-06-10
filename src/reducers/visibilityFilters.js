import * as types from '../constants/visibilityFilters';

export default function visibilityFilters(state = "", action) {
	switch (action.type) {

		case types.SET_VISIBILITY_FILTER:
			return action.filter;

		default:
			return state;
	}
}
