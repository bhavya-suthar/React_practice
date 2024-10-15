import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../Redux/UserSlice'

const Dashboard = () => {
  const dispatch = useDispatch()
  return (
    <>

    <div>Dashboard</div>
    <Link to='/login' onClick={()=>dispatch(logoutUser())}>Logout</Link>
    </>
  )
}

export default Dashboard