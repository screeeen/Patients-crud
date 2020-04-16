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
      name: '',
      surname: '',
      age: null,
      patient: {},
      patientList: [],
      editing: false
    }

    this.addNewPatient = this.addNewPatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
    this.editPatient = this.editPatient.bind(this);
    this.setEditingFlag = this.setEditingFlag.bind(this);
    this.updatePatientDetails = this.updatePatientDetails.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

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

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
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
            <Route exact path="/" component={() => <PatientsList patientList={patientList} />} />
            <Route exact path="/add" component={() => <AddPatient />} />
            <Route exact path="/edit" component={() => <EditPatient patient={this.state.patient} />} />
          </Switch>
          <button onClick={() => { }}>add</button>
        </Router>

      </>
    );
  }
}

export default App;
