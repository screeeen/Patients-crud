import React, { useState } from 'react'
import { withRouter } from "react-router-dom";
import { faCheck, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import {EndForm,TitleH3} from './Styles.jsx'
import {formatDate,parseDate} from 'react-day-picker/moment';
import { now } from 'moment';
import {handleInputChange,handleDayChange,handleFormSubmit} from './utils'
import InputBoxCompo  from './InputBoxCompo';
import IconCompo from './IconCompo'

const EditPatient = ({ updatePatient, location, history }) => {

  const initialuser = location.state.patient;
  const [user, setUser] = useState(initialuser)


  return (
    <>
      <TitleH3>Editing <span>{user.name} {user.surname}</span></TitleH3>
      <form onSubmit={e => handleFormSubmit(user,setUser,updatePatient,history,e)}>
      <IconCompo icon={faUserEdit} size={'lg'} color={'slategrey'} />
        <InputBoxCompo type="text" required name="name" placeholder="Enter patients name..." value={user.name} onChange={e => handleInputChange(user,setUser,e)} />
        <InputBoxCompo type="text" required name="surname" placeholder="...surname" value={user.surname} onChange={e => handleInputChange(user,setUser,e)} />
        <InputBoxCompo type ="dataPicker" formatDate={formatDate} parseDate={parseDate} value={user.birth} onDayChange={e => handleDayChange(user,setUser,e)}
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
