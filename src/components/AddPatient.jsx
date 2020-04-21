import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import { faUser, faCheck } from '@fortawesome/free-solid-svg-icons'
import {EndForm,TitleH3} from './Styles.jsx'
import { formatDate, parseDate} from 'react-day-picker/moment';
import { now } from 'moment';
import {handleInputChange,handleDayChange,handleFormSubmit} from './utils'
import InputBoxCompo  from './InputBoxCompo';
import IconCompo from './IconCompo'

const AddPatient = ({ updatePatient,history }) => {

  const initialState = {
    name: '',
    surname: '',
    age: undefined,
    birth: undefined,
    isEmpty: true,
    isDisabled: false,
  }

  const [user, setUser] = useState(initialState);
  
    return (
      <>
        <TitleH3>Register a new patient</TitleH3>
        <form onSubmit={e => handleFormSubmit(user,setUser,updatePatient,history,e)}>
          <IconCompo icon={faUser} size={'lg'} color={'slategrey'} />
          <InputBoxCompo type="text" required name="name" placeholder="Enter patients name..." value={user.name} onChange={e => handleInputChange(user,setUser,e)} />
          <InputBoxCompo type="text" required name="surname" placeholder="...surname" value={user.surname} onChange={e => handleInputChange(user,setUser,e)} />
          <InputBoxCompo type ="dataPicker" formatDate={formatDate} parseDate={parseDate} placeholder={'Pick a Date'} value={user.birth} onDayChange={e => handleDayChange(user,setUser,e)}
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