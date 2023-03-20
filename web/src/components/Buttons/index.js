import React, { useState }  from 'react';
import 'antd/dist/reset.css';
import { Button ,message } from 'antd';
import {PoweroffOutlined} from '@ant-design/icons';


const Buttons=() =>{
    const [loading,setLoading]=useState(false)
    const OnButtonClick = (e)=>{
        message.info(`Butoon Clicked`);
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    }
  return (
   <div className='App'>
      <header className='App-header'>
        {/* <Button type='link' href="https://google.com">My First Button</Button> */}
          <Button 
          type='primary' 
          icon={ <PoweroffOutlined />}
         style={{backgroundColor:'red',color:'fff'}}
          block 
          onClick={OnButtonClick}
          >
            My First Button</Button>
      </header>
   </div>
  );
};


export default Buttons;
