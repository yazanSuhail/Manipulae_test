import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled('div')`
    border: 1px solid black;
    flex: 1;
`;

const ViewTwo = ({ selectedPokemon, allPokemon }) => {
	const [ results, setResults ] = useState(null);

	useEffect(
		() => {
			if (!allPokemon) return;
			
			axios.get(allPokemon[selectedPokemon].url).then((response) => {
				setResults(response.data);
			});
		},
		[ selectedPokemon, allPokemon ]
	);

	if (!results) {
		return <Container>Loading</Container>;
	}

	return (
		<Container>
			<div>{results.name}</div>
		</Container>
	);
};

export default ViewTwo;
