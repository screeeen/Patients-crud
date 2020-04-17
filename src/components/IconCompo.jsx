import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Pe} from './Styles.jsx'

 const IconCompo = ({icon,size,color}) => {
  return <Pe><FontAwesomeIcon icon={icon} size={size} color={color} /></Pe>
}

export default IconCompo
