import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({element,token}) => {
  const location = useLocation()
  console.log("🚀 ~ PrivateRoute ~ location:", location)

  // const token = JSON.parse(localStorage.getItem("isLogged"))
  // console.log("🚀 ~ PrivateRoute ~ token:", token)
  
  return token ? element : <Navigate to={'/login'} />
}

export default PrivateRoute