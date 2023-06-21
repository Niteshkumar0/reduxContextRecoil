import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from './reduxStatemanagment/redux/store.jsx'
import {Provider} from 'react-redux'
import Context from './UseContext/context.jsx'
import {RecoilRoot} from 'recoil'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <Provider store={store}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Provider>
    </Context>
  </React.StrictMode>,
)
