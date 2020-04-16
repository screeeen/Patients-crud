import React from 'react'
import { Link } from "react-router-dom";

const PatientsList = ({ patientList, editPatient, deletePatient, addNewPatient }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            patientList.length > 0 ? (
              patientList.map(patient => (
                <tr key={patient.id}>
                  <td>{patient.id}</td>
                  <td>{patient.name}</td>
                  <td>{patient.surname}</td>
                  <td>{patient.age}</td>
                  <td><button onClick={() => { editPatient(patient) }}>edit</button></td>
                  <td><button onClick={() => { deletePatient(patient.id) }}>delete</button></td>
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
      <Link to="/add">Register new patient</Link>
    </>
  )
}

export default PatientsList


