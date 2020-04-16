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
      id: undefined,
      // name: '',
      // surname: '',
      // age: undefined,
      patient: {},
      patientList: [],
      editing: false
    }

    this.addNewPatient = this.addNewPatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
    this.editPatient = this.editPatient.bind(this);
    this.setEditingFlag = this.setEditingFlag.bind(this);
    this.updatePatientDetails = this.updatePatientDetails.bind(this);

  }


  mockData = [
    { id: 0, name: 'Manuel', surname: 'Pereira', age: 30 },
    { id: 1, name: 'Eddo', surname: 'Park', age: 53 },
    { id: 2, name: 'Clark', surname: 'Syntherion', age: 45 },
    { id: 3, name: 'Aphex', surname: 'Singlar', age: 93 },
  ]

  componentDidMount() {
    this.setState({ patientList: this.mockData });
  }



  addNewPatient(patient) {
    patient.id = this.state.patientList.length;
    this.setState({ patientList: [...this.state.patientList, patient] });
  }

  deletePatient(id) {
    console.log("delete p", id);

  }

  editPatient(patient) {
    console.log("edit p", patient);
    this.setEditingFlag(true);
  }

  setEditingFlag(value) {
    console.log("setting flat: ", value);

  }


  updatePatientDetails(event) {

  }


  render() {

    // destructuring 
    const { patientList } = this.state;

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
            <Route exact path="/" component={() => <PatientsList patientList={patientList} editPatient={this.editPatient} deletePatient={this.deletePatient} addNewPatient={this.addNewPatient} />} />
            <Route exact path="/add" component={() => <AddPatient addNewPatient={this.addNewPatient} />} />
            <Route exact path="/edit" component={() => <EditPatient patient={this.state.patient} />} />
          </Switch>
          <hr />
          <Link to="/add">Register new patient</Link>
        </Router>
      </>
    );
  }
}

export default App;
