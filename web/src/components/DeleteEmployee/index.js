import React,{ useState ,useEffect } from 'react';
import { Table,  Form, Input, Button, Checkbox,message } from 'antd';
import useAxiosPrivate from '../../hooks/useAxiosPrivate'

const DeleteEmployee =() =>{
    
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
      },   
    {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
    },
    {
      title: 'Action',
      key: '_id',
      render: (text, record) => (
        <Button onClick={() => handleDelete(record._id)}>Delete</Button>
      ),
    },
  ];
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState('');
    useEffect(() => {
        getEployeedata()
      },[])

    const getEployeedata=async()=>{
                try {
                    const response = await axiosPrivate.get('employee')
                    console.log(response.data)
                    setData(response?.data?.response)
                }
                catch(err){
                        console.log(err)
                }
            }
   

    const handleDelete =async(key) => {
        console.log(key)
        
        try {
            const response = await axiosPrivate.post('employee/deleteEmp',{
                "employeeID":key, 
            })
            message.success(response?.data?.message);
            getEployeedata()
            // setData(response?.data?.response)
        }
        catch(err){
                console.log(err)
        }
    //   const newData = data.filter((item) => item.key !== key);
    //   setData(newData);
    };
  
    return <Table dataSource={data} columns={columns} />;
  };

export default DeleteEmployee;