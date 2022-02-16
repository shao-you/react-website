import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyle from './style'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    {/* <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </head> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
