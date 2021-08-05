import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 5rem 0;
	margin-top: 12rem;

	p {
		line-height: 98px;
		font-size: 72px;
		letter-spacing: 0.035em;
	}

	b {
		font-size: 98px;
		line-height: 131px;
		letter-spacing: 0.055em;
		color: ${props => props.theme.colors.textPrimary};
	}

	small {
		font-size: 48px;
		line-height: 65px;
	}

	.github-logo {
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;
	}

	.pc-logo {
		margin-bottom: 2rem;
	}
`

export const Flags = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 5rem;

	.flag {
		width: 83.3px;
		cursor: pointer;
		margin: 0.5rem;
	}
`
