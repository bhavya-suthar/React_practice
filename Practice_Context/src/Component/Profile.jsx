import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {

const {user} =useContext(UserContext)    

if(!user) return <h1>No User Found</h1>
  return (
    <div>
      <h1>Profile : </h1>
      <h3>User Name : {user.userName}</h3>
      <h3>Password : {user.password}</h3>
    </div>
  )
}

export default Profile
