import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: ${props => props.theme.colors.backgroundPrimary};
	width: 306.71px;
	border-radius: 10px;
	padding: 2rem 1rem;
	margin: 2rem;
	transition: 0.2s;

	:hover {
		transform: scale(1.1);
	}
`

export const Title = styled.p`
	font: 800 18px 'Open Sans';
	line-height: 25px;
	letter-spacing: 0.055em;
	margin: 1rem 0;
`

export const Description = styled.p`
	font: 300 14px 'Open Sans';
	line-height: 19px;
	letter-spacing: 0.055em;
	text-align: center;
`
