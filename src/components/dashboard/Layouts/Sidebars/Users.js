import {  BsFillGrid1X2Fill, BsGear, BsBoxArrowRight, BsFillCaretDownFill, BsBag } from "react-icons/bs";
import { GrLocation, GrTransaction } from "react-icons/gr"
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { logout } from "../../../../store/slices/auth";
import { useDispatch } from "react-redux";
import { MdNotificationAdd } from "react-icons/md";


const UsersSidebar = () => {

    const [signOut, setSignOut] = useState(false); // eslint-disable-next-line 
    const [trackDrop, setTrackDrop] = useState(false);
    const [orderDrop, setOrderDrop] = useState(false);
    function CloseModal() {
        setSignOut(false)
    }
    const [showSideBar, setShowSideBar] = useState(true);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        function handleResize() {
            if (window.innerWidth < 900) {
                setShowSideBar(false);
            } else {
                setShowSideBar(true);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);


    }, []);

    function unShow() {
        if (window.innerWidth < 900) {
            setShowSideBar(false);
        } else {
            setShowSideBar(true);
        }
    }
    const sideBarStyle = {
        cursorStyle: {
            cursor: "pointer"
        }
    }
    const activeStyle = {
        backgroundColor: "rgba(132, 194, 37, .1)",
        // color: "rgba(63, 121, 173, 1)",
        borderRight: "5px solid rgba(132, 194, 37, 1)"
    };
    const activeStyles = {
        backgroundColor: "rgba(132, 194, 37, .1)",
        borderBottom: "5px solid rgba(132, 194, 37, 1)",
        color: "rgba(132, 194, 37, 1)",
        
    };
    const signOutAction = () => {
        dispatch(logout())
            .then(() => {
                localStorage.removeItem("user");
                navigate('/');
            })
            .catch(() => {});
    }

    return (
        <div>
            <div>
                <FaBars className="text-2xl fixed top-6 z-50 menu-btn lg:hidden" onClick={() => {
                    setShowSideBar(current => !current);
                }} />
            </div>
            {showSideBar && (
                <div className="fixed z-20 fs-400 lg:fs-500 bg-white top-20 grid items-between w-6/12 lg:sidebar-w overflow-x-hidden shadow min-h-screen pt-2 px-2">
                    <div className="">
                        <NavLink
                            to=""
                            className="w-full flex items-center pl-2 py-2 fw-600 my-3"

                            onClick={unShow}
                        >
                            <BsFillGrid1X2Fill className="text-xl" />
                            <p className="pl-3"> Dashboard</p>
                        </NavLink>
                        <div
                            className="w-full items-center pl-2 py-2 fw-600 my-2"
                            onClick={unShow}
                        >
                            <div className="flex" onClick={e => e.stopPropagation()}>
                                <TbTruckDelivery className="text-2xl" />
                                <div className="flex items-center cursor-pointer" onClick={() => {setOrderDrop(!orderDrop);setTrackDrop(false)}}>
                                    <p className="pl-3 pr-5">Services</p>
                                    <BsFillCaretDownFill className="text-black"/>
                                </div>
                            </div>
                            {orderDrop && (
                                <div className="lg:ml-9 ml-4 fs-400 pt-2">
                                    <NavLink
                                        to="pickup"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        >
                                        <p className="py-2">PickUp Service</p>
                                    </NavLink>
                                    <NavLink
                                        to="inter-state"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        >
                                        <p className="py-2">Inter-State</p>
                                    </NavLink>
                                    <NavLink
                                        to="freight"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        >
                                        <p className="py-2">Overseas shipping</p>
                                    </NavLink>
                                    <NavLink
                                        to="procurement"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        >
                                        <p className="py-2">Procurements</p>
                                    </NavLink>
                                    <NavLink
                                        to="express"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        >
                                        <p className="py-2">Express Shipping</p>
                                    </NavLink>
                                    <NavLink
                                        to="warehouse"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        >
                                        <p className="py-2">Warehousing</p>
                                    </NavLink>
                                </div>
                            )}
                        </div>
                        <NavLink 
                            to="myorders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-3"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <BsBag className="text-xl" />
                                <p className="pl-3">Orders</p>
                        </NavLink>
                        <NavLink 
                            to="track"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-3"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <GrLocation className="text-xl" />
                                <p className="pl-3">Tracking</p>
                        </NavLink>
                        <NavLink 
                            to="transact"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-3"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <GrTransaction className="text-xl" />
                                <p className="pl-3">Transactions</p>
                        </NavLink>
                        <NavLink 
                            to="notification"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <MdNotificationAdd className="text-xl" />
                                <p className="pl-3">Notification</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="settings"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-3"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <BsGear className="text-xl" />
                                <p className="pl-3">Settings</p>
                        </NavLink>
                        <Link>
                            <div
                                style={sideBarStyle.cursorStyle}
                                onClick={ () => setSignOut(true)}
                                className="w-full py-2 fw-600 pl-2 flex my-2  rounded-lg">
                                <BsBoxArrowRight className="text-lg" />
                                <p className="pl-3">Sign Out</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
            {signOut && (
                <div className="fixed font-primary left-0 top-0 bg-op w-full h-screen bg-op flex justify-center items-center z-40" onClick={CloseModal}>
                    <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <div className="lg:px-6">
                            <div className="flex text-xl fw-600">
                                <p className="pr-4 text-red-600"><HiOutlineLogout/></p>
                                <p>Sign Out ?</p>
                            </div>
                            <p>Are you sure you want to sign out ?</p>
                        </div>
                        <div className="text-end px-4 my-5">
                            <button className="btn py-1 border-pri text-primary" onClick={CloseModal}>No</button>
                            <button className="btn py-1 ml-5 border border-red-600 text-red-600" onClick={signOutAction}>Yes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default UsersSidebar
