import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import MockData from './data/MockData'
import AddPatient from './components/AddPatient'
import EditPatient from './components/EditPatient'
import PatientsList from './components/PatientsList'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


const App = () => {

  const [id, setId] = useState(undefined);
  const [patient, setPatient] = useState({});
  const [patientList, setPatientList] = useState(MockData);

  const getLastId = () => {
    if (patientList.length - 1 <= 0) return 0;
    const lastIndex = patientList.length - 1;
    return patientList[lastIndex].id + 1;
  }

  const addNewPatient = (patient) => {
    patient.id = getLastId();
    setPatientList([...patientList,patient])
  }

  const editPatient = (updatedPatient)=> {
    const updatedPatientList = patientList.map((patient) => (patient.id === updatedPatient.id ? updatedPatient : patient));
    setPatientList(updatedPatientList);
  }
  
  const deletePatient = (id) => {
    const patientListWithDeletion = patientList.filter(patient => patient.id !== id);
    setPatientList(patientListWithDeletion);
  }
    
    return (
      <div className='container'>
        <Router>
          <nav >
            <ul>
              <li>
                <Link to="/"><p><FontAwesomeIcon icon={faHome} size='lg' /></p></Link>
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
            <Route exact path="/" component={() => <PatientsList patientList={patientList} editPatient={editPatient} deletePatient={deletePatient} addNewPatient={addNewPatient} />} />
            <Route exact path="/add" component={() => <AddPatient addNewPatient={addNewPatient} />} />
            <Route exact path="/edit" component={() => <EditPatient patient={patient} editPatient={editPatient} />} />
          </Switch>
        </Router>
      </div>
    );
  }

export default App;
