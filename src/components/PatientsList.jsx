import React from 'react'

const PatientsList = ({ patientList }) => {
  return (
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
                <td><button onClick={() => { }}>edit</button></td>
                <td><button onClick={() => { }}>delete</button></td>
              </tr>
            )
            )
          ) : (
              <tr>
                <td>No patients yet.</td>
                <td><button onClick={() => { }}>Add Patient</button></td>
              </tr>
            )
        }
      </tbody>
    </table>
  )
}

export default PatientsList


