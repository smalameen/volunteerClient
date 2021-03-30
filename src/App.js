import './App.css';
import React, { createContext, useState } from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/LogIn/PrivateRoute';
import Registration from './Components/Registration/Registration';
import VolunteerList from './Components/VolunteerList/VolunteerList';
import NewOrganization from './Components/NewOrganization/NewOrganization';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
    <Router>
    <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/auth">
            <LogIn/>
          </Route>
          <PrivateRoute path="/registration/:id">
            <Registration/>
          </PrivateRoute>
          <Route path="/volunteers">
            <VolunteerList/>
          </Route>
          <Route path="/newOrganization">
            <NewOrganization/>
          </Route>
         
          <Route exact path="*">
            <Home />
          </Route>
        </Switch>
      
    </Router>
   </UserContext.Provider>
  );
}

export default App;
