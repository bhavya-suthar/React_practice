import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({element}) => {
  const token = JSON.parse(localStorage.getItem("isLogged"))
  return token ? element : <Navigate to={'/login'} />
}

export default PrivateRoute