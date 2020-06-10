import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ disabled, filter, children, setVisibilityFilter, getAllApiTasks, cleanAllApiTasks }) => (
	<button
		onClick={() => {
			if (children === "CLEAN") {
				cleanAllApiTasks();
			}
			else {
				setVisibilityFilter(filter);
				getAllApiTasks();
			}
		}}
		disabled={disabled}
		style={{
			marginLeft: "4px"
		}}
	>
		{children}
	</button>
);

Filter.propTypes = {
	disabled: PropTypes.string.isRequired,
	filter: PropTypes.string,
	children: PropTypes.node.isRequired,
	setVisibilityFilter: PropTypes.func.isRequired,
	cleanAllApiTasks: PropTypes.func.isRequired,
	getAllApiTasks: PropTypes.func.isRequired
};

export default Filter;
