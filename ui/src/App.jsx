import {AuthRoutes, GuestRoutes, Layout} from './component'
import {Outlet} from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NewsFeeds} from "./modules/news/pages/feeds.jsx";
import Login from "./modules/authentication/pages/login.jsx";
import Register from "./modules/authentication/pages/register.jsx";
import PageNotFound from "./modules/shared/not-found.jsx";
import {ToastContainer} from "react-toastify";
import SetPreferences from "./modules/profile/pages/set-preferences.jsx"

function App() {
  return (
    <BrowserRouter>
      <Layout  >
        <div className="h-full w-full flex flex-col p-6 space-y-8 overflow-hidden">
          <Routes>

            <Route path='/' element={<AuthRoutes>
              <NewsFeeds />
            </AuthRoutes>} />

            <Route path="/set-preferences" element={<AuthRoutes>
              <SetPreferences />
            </AuthRoutes>}  />


            <Route path="/login" element={<GuestRoutes>
              <Login />
            </GuestRoutes>} />
            <Route path="/register" element={<GuestRoutes>
              <Register />
            </GuestRoutes>} />

            {/* default redirect to home page */}
            <Route path="*" element={<PageNotFound  />} />
          </Routes>

          <ToastContainer />
        </div>
      </Layout>

    </BrowserRouter>
  )
}

export default App
