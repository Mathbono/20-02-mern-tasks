import React from 'react';
import FilterButton from '../containers/ButtonContainer/FilterButton';
import { VISIBILITY_FILTERS } from '../constants/visibilityFilters';

const Footer = () => (
	<div>
		<FilterButton filter={VISIBILITY_FILTERS.SHOW_ALL}>ALL</FilterButton>
		<FilterButton filter={VISIBILITY_FILTERS.SHOW_ACTIVE}>ACTIVE</FilterButton>
		<FilterButton filter={VISIBILITY_FILTERS.SHOW_DELETED}>DELETED</FilterButton>
		<FilterButton>CLEAN</FilterButton>
	</div>
);

export default Footer;
