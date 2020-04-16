import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AddPatient from './components/AddPatient'
import EditPatient from './components/EditPatient'
import PatientsList from './components/PatientsList'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


class App extends Component {

  constructor() {
    super();
    this.state = {
      id: undefined,
      patient: {},
      patientList: [],
    }

    this.addNewPatient = this.addNewPatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
    this.editPatient = this.editPatient.bind(this);
  }


  mockData = [
    { id: 0, name: 'Manuel', surname: 'Pereira', age: 30, birth: new Date(1989, 1) },
    { id: 1, name: 'Eddo', surname: 'Park', age: 51, birth: new Date(1968, 1) },
    { id: 2, name: 'Clark', surname: 'Syntherion', age: 45, birth: new Date(1974, 1) },
    { id: 3, name: 'Aphex', surname: 'Singlar', age: 90, birth: new Date(1930, 1) },
  ]

  componentDidMount() {
    this.setState({ patientList: this.mockData });
  }

  getLastId() {
    if (this.state.patientList.length - 1 <= 0) return 0;
    const lastIndex = this.state.patientList.length - 1;
    return this.state.patientList[lastIndex].id + 1;
  }

  addNewPatient(patient) {
    patient.id = this.getLastId();
    this.setState({ patientList: [...this.state.patientList, patient] });
  }

  editPatient(updatedPatient) {
    const patientList = this.state.patientList.map((patient) => (patient.id === updatedPatient.id ? updatedPatient : patient));
    this.setState({ patientList: patientList });
  }

  deletePatient(id) {
    const patientList = this.state.patientList.filter(patient => patient.id !== id);
    this.setState({ patientList: patientList });
    if (this.state.editing === true) {
      window.location.reload();
    }
  }

  render() {
    const { patientList } = this.state;
    return (
      <div className='container'>
        <Router>
          <nav >
            <ul>
              <li>
                <Link to="/"><p><FontAwesomeIcon icon={faHome} size='lg'/></p></Link>
              </li>
              {/* <li>
                <Link to="/add">Add</Link>
              </li> */}
              {/* <li>
                <Link to="/edit">Edit</Link>
              </li> */}
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={() => <PatientsList patientList={patientList} editPatient={this.editPatient} deletePatient={this.deletePatient} addNewPatient={this.addNewPatient} />} />
            <Route exact path="/add" component={() => <AddPatient addNewPatient={this.addNewPatient} />} />
            <Route exact path="/edit" component={() => <EditPatient patient={this.state.patient} editPatient={this.editPatient} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
