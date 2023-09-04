import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

export const AuthRoutes = ({children}) => {
  const auth = !!localStorage.getItem('token')

  if (!auth) {
    return <Navigate to="/login"/>
  }

  return children
}

AuthRoutes.propTypes = {
  children: PropTypes.object
}
