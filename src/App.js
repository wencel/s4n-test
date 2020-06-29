import React from 'react';
import Navbar from './components/Organisms/Navbar/Navbar';
import Container from './components/Atoms/Container/Container';
import Header from './components/Organisms/Header/Header';
import RepoList from './components/Organisms/RepoList/RepoList';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <RepoList />
      </Container>
    </>
  );
}

export default App;
