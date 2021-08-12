import styled from 'styled-components'

export const Container = styled.div`
	width: 100vw;
	background: ${props => props.theme.colors.backgroundSecondary};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 15rem;

	.title {
		color: ${props => props.theme.colors.textPrimary};
	}

	.subtitle {
		color: ${props => props.theme.colors.textSecondary};
		opacity: 0.8;
		font: 300 14px 'Open Sans';
	}

	.stack {
		margin-top: 1rem;

		.stack-icon {
			margin: 0.5rem;
		}
	}
`
