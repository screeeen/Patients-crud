import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {Input,InputBox} from './Styles.jsx'

 const InputBoxCompo = ({type,isRequired,name,placeholder,value,onChange,formatDate,parseDate,onDayChange,dayPickerProps}) => {
  
  return (
    type === "dataPicker" ? (
      <InputBox>
      <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              placeholder={placeholder}
              value={value}
              onDayChange={onDayChange}
              dayPickerProps={dayPickerProps}
            />
      </InputBox>

    ) : (

      <InputBox>
    <Input type ={type}  name={name} placeholder={placeholder} value={value} onChange={onChange}  />
    </InputBox>
    )
  )
}
export default InputBoxCompo