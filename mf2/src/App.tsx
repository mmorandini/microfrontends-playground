import React from 'react';
import {Box} from '@chakra-ui/react';
import Counter from './components/Counter';

const App = () => {
  return <Box margin="1.2rem">
    <Box>Serving from mf2 (React)</Box>
    <Box>
      <Counter />
    </Box>
  </Box>
}

export default App;