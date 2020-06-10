import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';

import History from '../../components/History';

const mapStateToProps = state => ({
	canUndo: state.apiTasks.past.length > 0,
	canRedo: state.apiTasks.future.length > 0
})

const mapDispatchToProps = ({
	onUndo: UndoActionCreators.undo,
	onRedo: UndoActionCreators.redo
})

const HistoryButton = connect(
	mapStateToProps,
	mapDispatchToProps
)(History);

export default HistoryButton;
