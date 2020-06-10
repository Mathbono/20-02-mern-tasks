import * as actions from './visibilityFilters';
import * as types from '../constants/visibilityFilters';

describe('visibilityFilters actions', () => {
	it('should apply a filter', () => {
		const filter = types.VISIBILITY_FILTERS.SHOW_ACTIVE;
		const expectedAction = {
			type: types.SET_VISIBILITY_FILTER,
			filter: filter
		};
		expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction);
	});
});
