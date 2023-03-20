import React, { useState } from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import axios from '../../api/axios'
import '../../assets/css/style.css'; // import custom CSS styles


const Register = () => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const onFinish = async (values) => {


    //console.log(values.name)
      setLoading(true);
      try {
        const response = await axios.post('register',        
            {
            "name": values.name,
            "email":values.email,
            "phone":'0'+values.phone,
            "password":values.password
          })
        console.log(response.data);
        message.success(response?.data?.message);
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
        form.resetFields();
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    return (
        <>
         <h4>Register Form</h4>
      <div className="login-container">
       
        <Form name="login-form" form={form} initialValues={{ remember: true }} onFinish={onFinish}>

            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your Name!' }]}
            >
            <Input placeholder="Your Name" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please input your Mobile Number!' }]}
          >
            <Input placeholder="Your Mobile Number" type="text" prefix="+94" maxLength={9}/>
          </Form.Item>


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

          <Form.Item
            name="cpassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("The two passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>

  
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
              Register
            </Button>
            
          </Form.Item>
        </Form>
      </div>
      </>
    );
  };

  export default Register ;
  