import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box
	}

	body {
		background: ${props => props.theme.colors.backgroundPrimary};
		color: ${props => props.theme.colors.textSecondary};
		font: 400 16px 'Open Sans', sans-serif;
		
	}

`
