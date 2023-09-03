import {TopMenu} from "./TopMenu.jsx";
import {Filters} from "./templates/Filter.jsx";

export const Layout = ({filter, handleFilter, children}) => {
  return (
    <div className="flex h-screen flex-col relative overflow-hidden">
      {
        filter &&
          <div className="absolute inset-0 bg-white z-40">
            <Filters handleFilter={handleFilter} />
          </div>
      }
      <TopMenu />
      <div className="max-w-5xl flex-1 w-full mx-auto h-full overflow-hidden">
        {children}
      </div>
    </div>
  )
}
