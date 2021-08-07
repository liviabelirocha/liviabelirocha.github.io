import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 15rem;
`

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 1366px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`
