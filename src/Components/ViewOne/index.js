import styled from 'styled-components';

const Container = styled('div')`
    border: 1px solid black;
    flex: 1;
`;

const ViewOne = ({ results }) => {
	if (!results) {
		return <Container>loading</Container>;
	}
	return (
		<Container>
			{results.map((item) => {
				return <div key={item.name}>{item.name}</div>;
			})}
		</Container>
	);
};

export default ViewOne;
