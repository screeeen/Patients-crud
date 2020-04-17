import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import IconCompo from './IconCompo'
import { faUser, faCheck } from '@fortawesome/free-solid-svg-icons'
import CalculateAge from './CalculateAge'
import {EndForm,TitleH3} from './Styles.jsx'
import {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import { now } from 'moment';
import InputBoxCompo  from './InputBoxCompo';

const AddPatient = ({ addNewPatient,history }) => {

  const initialState = {
    name: '',
    surname: '',
    age: undefined,
    birth: undefined,
    isEmpty: true,
    isDisabled: false,
  }

  const [user, setUser] = useState(initialState);

  const handleInputChange = event => {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addNewPatient(user);
    setUser(initialState);
    history.push('/Patients-crud');
  }

  const handleDayChange = (birth, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput();
    const age = birth && CalculateAge(birth);
    setUser({ ...user, birth, age, isEmpty: !input.value.trim(), isDisabled: modifiers.disabled === true });
  }

    return (
      <>
        <TitleH3>Register a new patient</TitleH3>
        <form onSubmit={handleFormSubmit}>
          <IconCompo icon={faUser} size={'lg'} color={'slategrey'} />
          <InputBoxCompo type="text" required name="name" placeholder="Enter patients name..." value={user.name} onChange={handleInputChange} />
          <InputBoxCompo type="text" required name="surname" placeholder="...surname" value={user.surname} onChange={handleInputChange} />
          <InputBoxCompo type ="dataPicker" formatDate={formatDate} parseDate={parseDate} placeholder={'Pick a Date'} value={user.birth} onDayChange={handleDayChange}
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
        </form >
      </>
    )
  }

export default withRouter(AddPatient) 