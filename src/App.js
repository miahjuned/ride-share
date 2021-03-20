import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Destination from './Component/Destination/Destination';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import SearchResult from './Component/Search Result/SearchResult';
import CreateAccount from './Component/Create Account/CreateAccount';

export const userContext = createContext();


function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  
  return (
    
    <userContext.Provider value={[loggedInUser, setloggedInUser]}>
      {/* <h2>email: {loggedInUser.email}</h2> */}
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/createaccoun">
            <CreateAccount></CreateAccount>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>

          <Route path="/search">
            <SearchResult></SearchResult>
          </Route>

          <Route path="/destination/:rideServiceId">
            <Destination></Destination>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
