import React from 'react'
import {
    Menu, MenuHandler, MenuItem, MenuList, Button, Avatar
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { ProfileAvatar } from './Profilepic';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/auth';
import { MdArrowDropDown } from 'react-icons/md';

export const HomepageProfile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector((state) => state.auth.user) 


  return (
    <div className='flex items-center'>
        <Menu placement="bottom-end">
            <MenuHandler>
                <Button className="py-2 flex items-center fw-500 text-black fs-500 bg-transparent shadow-md">
                    <p className='pr-1 fw-500 fs-500 normal-case'>{user?.first_name + " " + user?.last_name}</p>
                    <MdArrowDropDown className='text-2xl'/>
                </Button>
            </MenuHandler>
            <MenuList>
                {
                    user?.account_type === "Administrator" || user?.account_type === "Dispatcher"? <MenuItem onClick={() => navigate("/dashboard")}>Orders</MenuItem> : ''
                }
                {
                    user?.account_type === "Customer" || user?.account_type === "Partner"? <MenuItem onClick={() => navigate("/dashboard")}>Services</MenuItem> : ''
                }
                {
                    user?.account_type === "Customer" || user?.account_type === "Partner"? <MenuItem onClick={() => navigate("/dashboard/myorders")}>My Orders</MenuItem> : ''
                }
                {
                    user?.account_type === "Driver"? <MenuItem onClick={() => navigate("/dashboard/new-orders")}>New Orders</MenuItem> : ''
                }
                {
                    user?.account_type === "Driver"? <MenuItem onClick={() => navigate("/dashboard/my-orders")}>My Orders</MenuItem> : ''
                }
                <MenuItem onClick={() => navigate("/dashboard/track")}>Tracking</MenuItem>
                {
                    user.account_type === "Administrator"? 
                    ""
                    :
                    <MenuItem onClick={() => navigate("/dashboard/settings")}>Settings</MenuItem>
                }
                <MenuItem onClick={()=> dispatch(logout())}>Sign Out</MenuItem>
            </MenuList>
        </Menu>
        <div className='circle shadow-lg overflow-hidden ml-2'>
            {user?.photo? <Avatar src={`${process.env.REACT_APP_MEDIA_URL + user?.photo}`} alt="profifepic" /> : <ProfileAvatar/>}
        </div>
    </div>
  )
}
