import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Filter from '../../components/Filter';
import { setVisibilityFilter } from '../../actions/visibilityFilters';
import { getAllApiTasks, cleanAllApiTasks } from '../../actions/apiTasks';

const mapStateToProps = (state, ownProps) => {
	if (ownProps.children === "CLEAN") {
		return {
			disabled: state.apiTasks.present.tasks.length === 0 ? "disabled" : ""
		}
	}
	else {
		return {
			disabled: state.visibilityFilters === ownProps.filter ? "disabled" : "",
			filter: ownProps.filter
		}
	}
}
const mapDispatchToProps = dispatch => bindActionCreators({
	setVisibilityFilter, getAllApiTasks, cleanAllApiTasks
}, dispatch);

const FilterButton = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterButton;
