import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const GlobalStyled = createGlobalStyle`
	html {
		scroll-behavior: smooth;
	}
	
	*,
	*::before,
	*::after{
		margin: 0;
		padding:0;
		box-sizing:border-box
	}

	body {
		margin: 0;
		font-family:"EB Garamond", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color:${theme.colors.font};
		line-height: 1.2;
		background-color:${theme.colors.backgroundColor};
		
	}

	a{
		text-decoration:none;
		color:inherit;
		cursor:pointer;
	}
	ul{
		list-style:none;
	}
	button{background-color: unset;border:none;cursor:pointer;color:inherit;}
`
