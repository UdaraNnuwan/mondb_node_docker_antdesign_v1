import React,{useEffect,useState} from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom'

const NavigationBar = () => {
  const { auth, setAuth } = useAuth()
  const [logged, setLogged] = useState(false)
  const [logout, setLogout] = useState(false)
  const navigate = useNavigate();

  // let token = localStorage.getItem('atkn')
  useEffect(() => {
    if (localStorage.getItem('atkn') !== 'undefined') {
      const refreshtoken = localStorage.getItem('refreshtoken')
      const atkn = localStorage.getItem('atkn')
      if (atkn) {
        if (Object.keys(auth).length == 0)
          setAuth({atkn, refreshtoken})
          setLogged(true)
      }
    }
    console.log("helowe")
  }, [auth])

  useEffect(() => {
    if (logout) {
      localStorage.clear()
      setAuth({})
      setLogged(false)
      navigate('/');
    }
  }, [logout])

  const handleLogOut = () => {
    setLogout(true)
    localStorage.clear()
    setAuth({})
    setLogged(false)
    navigate('/');

  }

  return (
    <Menu mode="horizontal">
      <>
         {!logged && (
            <>
            <Menu.Item key="home">
              <Link to="/">Login</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/register">Register</Link>
            </Menu.Item>
            </>
         )}
         
         {logged && (
            <>
              <Menu.Item key="addemployee">
                <Link to="/add-employee">Add Employee</Link>
              </Menu.Item>
              <Menu.Item key="viewemployee">
                <Link to="/view-employee">View Employee</Link>
              </Menu.Item>
              <Menu.Item key="deleteemployee">
                <Link to="/delete-employee">Delete Employee</Link>
              </Menu.Item>
  
            </>
         )}
              <Menu.Item key="contact">
            <Link to="/contact">Contact</Link>
            </Menu.Item>
            {logged && (
            <>
              <Menu.Item key="logout">
                        <a onClick={() => handleLogOut('Login')}>
                          Logout
                        </a>
              </Menu.Item>
            </>
            )}
 
      </>
    </Menu>
  );
};

export default NavigationBar;
