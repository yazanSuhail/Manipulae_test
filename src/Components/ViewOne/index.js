import styled from 'styled-components';

const Container = styled('div')`
    border: 1px solid black;
    flex: 1;
`;

const Pokemon = styled('div')`
	background: ${(props) => (props.active ? 'red' : 'white')};
`;

const ViewOne = ({ results, selectedPokemon, setSelectedPokemon }) => {
	const handleClick = (index) => { setSelectedPokemon(index)}

	if (!results) {
		return <Container>loading</Container>;
	}
	return (
		<Container>
			{results.map((item, i) => {
				return <Pokemon onClick={() => handleClick(i)} key={item.name} active={i === selectedPokemon}>{item.name}</Pokemon>;
			})}
		</Container>
	);
};

export default ViewOne;
