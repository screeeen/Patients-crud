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
import {handleInputChange} from './handleInputChange'

const EditPatient = ({ editPatient, location, history }) => {

  const initialuser = location.state.patient;
  const [user, setUser] = useState(initialuser)

  const handleFormSubmit = (event) => {
    event.preventDefault();
    editPatient(user);
    history.push('/Patients-crud');
  }

  const handleDayChange = (birth, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput();
    const age = birth && CalculateAge(birth);
    setUser({ ...user, birth, age, isEmpty: !input.value.trim(), isDisabled: modifiers.disabled === true });
  }


  return (
    <>
      <TitleH3>Editing <span>{user.name} {user.surname}</span></TitleH3>
      <form onSubmit={handleFormSubmit}>
      <IconCompo icon={faUserEdit} size={'lg'} color={'slategrey'} />
        <InputBoxCompo type="text" required name="name" placeholder="Enter patients name..." value={user.name} onChange={e => handleInputChange(user,setUser,e)} />
        <InputBoxCompo type="text" required name="surname" placeholder="...surname" value={user.surname} onChange={e => handleInputChange(user,setUser,e)} />
        <InputBoxCompo type ="dataPicker" formatDate={formatDate} parseDate={parseDate} value={user.birth} onDayChange={handleDayChange}
              dayPickerProps={{
                initialMonth: new Date(2001, 1),
                selectedDays: user.birth,
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
