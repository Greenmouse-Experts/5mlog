import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dispatchOrders, getInterstateOrder } from '../../../../store/slices/adminOrder'
import { Spinner2 } from '../../../assets/Spinner'
import { InterstateTable } from '../../assets/Tables/Admin-Table/interstate'
import { UpdateDetails } from './updateDetails'

export const InterStateOrder = () => {
    const[payment, setPayment] = useState(false)
    const[orderId, setOrderId] = useState("")

    const paymentModal = (val) => {
        setOrderId(val)
        setPayment(true)
    }
    const CloseModal = () => {
        setPayment(false)
    }
    const dispatch = useDispatch()

    const dispatchOrder = (id) => {
        dispatch(dispatchOrders(id))
        setTimeout(() => {
            dispatch(getInterstateOrder())
        }, 3000);
    }
    const Reload = () => {
        setTimeout(() => {
            dispatch(getInterstateOrder())
        }, 3000);
    }

    const success = useSelector((state) => state.orderAdmin.success);

    useEffect(() => {
        dispatch(getInterstateOrder())
    }, [dispatch])

  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>InterState Orders</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Manage and upadate customers/partners inter-state-orders.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='bg-white p-5 lg:p-10 rounded'>
                { success === false?  <Spinner2/> : <InterstateTable paymentModal={paymentModal} dispatchOrder={dispatchOrder} />}
            </div>
        </div>
        {
            payment && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 rounded-md overscroll-none w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <UpdateDetails CloseModal={CloseModal} order={orderId} reload={Reload} />
                    </div>
                </div>
            )
        }
    </div>
  )
}