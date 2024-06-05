import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import Navbar from './components/Navbar';

import Demo from './components/mantine/Grid';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client = {client}>
      <MantineProvider>
        <Navbar />
        <Outlet />
        <Demo />
      </MantineProvider>
    </ApolloProvider>
  );
}

export default App;
