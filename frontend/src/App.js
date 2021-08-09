import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from '@material-ui/core';
import React from 'react';
// import Navbar from './components/Navbar';
import Home from "./components/home/Home"
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from "./components/post/UpdateView";
import Signup from './components/Signup';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          {/* <Navbar /> */}
          <Box marginTop="64px">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/details/:id" component={DetailView} />
              <PrivateRoute exact path="/create" component={CreateView} />
              <PrivateRoute exact path="/update/:id" component={UpdateView} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </Box>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;