import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {HelmetProvider} from "react-helmet-async";
import store from './Redux/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store} >
    <App />
    </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)