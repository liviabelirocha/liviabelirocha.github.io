import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
`

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`

export const Title = styled.h1`
	font: 800 44px 'Open Sans';
	line-height: 65px;
	letter-spacing: 0.01em;
	color: ${props => props.theme.colors.textPrimary};
	margin-bottom: 5rem;
	margin-top: 3rem;
`
