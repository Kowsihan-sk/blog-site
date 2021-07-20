import './App.css';
import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from './components/Navbar';
import Home from "./components/home/Home"
import DetailView from './components/post/DetailView';

function App() {
  return (
    <>
      <Navbar />
      <Box marginTop="64px">
        <Home />
        <DetailView />
      </Box>
    </>
  );
}

export default App;
