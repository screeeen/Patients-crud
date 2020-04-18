

export const handleInputChange = (user,setUser,event) =>{
  const {name,value} = event.target;
  setUser({ ...user, [name]: value });
}