import * as ReactDOM from 'react-dom/client'
import './assets/styles/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Login from './modules/authentication/pages/login.jsx'
import PageNotFound from "./modules/shared/not-found.jsx";
import {store} from './store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/login" element={<Login />} />
        </Route>

        {/* default redirect to home page */}
        <Route path="*" element={<PageNotFound  />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  
)
