

export const handleInputChange = (user,setUser,event) =>{
  const {name,value} = event.target;
  setUser({ ...user, [name]: value });
}


export const handleDayChange = (user,setUser,birth) => {
  const age = birth && CalculateAge(birth);
  setUser({ ...user, birth, age });
}

export const handleFormSubmit = (user,setUser,updateUser,history,e) => {
  e.preventDefault();
  updateUser(user)
  setUser({});
  history.push('/Patients-crud');
}



const CalculateAge = dob => {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);
  const age = Math.abs(age_dt.getUTCFullYear() - 1970);
  return age;
}