import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

export const GuestRoutes = ({children}) => {
  const auth = !!localStorage.getItem('token')

  if (auth) {
    return <Navigate to="/"/>
  }

  return children
}

GuestRoutes.propTypes = {
  children: PropTypes.object
}
