import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TasksList from '../../components/TasksList';
import getVisibleTasks from '../../selectors/getVisibleTasks';
import { getApiTask, toggleApiTask } from '../../actions/apiTasks';
import { selectedTask } from '../../actions/selectedTask';

const mapStateToProps = state => ({visibleTasks: getVisibleTasks(state)});

const mapDispatchToProps = dispatch => bindActionCreators({getApiTask, selectedTask, toggleApiTask}, dispatch);

const VisibleTasksList = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default VisibleTasksList;
