import styled from 'styled-components';

const Container = styled('div')`
    border: 1px solid black;
    flex: 1;
`;

const ViewTwo = () => {
	return <Container>Hello from ViewTwo</Container>;
};

export default ViewTwo;
