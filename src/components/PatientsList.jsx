import React from 'react'
import { Link, withRouter } from "react-router-dom";
import Moment from 'react-moment'
// import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'
import {RegisterArea,Table, Tr,Td,Th,Button,TitleH3} from './Styles.jsx'


const PatientsList = ({ patientList, editPatient, deletePatient, addNewPatient, history }) => {

  return (
    <>
      <TitleH3>Patients List</TitleH3>
      <Table>
        <thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Surname</Th>
            <Th>Age</Th>
            <Th>Birth Date</Th>
            <Th>Actions</Th>
          </Tr>
        </thead>
        <tbody>
          {
            patientList.length > 0 ? (
              patientList.map(patient => (
                <Tr key={patient.id}>
                  <Td patientId>{patient.id}</Td>
                  <Td>{patient.name}</Td>
                  <Td>{patient.surname}</Td>
                  <Td>{patient.age}</Td>
                  <Td><Moment format="DD.MM.YYYY">{patient.birth}</Moment></Td>
                  <Td><Button onClick={() => history.push({
                    pathname: '/edit',
                    state: { patient }
                  })}><p><FontAwesomeIcon icon={faEdit} size='lg' /></p></Button></Td>
                  <Td><Button onClick={() => { deletePatient(patient.id) }}><p><FontAwesomeIcon icon={faTrashAlt} size='lg' /></p></Button></Td>
                </Tr>
              )
              )
            ) : (
                <Tr>
                  <td>No patients yet.</td>
                </Tr>
              )
          }
        </tbody>
      </Table >
      <RegisterArea>
        <Link to="/add"><p><FontAwesomeIcon icon={faPlus} size='4x' color='whitesmoke' /></p></Link>
      </RegisterArea>
    </>
  )
}

export default withRouter(PatientsList)


