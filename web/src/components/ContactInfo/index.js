import React  from 'react';
import { Typography, Space } from 'antd';
import '../../assets/css/style.css';
// import 'antd/dist/antd.css';

const { Title, Text } = Typography;

const ContactDetails = () => {

  return (
    <Space direction="vertical">
      <Title level={3}>Contact Details</Title>
      <Text>Email: unkothalawala@gmail.com</Text>
      <Text>Phone: (+94) 76 546 0062</Text>
      <Text>Address: 77 ,Kirigampamunuwa , Polgasowita</Text>
    </Space>
  );
};

export default ContactDetails;
