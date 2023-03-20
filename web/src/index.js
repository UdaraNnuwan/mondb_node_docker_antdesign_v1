import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import AOS from 'aos'
import App1 from './components/App'
// import 'react-block-ui/style.css'
import 'aos/dist/aos.css'
import { AuthProvider } from './context/AuthProvider'
AOS.init()
import Router from './router/index'



const App = () => (
  <BrowserRouter basename="/">
     <AuthProvider>
     <Router/>  
     </AuthProvider>
   </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
