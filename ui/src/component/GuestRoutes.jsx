import {Navigate} from "react-router-dom";

export const GuestRoutes = ({children}) => {
  const auth = !!localStorage.getItem('token')

  if (auth) {
    return <Navigate to="/"/>
  }

  return children
}
