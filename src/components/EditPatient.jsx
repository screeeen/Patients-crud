import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import { now } from 'moment';
import IconCompo from './IconCompo'
import { faCheck, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import CalculateAge from './CalculateAge'
import {EndForm,TitleH3} from './Styles.jsx'
import InputBoxCompo  from './InputBoxCompo';

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
      <IconCompo icon={faUserEdit} size={'lg'} color={'slategrey'} />
        <InputBoxCompo type="text" required name="name" placeholder="Enter patients name..." value={editUser.name} onChange={handleInputChange} />
        <InputBoxCompo type="text" required name="surname" placeholder="...surname" value={editUser.surname} onChange={handleInputChange} />
        <InputBoxCompo type ="dataPicker" formatDate={formatDate} parseDate={parseDate} value={editUser.birth} onDayChange={handleDayChange}
              dayPickerProps={{
                initialMonth: new Date(2001, 1),
                selectedDays: editUser.birth,
                disabledDays: {
                  after: new Date(now)
                }
              }}
            />
        <EndForm>
          <IconCompo icon={faCheck} size={'4x'} />
          </EndForm>
      </form>
    </>
  )
}


export default withRouter(EditPatient)
