import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { legacy_createStore } from 'redux'
import { globalReducer } from './reducers/countReducer.jsx'
import { Provider } from 'react-redux'

const store = legacy_createStore(globalReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
