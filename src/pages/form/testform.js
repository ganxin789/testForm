import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleSubmit = e => {
        e.preventDefault();
       console.log(e)
      };
    render() { 
        const { getFieldDecorator } = this.props.form;
        return ( 
            <Form onSubmit={(e)=>{console.log(e);alert('tell me')}} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
         );
    }
}
const WrapT=Form.create()(TestForm) 
export default WrapT;