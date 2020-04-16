import React from 'react'
import { Link,withRouter } from "react-router-dom";
import Moment from 'react-moment'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

const PatientsList = ({ patientList, editPatient, deletePatient, addNewPatient,history }) => {
  console.log(patientList);

  return (    
    <>
    <h3>Patients List</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Birth Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {            
            patientList.length > 0 ? (
              patientList.map(patient => (
                <tr key={patient.id}>
                  <td className='id'>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.surname}</td>
                  <td>{patient.age}</td>
                  <td><Moment format="DD.MM.YYYY">{patient.birth}</Moment></td>
                  <td><button onClick={() => history.push({
                    pathname:'/edit',
                    state:{patient}
                    })}><p><FontAwesomeIcon icon={faEdit} size='lg'/></p></button></td>

                  <td><button onClick={() => { deletePatient(patient.id) }}><p><FontAwesomeIcon icon={faTrashAlt} size='lg'/></p></button></td>
                </tr>
              )
              )
            ) : (
                <tr>
                  <td>No patients yet.</td>
                </tr>
              )
          }
        </tbody>
      </table >
      <div className="register-area">
      <Link to="/add"><p><FontAwesomeIcon icon={faPlus} size='lg'/> Register new patient </p></Link>
      </div>
    </>
  )
}

export default withRouter(PatientsList)


