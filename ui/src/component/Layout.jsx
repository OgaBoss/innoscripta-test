import {TopMenu} from "./TopMenu.jsx";
import {Filters} from "./templates/Filter.jsx";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

export const Layout = ({children}) => {
  const {filter} = useSelector(state => state.shared)

  return (
    <div className="flex h-screen flex-col relative overflow-hidden">
      {
        filter &&
          <div className="absolute inset-0 bg-white z-40">
            <Filters />
          </div>
      }
      <TopMenu />
      <div className="max-w-5xl flex-1 w-full mx-auto h-full overflow-hidden">
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object
}
