import { Button, Input, Option, Select } from '@material-tailwind/react'
import React, {useState, useEffect} from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getPickupOrder } from '../../../../store/slices/adminOrder'
import { Spinner2 } from '../../../assets/Spinner'
import { PickupTable } from '../../assets/Tables/Admin-Table/PickupOrder'

export const PickupOrders = () => {

    const[payment, setPayment] = useState(false)
    const paymentModal = () => {
        setPayment(true)
    }
    const CloseModal = () => {
        setPayment(false)
    }

    const dispatch = useDispatch()

    const success = useSelector((state) => state.orderAdmin.success);

    useEffect(() => {
        dispatch(getPickupOrder())
    }, [dispatch])

  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-pick bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 text-xl lg:text-2xl'>Pickup Orders</p>
                <p className='mt-2 lg:w-8/12 fs-400 lg:fs-600'>Manage all the pickup orders received from customers/partners. view details of the order and add a price tag for payment to enable fast delivery of item(s)</p>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mt-6'>
            <div className='bg-white lg:p-6 lg:py-10 px-3 py-6 shadow-lg rounded-lg'>
                { success === false?  <Spinner2/> : <PickupTable paymentModal={paymentModal}/>}
            </div>
        </div>
        {
            payment && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 rounded-md overscroll-none w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <p className='text-center fw-600 border-b border-gray-300 pb-4'>Update details for this Order </p>
                        <div className='lg:px-6 py-6'>
                            <p className='mb-4'>Order Id: <span>PKP-9758-3444</span></p>
                            <div>
                                <form>
                                    <Input type="number" label="Enter Amount(naira)" />
                                    <div  className='my-5'>
                                        <Select label='Order status'>
                                            <Option>New</Option>
                                            <Option>Ongoing</Option>
                                            <Option>Delivered</Option>
                                            <Option>Cancelled</Option>
                                        </Select>
                                    </div>
                                    <div>
                                        <Input type="number" label='Order Progress (0-100)'/>
                                    </div>
                                    <div className='mt-5'>
                                        <Input type="text" label='Order current location'/>
                                    </div>
                                </form>
                            </div>

                            <div className='text-end mt-6'>
                                <Button className='bg-primary'>Update Order Details</Button>
                            </div>
                        </div>
                        <FaTimes className='absolute top-5 right-5 cursor-pointer' onClick={CloseModal}/>
                    </div>
                </div>
            )
        }
    </div>
  )
}
