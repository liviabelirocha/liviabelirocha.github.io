import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 5rem 0;
	margin-top: 12rem;

	.texts {
		display: flex;
		flex-direction: column;
	}

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

	@media (max-width: 768px) {
		align-items: center;

		p {
			font-size: 24px;
			line-height: 33px;
		}

		b {
			font-size: 30px;
			line-height: 41px;
		}

		small {
			font-size: 18px;
			line-height: 25px;
		}
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
