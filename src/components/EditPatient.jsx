import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { now } from 'moment';
import 'react-day-picker/lib/style.css';
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import CalculateAge from './CalculateAge'
import {EndForm,InputBox,Input,Pe,TitleH3} from './Styles.jsx'

const EditPatient = ({ editPatient, location, history }) => {
  const initialeditUser = location.state.patient;
  const [editUser, setEditUser] = useState(initialeditUser)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    editPatient(editUser);
    history.push('/Patients-crud');
  }

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setEditUser({ ...editUser, [name]: value });
  }

  const handleDayChange = (birth, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput();
    const age = birth && CalculateAge(birth);
    setEditUser({ ...editUser, birth, age, isEmpty: !input.value.trim(), isDisabled: modifiers.disabled === true });
  }


  return (
    <>
      <TitleH3>Editing <span>{editUser.name} {editUser.surname}</span></TitleH3>
      <form onSubmit={handleFormSubmit}>

        <p><FontAwesomeIcon icon={faUserEdit} color='slategrey' /></p>
        <InputBox>
          <Input type="text" required name="name" value={editUser.name} onChange={e => handleInputChange(e)} />
        </InputBox>

        <InputBox>
          <Input type="text" required name="surname" value={editUser.surname} onChange={e => handleInputChange(e)} />
        </InputBox>

        <InputBox>
          {editUser.isEmpty && 'Edit birthday'}
          {!editUser.isEmpty && !editUser.birth && 'This day is invalid'}
          {editUser.birth && editUser.isDisabled && 'This day is disabled'}
          {/* {birth &&
                !isDisabled &&
                `You chose ${birth.toLocaleDateString()}`} */}

          <DayPickerInput
            formatDate={formatDate}
            parseDate={parseDate}
            value={editUser.birth}
            onDayChange={handleDayChange}
            dayPickerProps={{
              initialMonth: new Date(2001, 1),
              selectedDays: editUser.birth,
              disabledDays: {
                after: new Date(now), // substract 18 years
              },
            }}
          />
        </InputBox>
        <EndForm><Pe><FontAwesomeIcon icon={faCheck} size='4x' /></Pe></EndForm>
      </form>
    </>
  )
}


export default withRouter(EditPatient)
