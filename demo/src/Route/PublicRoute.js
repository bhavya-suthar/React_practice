import { useLocation, useNavigate } from 'react-router-dom'

const PublicRoute = ({element,token}) => {
  const navigate = useNavigate()
    const location = useLocation()
    console.log("🚀 ~ PublicRoute ~ location:", location)

    // const token = JSON.parse(localStorage.getItem("isLogged"))
    // console.log("🚀 ~ PublicRoute ~ token:", token)
    return !token ? element : navigate(-1)
}

export default PublicRoute