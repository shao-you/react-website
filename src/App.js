import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import store from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Header />  
          <BrowserRouter>
            <Routes>
              <Route path='/' element = {<Home/>}></Route>
              <Route path='/detail' element = {<Detail/>}></Route>
            </Routes>
          </BrowserRouter>
      </Provider>
    )
  }
}

export default App
