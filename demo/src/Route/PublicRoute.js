import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PublicRoute = ({element}) => {
  const navigate = useNavigate()
    const location = useLocation()
    console.log("🚀 ~ PublicRoute ~ location:", location)

    const token = JSON.parse(localStorage.getItem("isLogged"))
    return !token ? element : navigate(-1)
}

export default PublicRoute