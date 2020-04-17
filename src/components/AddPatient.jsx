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
import { faUser, faCheck } from '@fortawesome/free-solid-svg-icons'
import CalculateAge from './CalculateAge'


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
    history.push('/');
  }

  const handleDayChange = (birth, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput();
    const age = birth && CalculateAge(birth);
    setUser({ ...user, birth, age, isEmpty: !input.value.trim(), isDisabled: modifiers.disabled === true });
  }

    return (
      <>
        <h3>Register a new patient</h3>

        <form onSubmit={handleFormSubmit}>
          <p><FontAwesomeIcon icon={faUser} color='slategrey' /></p>

          <div className="input-box">
            <input type="text" required name="name" placeholder="Enter patients name..." value={user.name} onChange={handleInputChange} />
          </div>

          <div className="input-box">
            <input type="text" required name="surname" placeholder="...surname" value={user.surname} onChange={e => handleInputChange(e)} />
          </div>

          <div className="input-box">
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
          </div>
          <button className="end-form"><p><FontAwesomeIcon icon={faCheck} size='4x' /></p></button>
        </form >
      </>
    )
  }

export default withRouter(AddPatient) 