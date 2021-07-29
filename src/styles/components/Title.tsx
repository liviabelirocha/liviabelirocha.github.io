import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 8rem;
`

export const Shadow = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.colors.textSecondary};
	font: 800 144px Gilroy;
	line-height: 176px;
	letter-spacing: 0.055em;
	opacity: 0.02;
	position: absolute;
`

export const Text = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.colors.textPrimary};
	font: 800 64px Gilroy;
	line-height: 78px;
	letter-spacing: 0.01em;
	position: absolute;
`
