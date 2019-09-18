import React from 'react';
import { Button, Input, Icon, Form, Checkbox } from 'antd'


function Form1(props) {
    const getFieldDecorator = props.form.getFieldDecorator;
    const form = props.form
    // console.log(getFieldDecorator)
    function handleSubmit(e) {
        e.preventDefault();
        
        form.validateFields((err,values)=>{
            if (err) {
               alert('err:')
            }else{
                console.log('values:',values)
            }
        })
        
        
    }
    function mydo(rules, value, callback) {

        if (value.length < 5) {
            callback('no less than 5')
        } else {
            callback()
        }
    }
    return (
        < >
            <Form className="login-form" onSubmit={(e) => { handleSubmit(e) }}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [
                            { required: true, message: 'Please input your username!' },
                            { pattern: /^[A-z]*$/, message: 'zheng ze!' },
                            {initialValue:'admin'}
                        ],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ validator: (rules, value, callback) => mydo(rules, value, callback) }],
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
                    <Button type="primary" htmlType='submit' className="login-form-button">
                        Log in
          </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </>
    )
}
const WrapFun = Form.create()(Form1)
export default WrapFun;
