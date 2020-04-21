import React from 'react'
import { Link, withRouter } from "react-router-dom";
import Moment from 'react-moment'
import { RegisterArea, Table, Tr, Td, Th, Button, TitleH3 } from './Styles.jsx'
import IconCompo from './IconCompo'
import { faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons'


const PatientsList = ({ patientList, deletePatient, history }) => {

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
                  <Td><Moment format="MM.DD.YYYY">{patient.birth}</Moment></Td>
                  <Td><Button onClick={() => history.push({
                    pathname: '/edit',
                    state: { patient }
                  })}><IconCompo icon={faEdit} size={'lg'} /></Button></Td>
                  <Td>
                    <Button onClick={() => { deletePatient(patient.id) }}>
                      <IconCompo icon={faTrashAlt} size={'lg'} />
                    </Button>
                  </Td>
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
        <Link to="/add">
          <IconCompo icon={faPlus} size={'4x'} color={'whitesmoke'} />
        </Link>
      </RegisterArea>
    </>
  )
}

export default withRouter(PatientsList)


