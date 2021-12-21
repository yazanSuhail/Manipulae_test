import styled from 'styled-components';

const Container = styled('div')`
    border: 1px solid black;
    flex: 1;
`;

const ViewOne = () => {
	return <Container>Hello from ViewOne</Container>;
};

export default ViewOne;
