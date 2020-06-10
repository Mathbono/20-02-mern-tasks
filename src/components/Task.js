import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ onClick, onMouseEnter, onMouseLeave, deleted, text }) => (
	<li
		onClick={onClick}
		//onMouseEnter={onMouseEnter}
		onMouseLeave={onMouseLeave}
		style={{
			textDecoration: deleted ? 'line-through' : 'none'
		}}
	>
		{text}
	</li>
);

Task.propTypes = {
	onClick: PropTypes.func.isRequired,
	//onMouseEnter: PropTypes.func.isRequired,
	onMouseLeave: PropTypes.func.isRequired,
	deleted: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Task;
