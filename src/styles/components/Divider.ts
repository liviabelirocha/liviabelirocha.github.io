import styled from "styled-components";

export const Container = styled.div<{ up?: boolean }>`
	width: 9px;
	height: 90px;
	background: ${(props) => props.theme.colors.textPrimary};
	border-radius: 10px;

	transform: translateY(${(props) => (props.up ? "-45px" : "45px")});
`;
