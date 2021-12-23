import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled('div')`
    border: 1px solid black;
    flex: 1;
`;

const ViewTwo = ({ selectedPokemon }) => {
	const [ results, setResults ] = useState(null);

	useEffect(
		() => {
			if (!selectedPokemon) return;

			axios.get(selectedPokemon).then((response) => {
				setResults(response.data);
			});
		},
		[ selectedPokemon ]
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
