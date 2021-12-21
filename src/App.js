import ViewOne from './Components/ViewOne';
import ViewTwo from './Components/ViewTwo';
import styled from 'styled-components';

const Container = styled("div")`
  display: flex;
  height:100vh;
`

function App() {
  return (
    <Container>
      <ViewOne/>
      <ViewTwo/>
    </Container>
  );
}

export default App;
