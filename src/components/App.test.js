import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import root from '../reducers';
import App from './App';

const store = createStore(root);

test('renders learn react link', () => {
	const { getByText } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
