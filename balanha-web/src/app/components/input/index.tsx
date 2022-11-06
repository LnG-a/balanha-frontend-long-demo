import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const TextInput: React.FC = () => (
  <>
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  </>
);

export default TextInput;
