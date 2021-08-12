import styled from 'styled-components'

export const Container = styled.div`
	background: ${props => props.theme.colors.backgroundPrimary};
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	border-radius: 10px;
	width: 220px;
	height: 110px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 1rem 2.5rem;
	transition: 0.2s;

	:hover {
		transform: scale(1.1);
	}

	.skill-icon {
		margin-right: 1rem;
	}

	@media (max-width: 768px) {
		width: 200px;
		height: 75px;
		margin: 1rem;
	}
`

export const Name = styled.h1`
	font: 800 20px 'Open Sans';
	line-height: 33px;
	letter-spacing: 0.0055em;

	@media (max-width: 768px) {
		font-size: 16px;
	}
`
