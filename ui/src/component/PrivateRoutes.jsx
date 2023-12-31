import {Navigate} from "react-router-dom";

const PrivateRoutes = ({children}) => {
  const auth = !!localStorage.getItem('token')

  if (!auth) {
    return <Navigate to="/login"/>
  }

  return children
}

export default PrivateRoutes
