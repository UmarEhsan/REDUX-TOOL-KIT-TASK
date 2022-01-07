
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const UserInfo = () => {
    let navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <h1>User Info</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 2,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Business Name"
                    name="businessName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your business name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contact Email"
                    name="contactEmail"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>




                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={() => { navigate('user_details') }}>
                        Next
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}

export default UserInfo;