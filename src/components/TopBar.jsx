import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const Container = styled.div`
	display: flex;
	flex: 0;
	width: auto;
	margin: 2% 0;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0;
		height: auto;

		font-size: 2vw;
		white-space: nowrap;

		padding: 4px 8px;
		border: none;
		border-radius: 8px;

		cursor: pointer;


		:hover {
			transition: all 0.5s;
			transform: scale(1.05);
		}

		:active {
			transition: all 0.25s;
			transform: scale(0.95);
		}

		:focus {
			outline: none;
		}
	}
`;

const TopBar = ({currentTheme, updateTheme}) => {
	const theme = useContext(ThemeContext);

	const toggleTheme = () => {
		if(currentTheme === 'default') {
			updateTheme('dark');
		} else if(currentTheme === 'dark') {
			updateTheme('default');
		}
	};

	return(
		<Container>
			<button onClick={toggleTheme.bind(null)}>
				TOGGLE THEME
			</button>
		</Container>
	);
	
};

export default TopBar;
