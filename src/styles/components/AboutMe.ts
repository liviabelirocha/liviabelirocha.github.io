import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	background: ${(props) => props.theme.colors.backgroundSecondary};
	padding-bottom: 15rem;
	z-index: -2;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (max-width: 1600px) {
		justify-content: space-around;
	}

	@media (max-width: 1488px) {
		flex-direction: column;
	}
`;

export const ProfilePic = styled.div`
	position: relative;
	margin-right: 10rem;

	img {
		width: 25rem;
	}

	@media (max-width: 1488px) {
		margin-bottom: 10rem;
		margin-right: 2rem;
	}

	@media (max-width: 768px) {
		img {
			width: 12.5rem;
		}
	}
`;

export const Square = styled.div`
	width: 25rem;
	height: 29rem;
	border: 10px solid ${(props) => props.theme.colors.textPrimary};
	position: absolute;
	top: 3rem;
	left: 4rem;
	z-index: -1;

	@media (max-width: 768px) {
		width: 12.5rem;
		height: 15.5rem;
		left: 2rem;
	}
`;

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
			color: ${(props) => props.theme.colors.textPrimary};
			font: 800 24px "Open Sans";
		}
	}

	p,
	span {
		font: 300 16px "Open Sans";
		max-width: 28rem;
		margin-bottom: 1rem;
		word-wrap: break-word;
		line-height: 20.75px;
	}

	h2 {
		font-size: 18px;
		color: ${(props) => props.theme.colors.textPrimary};
		line-height: 22.05px;
	}

	@media (max-width: 768px) {
		align-items: center;
		padding: 0 38px;

		h1 {
			font-size: 18px;
			span {
				font-size: 18px;
			}
		}

		p,
		span,
		h2 {
			font-size: 12px;
		}
	}
`;
