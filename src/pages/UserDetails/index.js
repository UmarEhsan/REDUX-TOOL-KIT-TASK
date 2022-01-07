import React from 'react';
import CreateApplicant from '../../components/create'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
const UserDetails = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1>User Details</h1>
            <Button type="primary" onClick={() => {navigate('/')}}>Back</Button>
            <CreateApplicant />
        </>
    );
}

export default UserDetails;