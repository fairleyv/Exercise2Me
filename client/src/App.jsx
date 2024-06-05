import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

import Demo from './components/mantine/Grid';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <MantineProvider>
        <>
        <Navbar />
        <Outlet />

        <Demo />
        </>
      </MantineProvider>

    </ApolloProvider>

  );
}

export default App;
