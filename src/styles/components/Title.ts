import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 8rem 0;

	@media (max-width: 768px) {
		margin: 4rem 0;
	}
`

export const Shadow = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.colors.textSecondary};
	font: 800 144px 'Open Sans';
	line-height: 176px;
	letter-spacing: 0.055em;
	opacity: 0.02;

	@media (max-width: 768px) {
		font-size: 56px;
	}
`

export const Text = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.colors.textPrimary};
	font: 800 64px 'Open Sans';
	line-height: 87px;
	letter-spacing: 0.01em;
	position: absolute;

	@media (max-width: 768px) {
		font-size: 36px;
		letter-spacing: 0.01em;
	}
`
