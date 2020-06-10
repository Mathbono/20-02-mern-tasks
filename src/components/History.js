import React from 'react';
import PropTypes from 'prop-types';

const History = ({ canUndo, canRedo, onUndo, onRedo }) => (
	<div>
		<button onClick={onUndo} disabled={!canUndo}>
			UNDO
		</button>
		<button onClick={onRedo} disabled={!canRedo}>
			REDO
		</button>
	</div>
);

History.propTypes = {
	canUndo: PropTypes.bool.isRequired,
	canRedo: PropTypes.bool.isRequired,
	onUndo: PropTypes.func.isRequired,
	onRedo: PropTypes.func.isRequired
};

export default History;
