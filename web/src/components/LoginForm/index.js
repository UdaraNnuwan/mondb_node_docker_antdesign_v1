import React, { useState } from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios'
import '../../assets/css/style.css'; // import custom CSS styles
import useAuth from '../../hooks/useAuth'


const Login = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const {auth ,setAuth } = useAuth() 
    const navigate = useNavigate();
    const onFinish = async (values) => {
      
      setLoading(true);
      try {
        const response = await axios.post('login',        
            {
            "username":values.email,
            "password":values.password
          })
        message.success(response?.data?.message);
        const token = response?.data?.token
        if (token) {
          const refreshToken = response?.data?.refreshtoken
          setAuth({"token":token,refreshToken});
          localStorage.setItem('atkn', token);
          localStorage.setItem('refreshtoken', refreshToken);
          navigate('/add-employee');
        }
          
        // console.log(response.data);
        // form.resetFields();
        setLoading(false);
      } catch (error) {
        // message.error(response?.data?.message);
        console.log(error);
        setLoading(false);
      }
    };
  
    return (
      <>
      <h4>Login Form</h4>
      <div className="login-container">
      
        <Form name="login-form"  form={form} initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
  
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
{/*   
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="/" className="login-form-forgot">
              Forgot password
            </a> */}
          {/* </Form.Item> */}
  
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
              Log in
            </Button>
            {/* Or <a href="/">register now!</a> */}
          </Form.Item>
        </Form>
      </div>
      </>
    );
  };

  export default Login ;
  