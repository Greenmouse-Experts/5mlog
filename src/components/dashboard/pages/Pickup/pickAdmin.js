import { Input } from '@material-tailwind/react'
import React, { useRef, useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearMessage } from "../../../../store/slices/messages";
import { adminPickupService} from "../../../../store/slices/apiServices";
import { useNavigate } from 'react-router';

export const PickupAdmin = () => {
    let formRef = useRef(null);

    const { message } = useSelector((state) => state.message);

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        const formdata = new FormData(formRef);

        dispatch(adminPickupService(formdata))
            .then(() => {
                setSuccessful(true)
                setDisableBtn(false);
                formRef.reset();
            })
            .catch(() => {
                setSuccessful(true)
                setDisableBtn(false);
            });
    }


    const displayMessage = (message) => {
        if (message) {
            if (!message.success) {
                toast.error((Object.values(message.errors).toString()));
            }
            else {
                toast.success(message.message);
                navigate('/dashboard/admin-pickup')
            }
        }
        setSuccessful(false);
    }


  return (
    <div>
          <form ref={el => (formRef = el)} onSubmit={handleSubmit}>
            <div className='border-b border-gray-400 pb-4'>
                <p className='block fw-600'>Preffered Vehicle for Pickup</p>
                <div className='flex mt-4'>
                    <div className='w-6/12 lg:w-3/12'>
                        <input type="radio" name="pickup_vehicle" value="motor bike" />
                        <label className='pl-4'>Motor Bike</label>
                    </div>
                    <div className=''>
                          <input type="radio" name="pickup_vehicle" value="car" />
                        <label className='pl-4'>Car</label>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-6/12 lg:w-3/12'>
                          <input type="radio" name="pickup_vehicle" value="mini van" />
                        <label className='pl-4'>Mini Van</label>
                    </div>
                    <div className=''>
                          <input type="radio" name="pickup_vehicle" value="truck" />
                        <label className='pl-4'>Truck</label>
                    </div>
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Pick Location</p>
                <div className='mt-4'>
                      <Input type="text" label="Pickup Address" name="pickup_address" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" label="Drop-off Address" name="dropoff_address" required />
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Sender's Info</p>
                <div className='mt-4'>
                      <Input type="text" name="sender_address" label="Enter complete address of sender" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" name="sender_name" label="Sender's Name" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" name="sender_phone_number" label="Sender's Phone Number" required />
                </div>
            </div>
            <div className='border-b border-gray-400 py-4'>
                <p className='fw-600'>Receiver's Info</p>
                <div className='mt-4'>
                      <Input type="text" name="receiver_address" label="Enter complete address of receiver" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" name="receiver_name" label="Receiver's Name" required />
                </div>
                <div className='mt-4'>
                      <Input type="text" name="receiver_phone_number" label="Receiver's Phone Number" required />
                </div>
            </div>
            <div className='mt-6 text-end'>
                <button disabled={disableBtn} className='btn-primary lg:px-16'>Proceed</button>
            </div>
          </form>
          {successful ? displayMessage(message) : ''}
    </div>
  )
}
