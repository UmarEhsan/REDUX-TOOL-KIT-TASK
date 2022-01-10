
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { addUser } from "../../redux/userBuismess"

const { Option } = Select; 

const UserInfo = () => {
    console.log("USER:::", addUser)
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        console.log('Success:', values);
        const { buisnessName, contactEmail } = values
        const user = {

        }
        dispatch(addUser(values))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const next = () => {
        console.log("NEXT")
    }
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
                    name="buisnessName"
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
                    name="industryId"
                    label="Industry Id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select Industry Id"
                        allowClear
                    >
                        <Option value="10537">Plumber</Option>
                        <Option value="10391">Software developer</Option>
                        <Option value="10415">Lawyer</Option>
                        <Option value="10109">Handyman</Option>
                    </Select>
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Next
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}

export default UserInfo;