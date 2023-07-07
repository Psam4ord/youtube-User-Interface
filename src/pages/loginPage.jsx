import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginForm= () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    className='flex flex-col m-4 shadow-md  rounded-md p-2'
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please enter your email' }]}
    >
      <Input  className='xsmobile:w-3/4'/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password  className='xsmobile:w-3/4' />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button
       type="primary" htmlType="submit"
       className='bg-black text-white'
       >
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default LoginForm;