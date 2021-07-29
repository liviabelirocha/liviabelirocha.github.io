import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
`

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 100%;
`

export const ProfilePic = styled.div`
	position: relative;

	img {
		width: 25rem;
	}
`

export const Square = styled.div`
	width: 25rem;
	height: 29rem;
	border: 10px solid ${props => props.theme.colors.textPrimary};
	position: absolute;
	top: 3rem;
	left: 4rem;
	z-index: -1;
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	h1 {
		font-size: 24px;
		line-height: 29.4px;
		margin-bottom: 1rem;
		letter-spacing: 2px;

		span {
			font-size: 24px;
			color: ${props => props.theme.colors.textPrimary};
		}
	}

	span,
	p {
		line-height: 20.75px;
	}

	p,
	span {
		font-size: 16px;
		max-width: 28rem;
		margin-bottom: 1rem;
		word-wrap: break-word;
	}

	h2 {
		font-size: 18px;
		color: ${props => props.theme.colors.textPrimary};
		line-height: 22.05px;
	}
`

export const Social = styled.div`
	width: 20%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
