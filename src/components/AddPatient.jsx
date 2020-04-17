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
import { faUser, faCheck } from '@fortawesome/free-solid-svg-icons'
import CalculateAge from './CalculateAge'
import {EndForm,InputBox,Input,Pe,TitleH3} from './Styles.jsx'


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
          <Pe><FontAwesomeIcon icon={faUser} color='slategrey' /></Pe>

          <InputBox>
            <Input type="text" required name="name" placeholder="Enter patients name..." value={user.name} onChange={handleInputChange} />
          </InputBox>

          <InputBox>
            <Input type="text" required name="surname" placeholder="...surname" value={user.surname} onChange={e => handleInputChange(e)} />
          </InputBox>

          <InputBox>
            <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={'Pick a Date'}
              value={user.birth}
              onDayChange={handleDayChange}
              dayPickerProps={{
                initialMonth: new Date(2001, 1),
                selectedDays: user.birth,
                disabledDays: {
                  after: new Date(now), // substract 18 years
                },
              }}
            />
          </InputBox>
          <EndForm><Pe><FontAwesomeIcon icon={faCheck} size='4x' /></Pe></EndForm>
        </form >
      </>
    )
  }

export default withRouter(AddPatient) 