import {Navigate} from "react-router-dom";

export const AuthRoutes = ({children}) => {
  const auth = !!localStorage.getItem('token')

  if (!auth) {
    return <Navigate to="/login"/>
  }

  return children
}
