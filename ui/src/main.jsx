import * as ReactDOM from 'react-dom/client'
import './assets/styles/style.css'

import {store, persistor} from './store.ts'
import { Provider } from 'react-redux'
import {AuthRoutes, GuestRoutes} from "./component/";
import { PersistGate } from 'redux-persist/integration/react'
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-calendar/dist/Calendar.css';
// Component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Login from './modules/authentication/pages/login.jsx'
import Register from './modules/authentication/pages/register.jsx'
import PageNotFound from "./modules/shared/not-found.jsx";
import SetPreferences from "./modules/profile/pages/set-preferences.jsx"
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<AuthRoutes>
            <App />
          </AuthRoutes>}  />

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
      </BrowserRouter>
    </PersistGate>
  </Provider>

)
