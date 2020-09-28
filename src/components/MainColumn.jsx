import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { breakpoints } from '../constants/mediaBreakpoints';

import TopBar from './TopBar';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	width: 1024px;
	background-color: yellow;
	transition: all 0.5s;
	overflow-x: hidden;
	overflow-y: auto;

	@media (max-width: ${props => props.breakpoints.widescreen}px) {
		width: 100%;
		background-color: blue;
	}

	@media (max-width: ${props => props.breakpoints.desktop}px) {
		width: 100%;
		background-color: red;
	}

`;

const MainColumn = ({ currentTheme, updateTheme }) => {
	const theme = useContext(ThemeContext);

	return(
		<Container styles={theme} breakpoints={breakpoints}>

			<TopBar currentTheme={currentTheme} updateTheme={updateTheme} />

		</Container>
	);
};

export default MainColumn;
