import { Breadcrumbs } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TbTruckDelivery, TbPackgeExport } from "react-icons/tb"
import { AiOutlineDeliveredProcedure } from "react-icons/ai"
import { GiBuyCard } from "react-icons/gi"
import { TbLiveView} from "react-icons/tb"
import { UserDashBoardHomeTable } from '../../assets/Tables/UserDashBoardHome'
import OrdersChart from '../../assets/Charts/OrdersChart'
import { useSelector } from 'react-redux';
import axios from "axios";

export const UserDashboard = () => {

    const user = useSelector((state) => state.auth.user);
    const [request, setData] = useState([]);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const url = `${process.env.REACT_APP_BASE_URL}/get/dashboard`;
                const response = await axios.get(url, { headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('lynchpin')) } });
                const data = response.data.data
                setData(data);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchDashboard()
    },[request]);



  return (
    <div>
        <div  className="min-h-screen fs-500 relative">
            {/* header */}
            <div className="w-full py-8 lg:pl-6 bg-white px-4">
                <p className="text-2xl fw-600">Hello {user?.first_name} {user?.last_name}</p>
                <p className="fs-400 text-gray-600 mt-2">Access our various services on your dashboard.</p>
                <Breadcrumbs className="bg-white pl-0 mt-4">
                    <Link to="/" className="opacity-60">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </Link>
                    <Link to="/" className="opacity-60">
                        <span>Dashboard</span>
                    </Link>
                </Breadcrumbs>
            </div> 
            <div className='lg:p-5 px-2 py-3'>
                <div className='lg:grid-4 justify-evenly mt-6'>
                    <div className='border shadow-xl flex py-8 rounded bg-green-100'>
                        <div className='w-4/12 grid place-content-center'>
                            <div className='bg-primary text-3xl w-12 h-12 circle grid place-content-center'>
                                <TbTruckDelivery/>
                            </div>
                        </div>
                        <div className='w-8/12'>
                              <p className='lg:text-4xl text-2xl fw-600'>{ request.total_order }</p>
                            <p className='fs-400'>Total Deliveries</p>
                        </div>
                    </div>
                    <div className='border shadow-xl mt-6 lg:mt-0 flex py-8 rounded bg-blue-100'>
                        <div className='w-4/12 grid place-content-center'>
                            <div className='bg-blue-400 text-3xl w-12 h-12 circle grid place-content-center'>
                                <TbPackgeExport/>
                            </div>
                        </div>
                        <div className='w-8/12'>
                              <p className='lg:text-4xl text-2xl  fw-600'>{request.pending_order }</p>
                            <p className='fs-400'>Delivery Request</p>
                        </div>
                    </div>
                    <div className='border shadow-xl mt-6 lg:mt-0 flex py-8 rounded bg-orange-100'>
                        <div className='w-4/12 grid place-content-center'>
                            <div className='bg-orange-400 text-3xl w-12 h-12 circle grid place-content-center'>
                                <TbPackgeExport/>
                            </div>
                        </div>
                        <div className='w-8/12'>
                              <p className='lg:text-4xl text-2xl  fw-600'>{request.ongoing_order}</p>
                            <p className='fs-400'>Ongoing Deliveries</p>
                        </div>
                    </div>
                    <div className='border shadow-xl mt-6 lg:mt-0 flex py-8 rounded bg-red-100'>
                        <div className='w-4/12 grid place-content-center'>
                            <div className='bg-red-400 text-3xl w-12 h-12 circle grid place-content-center'>
                                <TbPackgeExport/>
                            </div>
                        </div>
                        <div className='w-8/12'>
                              <p className='lg:text-4xl text-2xl  fw-600'>{request.completed_order}</p>
                            <p className='fs-400'>Delivered Orders</p>
                        </div>
                    </div>
                </div>
                {/* table and graph */}
                <div className='lg:grid-64 mt-6 lg:mt-12'>
                    {/* table */}
                    <div className='bg-white lg:p-4 p-6 rounded-lg'>
                        <div className='flex justify-between pb-2 mb-3 border-b border-gray-400'>
                            <p className='fw-600 text-lg flex items-center '><span className=' pr-3'><GiBuyCard/></span>Order Activity</p>
                            <button className='btn-primary py-1 flex items-center'>view all <span className='pl-2 text-xl'><TbLiveView/></span></button>
                        </div>
                          <UserDashBoardHomeTable tableList={ request.order_activities } />
                    </div>
                    <div className='bg-white lg:p-4 p-6 rounded-lg mt-6 lg:mt-0'>
                        <p className='pb-2 mb-8 fw-600 text-lg flex items-center border-b border-gray-400'><span className=' pr-3'><AiOutlineDeliveredProcedure/></span>Deliveries</p>
                          <OrdersChart chartData={ request } />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
