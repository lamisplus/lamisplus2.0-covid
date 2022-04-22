import React from "react";
import {
  MemoryRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

import RegisterPatient from './jsx/components/Patient/RegisterPatient'
import Home from './jsx/components/Home'
import EditPatient from './jsx/components/Patient/EditPatient'
import PatientDetail from './jsx/components/Patient/PatientDetail'


export default function App() {
  return (

      <div>
      <ToastContainer />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         
          <Route path="/register-patient">
            <RegisterPatient />
          </Route>
          <Route path="/patient-dashboard">
            <PatientDetail />
          </Route>
          <Route path="/edit-patient">
            <EditPatient />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        
          
        </Switch>
      </div>
 
  );
}




