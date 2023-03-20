import { Form, InputNumber, Popconfirm, Table, Typography,Input,message } from 'antd';
import React,{ useState,useEffect } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate'


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const ViewEmployee = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState('');
    const [editingKey, setEditingKey] = useState('');
    const axiosPrivate = useAxiosPrivate();
    const columns = [
        {
          title: 'name',
          dataIndex: 'name',
          width: '25%',
          editable: true,
        },
        {
          title: 'age',
          dataIndex: 'age',
          width: '15%',
          editable: true,
        },
        {
          title: 'phone',
          dataIndex: 'phone',
          width: '20%',
          editable: true,
        },
        {
            title: 'email',
            dataIndex: 'email',
            width: '20%',
            editable: true,
          },
        {
          title: 'operation',
          dataIndex: '_id',
          render: (_, record) => {
            const editable = isEditing(record);
            return editable ? (
              <span>
                <Typography.Link
                //   onClick={() => save(record.key)}
                  onClick={() => save(record)}
                  style={{
                    marginRight: 8,
                  }}
                >
                  Save
                </Typography.Link>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
              <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                Edit
              </Typography.Link>
            );
          },
        },
      ];

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

  const isEditing = (record) => record._id === editingKey;
  const edit = (record) => {
    // console.log("key",record)
    form.setFieldsValue({
      name: '',
      age: '',
      phone: '',
      email: '',
      ...record,
    });
    setEditingKey(record._id);
  };
  const cancel = () => {
    setEditingKey('');
  };
  const save = async (key) => {
    // console.log(key)
    try {
      
       const row = await form.validateFields();
       const newData = [...data];
    //    console.log(newData)
        const index = newData.findIndex(item => item._id === key._id);
        // const item = newData[index];

        // console.log([index])
      if (index > -1) {
        const item = newData[index];
        item.employeeID = key._id;
        console.log("item",item)

       
        
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData,async()=>{
          console.log("data Updated")
        });
        console.log("new Data",newData)
        const index2 = newData.findIndex(item2 => item2._id === key._id);
        const item2 = newData[index2];
        const { employeeID,name,age,phone,email,designation } = item2;
        const response = await axiosPrivate.post('employee/update', { employeeID,name,age,phone,email,designation })
        message.success(response?.data?.message);
  
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default ViewEmployee;