import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${(props) => props.theme.colors.backgroundPrimary};
	padding-top: 1rem;

	p {
		padding-bottom: 1rem;
	}
`;

export const Icons = styled.div`
	cursor: pointer;

	> * {
		margin: 1rem;
	}

	a {
		color: ${(props) => props.theme.colors.textSecondary};
	}
`;

export const Design = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	background: ${(props) => props.theme.colors.backgroundPrimary};
	padding: 1rem 0;

	a {
		font-weight: 800;
		color: ${(props) => props.theme.colors.textSecondary};
		text-decoration: none;
	}
`;
