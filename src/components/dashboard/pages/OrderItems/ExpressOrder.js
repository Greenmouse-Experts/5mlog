import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { FaListAlt, FaTimes } from 'react-icons/fa'
import { PaystackButton } from 'react-paystack'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { deleteOrders, getExpressOrder } from '../../../../store/slices/userOrder'
import { Spinner2 } from '../../../assets/Spinner'
import { formatPriceNgn } from '../../assets/RegexFormat/Format'
import { ExpressTable } from '../../assets/Tables/User-Table/express'

export const ExpressOrderUser = () => {

    const token = JSON.parse(localStorage.getItem('lynchpin'));

    const[payment, setPayment] = useState(false) // eslint-disable-next-line 
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState()
    const paymentModal = (item) => {
        setPayment(true)
        setItem(item)
    }
    const CloseModal = () => {
        setPayment(false)
    }
   
    const dispatch = useDispatch()

    const success = useSelector((state) => state.order.success);
    const user = useSelector((state) => state.user);

    const deleteOrder = (id) => {
        dispatch(deleteOrders(id))
        setTimeout(() => {
            dispatch(getExpressOrder())
        }, 3000);
    }

    useEffect(() => {
        dispatch(getExpressOrder())
    }, [dispatch])

    const sendOrder = async (payment) => {
        try {
          setLoading(true);
          const payload = {
            order_id: item.order_id,
            service_type: item.service_type,
            amount: item.price,
            reference: payment.reference,
            status: "paid",
             };
          console.log(payload);
          const config = {
            headers: { 
                'Authorization': 'Bearer ' + token 
            }
          };
          const response = await axios.post(`${process.env.REACT_APP_BASE_URL }/confirm/payment`, payload, config)
          toast.success('payment successful')
          CloseModal();
          setTimeout(() => {
            dispatch(getExpressOrder())
        }, 3000);
          return response
            
        } catch (error) {
          CloseModal();
          setLoading(false);
          if (error?.response?.data?.message) {
            toast.error(error.response.data.message, {
              duration: "4000",
              position: "bottom",
            });
            return;
          };
         
        }
      };
    const handlePaystackSuccessAction = (reference) => {
        console.log(reference);
        sendOrder(reference);
      };
      const handlePaystackCloseAction = () => {
        console.log("incorrect transaction");
      };
    
      const config = {
        reference: "TR-" + new Date().getTime().toString(),
        email: user?.email,
        amount: item?.price,
        publicKey: "pk_test_b510f76c925d5a1fefd9b2a1286fce525ac44b41",
      };
      const componentProps = {
        ...config,
        // text: 'Paystack Button Implementation',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
      };

  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-inter lg:bg-fill bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 lg:text-2xl text-xl'>Express Shipping Orders</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Manage and monitor the transportation of your items.</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='bg-white p-5 lg:p-10 rounded'>
                <div className='mb-6'>
                    <p className='fw-600 flex items-center'><span className="pr-2"><FaListAlt/></span>Orders Listing</p>
                </div>
                <div>
                    { success === false?  <Spinner2/> : <ExpressTable paymentModal={paymentModal} deleteOrder={deleteOrder}/>}
                </div>
            </div>
        </div>
        {
            payment && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-light relative lg:w-4/12 rounded-md overscroll-none w-11/12 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                        <div className='text-xl text-white fw-600 text-center bg-primary py-3 rounded-t-md'>
                            <p>Payment Details</p>
                        </div>
                        <div className='lg:px-6 px-3 py-6'>
                            <p className='mb-4'>Order Id: <span className='pl-2'>PKP-9758-3444</span></p>
                            <p className='my-4'>Payment Status:<span className='pl-2'>{item.paid? "Paid" : "Not paid" }</span></p>
                            <p className='mx-auto w-48 h-36 grid place-content-center shadow-lg rounded-lg fw-700 text-xl bg-white'>
                                {item?.price? formatPriceNgn(item.price) : "---"}
                            </p>
                            <div className='text-end mt-6'>
                                {
                                    item?.price? 
                                    <div>
                                        {
                                            item?.paid === null? 
                                            <PaystackButton
                                                text="Pay Now"
                                                label="Pay Now"
                                                className='bg-primary lg:px-12 py-2 rounded-lg fw-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-600 fs-500 lg:fs-700 px-6'                                    {...componentProps}
                                                />
                                                :
                                                <button
                                                className='bg-primary lg:px-12 py-2 rounded-lg fw-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-600 fs-500 lg:fs-700 px-6'                                    {...componentProps}
                                                disabled>
                                                    Paid
                                                </button> 
                                        }
                                    </div>
                                    :
                                    <button
                                    className='bg-primary lg:px-12 py-2 rounded-lg fw-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-600 fs-500 lg:fs-700 px-6'                                    {...componentProps}
                                    >
                                        No Price
                                    </button>
                                }
                            </div>
                        </div>
                        <FaTimes className='absolute text-red-500 top-3 bg-white right-5 cursor-pointer' onClick={CloseModal}/>
                    </div>
                </div>
            )
        }
    </div>
  )
}