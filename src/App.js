import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import store from './store'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about/loadable'
import Demo from './pages/demo/loadable'
import Blog from './pages/blog/loadable'
import Taiwan from './pages/taiwan/loadable'
import Login from './pages/login/loadable'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>  
            <Routes>
              <Route exact path='/' element = {<Home/>}></Route>
              <Route exact path='/about' element = {<About/>}></Route>
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
