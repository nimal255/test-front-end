import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect,BrowserRouter } from 'react-router-dom';
import LoginPage from "./views/auth/login";
import RegisterPage from "./views/auth/register";
import LayoutPage from "./layout/layout";
import ProfilePage from "./views/profile/profile";
import FilePage from "./views/files/fileupload";
import PublicRoute from './components/publicRoute';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Switch>
          <Route path="/dashboard" component={LayoutPage} />
          <Route exact path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/files" component={FilePage}/>
        </Switch>
         </div>
         </BrowserRouter>
  );
}

export default App;
