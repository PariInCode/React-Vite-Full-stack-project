import React from 'react';
import {useDispatch} from 'react-redux';
import authService from '../../Appwrite/auth';
import {Logout} from '../../store/authSlice';
import Button from '../Button';

function LogoutBtn(){
    const dispatch = useDispatch();
    const LogoutHandler = ()=>{
        authService.Logout().then(() => {
            dispatch(Logout())

        })
    }
    return (
    <Button onClick={LogoutHandler}
     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</Button> ) ;s
}

export default LogoutBtn;