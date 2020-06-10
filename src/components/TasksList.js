import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';
import TaskDetails from './TaskDetails';

const TasksList = ({ visibleTasks, getApiTask, selectedTask, toggleApiTask }) => {
	let task = {};
	return (
		<div>
			<ul>
				{visibleTasks.map((task, id) => (
					<Task
						key={id}
						text={task.text}
						deleted={task.deleted}
						onClick={() => toggleApiTask(id)}
						//onMouseEnter={() => selectedTask(getApiTask(id))}
						onMouseLeave={() => task = {}}
					/>
				))}
			</ul>
			{task.message}
			{task &&
				<TaskDetails />
			}
		</div>
	);
}

TasksList.propTypes = {
	visibleTasks: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		deleted: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	getApiTask: PropTypes.func.isRequired,
	selectedTask: PropTypes.func.isRequired,
	toggleApiTask: PropTypes.func.isRequired
};

export default TasksList;
