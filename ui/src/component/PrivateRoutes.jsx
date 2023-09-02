import {Navigate, Outlet} from "react-router-dom";

const PrivateRoutes = () => {
  const auth = false

  return (
    auth ? <Outlet /> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes
