import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from './components/Navbar';
import Home from "./components/home/Home"
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from "./components/post/UpdateView";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Box marginTop="64px">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={DetailView} />
            <Route exact path="/create" component={CreateView} />
            <Route exact path="/update/:id" component={UpdateView} />
          </Switch>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
