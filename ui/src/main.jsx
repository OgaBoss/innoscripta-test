import * as ReactDOM from 'react-dom/client'
import './assets/styles/style.css'
import {store, persistor} from './store.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-calendar/dist/Calendar.css';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>

)
