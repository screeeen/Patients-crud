import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { now } from 'moment';
import 'react-day-picker/lib/style.css';
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import CalculateAge from './CalculateAge'

const EditPatient = ({ editPatient, location, history }) => {
  console.log(location.state.patient);
  const initialeditUser = location.state.patient;
  const [editUser, setEditUser] = useState(initialeditUser)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    editPatient(editUser);
    history.push('/');
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
      <h3>Editing <span>{editUser.name} {editUser.surname}</span></h3>
      <form onSubmit={handleFormSubmit}>

        <p><FontAwesomeIcon icon={faUserEdit} color='slategrey' /></p>
        <div className="input-box">
          <input type="text" required name="name" value={editUser.name} onChange={e => handleInputChange(e)} />
        </div>

        <div className="input-box">
          <input type="text" required name="surname" value={editUser.surname} onChange={e => handleInputChange(e)} />
        </div>

        <div className="input-box">
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
        </div>
        <button className="end-form"><p><FontAwesomeIcon icon={faCheck} size='lg' /></p></button>
      </form>
    </>
  )
}


export default withRouter(EditPatient)
