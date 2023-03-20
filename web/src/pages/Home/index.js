import React from 'react'
import App1 from '../../components/App'
import Buttons from '../../components/Buttons'
import Login from '../../components/LoginForm'
import Register from '../../components/RegisterForm'
const Home = (props) => {
  const {sign } = props
  console.log(sign);
    return (
    <>
        {/* <App1/> */}
        {/* <Buttons/> */}
        {
          sign=='login' ?
          <Login/> : (
            sign=='register' ? <Register/> : "Not")
        }
       
    </>
  )
}

export default Home
