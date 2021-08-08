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
	margin-bottom: 5rem;
`

export const Name = styled.h1`
	font: 800 20px 'Open Sans';
	line-height: 33px;
	letter-spacing: 0.0055em;
`
