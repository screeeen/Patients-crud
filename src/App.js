import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddPatient from './components/AddPatient'
import EditPatient from './components/EditPatient'
import PatientsList from './components/PatientsList'

class App extends Component {

  constructor() {
    super();
    this.state = {
      id: null,
      userId: 0,
      name: '',
      surname: '',
      age: new Date(),
      patient: {},
      patientList: [],
      editing: false
    }

    //binds

  }

  addNewPatient(event) {

  }

  deletePatient(id) {

  }

  editPatient(patient) {

  }

  setEditingFlag(value) {

  }


  updatePatientDetails(event) {

  }


  render() {

    // destructuring 
    return (
      <>
        <Router>
          <nav >
            <ul>
              <li>
                <Link to="/">List</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
              <li>
                <Link to="/edit">Edit</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={() => <PatientsList />} />
            <Route exact path="/add" component={() => <AddPatient />} />
            <Route exact path="/edit" component={() => <EditPatient patient={this.state.patient} />} />
          </Switch>

        </Router>

      </>
    );
  }
}

export default App;
