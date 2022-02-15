import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import store from './store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Demo from './pages/demo'
import Blog from './pages/blog'
import Taiwan from './pages/taiwan'
import Login from './pages/login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <Header/>  
            <Routes>
              <Route exact path='/' element = {<Home/>}></Route>
              <Route exact path='/demo' element = {<Demo/>}></Route>
              <Route exact path='/demo/:id' element = {<Demo/>}></Route>
              <Route exact path='/blog' element = {<Blog/>}></Route>
              <Route exact path='/taiwan' element = {<Taiwan/>}></Route>
              <Route exact path='/login' element = {<Login/>}></Route>
            </Routes>
          </BrowserRouter>
      </Provider>
    )
  }
}

export default App
