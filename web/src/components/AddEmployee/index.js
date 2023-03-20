import React, { useState } from 'react';
import { UploadProps,  Form, Input, Button, Checkbox,message } from 'antd';
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { UploadOutlined } from '@ant-design/icons';
import axios from '../../api/axios'
import '../../assets/css/style.css'; // import custom CSS styles


const AddEmployee = () => {

    const axiosPrivate = useAxiosPrivate()
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const employeeSubmit = async (values) => {
    //console.log(values.name)
      setLoading(true);
      try {
        const response = await axiosPrivate.post('employee/store',        
            {
            "name": values.name,
            "designation":values.designation,
            "phone":'0'+values.phone,
            "age":values.age,
            "email":values.email
          })
        console.log(response.data);
        message.success(response?.data?.message);
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
        // form.resetFields();
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    return (
        <>
        <h4>Add Employee</h4>
      <div className="addemp-container">
     
      <div>
        <Form name="employee-form" form={form} initialValues={{ remember: true }} onFinish={employeeSubmit}>

            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input Employee Name!' }]}
            >
            <Input placeholder="Employee Name" />
          </Form.Item>
          <Form.Item
                name="designation"
                rules={[{ required: true, message: 'Please input Employee Designation!' }]}
            >
            <Input placeholder="Employee Designation" />
          </Form.Item>
          
          <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input Employee Emails!' }]}
            >
            <Input placeholder="Employee Emali" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please input Employee Mobile Number!' }]}
          >
            <Input placeholder="Employee Mobile Number" type="text" prefix="+94" maxLength={9}/>
          </Form.Item>

          
          <Form.Item
            name="age"
            rules={[{ required: true, message: 'Please input Employee Age!' }]}
          >
            <Input placeholder="Employee Age" type="number" min='0' max='80' maxLength={9}/>
          </Form.Item>



          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
              Add 
            </Button>
            
          </Form.Item>
           
        </Form>
        </div>
      </div>
      </>
    );
  };

  export default AddEmployee ;
  