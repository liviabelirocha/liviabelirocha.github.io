import styled from 'styled-components'

export const WholePage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
`

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	margin-top: 5rem;

	@media (max-width: 1366px) {
		flex-direction: column;
		align-items: center;
		margin-top: 0;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-left: 10rem;

	@media (max-width: 1366px) {
		align-items: center;
		margin-left: 0;
		margin-bottom: 2rem;
	}

	h2 {
		font: 300 72px 'Open Sans';
		line-height: 98px;
		letter-spacing: 0.035em;
	}

	h1 {
		font-size: 96px;
		line-height: 131px;
		letter-spacing: 0.055em;
		color: ${props => props.theme.colors.textPrimary};
	}

	p {
		font: 300 30px 'Open Sans';
		line-height: 41px;
		max-width: 380px;
		word-wrap: break-word;
		text-align: right;

		@media (max-width: 1366px) {
			text-align: center;
		}
	}
`

export const Button = styled.button`
	background: ${props => props.theme.colors.backgroundPrimary};
	color: ${props => props.theme.colors.textSecondary};

	width: 260px;
	height: 80px;
	border-radius: 10px;
	cursor: pointer;
	border: 0;
	margin-top: 2rem;

	font: 800 22px 'Open Sans';
	line-height: 30px;

	transition: 0.2s;

	:hover {
		background: ${props => props.theme.colors.textPrimary};
	}
`
