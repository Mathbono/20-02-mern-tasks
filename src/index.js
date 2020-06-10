import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import root from './reducers';
/*
import * as tasksActions from './actions/tasks';
import * as visibilityFiltersActions from './actions/visibilityFilters';
import { VISIBILITY_FILTERS } from './constants/visibilityFilters';
*/
const logger = createLogger();
const store = createStore(root, applyMiddleware(thunk, logger));
/*
console.log("INITIALISATION :", store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(tasksActions.addTask("Ma première tâche"));
store.dispatch(visibilityFiltersActions.setVisibilityFilter(VISIBILITY_FILTERS.SHOW_DELETED));
store.dispatch(tasksActions.editTask(0, "Nouvelle première tâche !"));
store.dispatch(tasksActions.addTask("Deuxième tâche !"));
store.dispatch(tasksActions.deleteTask(1));
*/

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
