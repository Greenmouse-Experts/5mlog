import React, {useState, useEffect} from 'react'
import { Input } from '@material-tailwind/react'
// eslint-disable
import { FaTimes, FaTruckMoving } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { clearMessage } from '../../../../store/slices/messages'
import { createVehicle, deleteVehicle, getVehicle, updateVehicle } from '../../../../store/slices/vehicleService'
import { Spinner2 } from '../../../assets/Spinner'
import { VehicleTable } from '../../assets/Tables/Admin-Table/Vehicle'


export const Vehicles = () => {

    const[vehicles, setVehicles] = useState(false)// eslint-disable-next-line 
    const[item, setItem] = useState(false)
    // eslint-disable-next-line 
    const ViewMore = (id) => {
        setItem(id)
    }
    const vehicleModal = () => {
        setVehicles(true)
    }
    const CloseModal = () => {
        setVehicles(false)
    }
    const { message } = useSelector((state) => state.message);
    const success =  useSelector((state) => state.vehicle.success);

    const dispatch = useDispatch()

    const [successful, setSuccessful] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const {register, getValues} = useForm()

    useEffect(() => {
        dispatch(clearMessage());
        dispatch(getVehicle())
    }, [dispatch]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableBtn(true);

        const values = getValues();

            dispatch(createVehicle(values))
                .then(() => {
                    setDisableBtn(false)
                    setSuccessful(true)
                    CloseModal()
                    setTimeout(() => {
                        dispatch(getVehicle())
                    }, 3000);
                })
                .catch(() => {
                    setDisableBtn(false)
                    setSuccessful(false)
                });
        }
        const displayMessage = (message) => {
            if (message) {
                if (!message.success) {
                    toast.error((Object.values(message.errors).toString()));
                }
                else {
                    toast.success(message.message);
                }
            }
            setSuccessful(false);
        }
        const DeleteVehicle = (id) => {
            dispatch(deleteVehicle(id))
            setTimeout(() => {
                dispatch(getVehicle())
            }, 3000);
        }

  return (
    <div className='min-h-screen fs-500'>
        <div className='lg:h-44 h-48 bg-vehicle lg:flex justify-between  bg-cover bg-bottom text-white w-full bg-white  items-center lg:px-12 px-4'>
            <div className='lg:pt-0 pt-6'>
                <p className='fw-600 lg:text-2xl text-xl'>5M Logistics Vehicles</p>
                <p className='mt-2 lg:w-10/12 fs-400 lg:fs-600'>Store and manage informations of all vehicles used for delivery.</p>
            </div>
            {/* add inventory */}
            <div className='mt-4 lg:mt-0'>
                <button onClick={vehicleModal} className="bg-primary fw-600 px-4 lg:px-7 py-2 rounded-md shadow-xl">Add New Vehicle</button>
            </div>
        </div>
        {/* content */}
        <div className='lg:p-5 px-3 mt-6'>
            <div className='bg-white p-5 lg:p-10 rounded'>
                {/* inventory table */}
                <div className='mb-6'>
                    <p className='fw-600 flex items-center text-lg'><span className="pr-2 text-primary text-2xl"><FaTruckMoving/></span>Vehicle Database Listing</p>
                    <div className='mt-3 lg:mt-8'>
                        {success === false? <Spinner2/> : <VehicleTable updateVehicle={updateVehicle} vehicleDelete={DeleteVehicle}/>}
                    </div>
                </div>
            </div>
        </div>
        {
            vehicles && (
                <div className='fixed font-primary left-0 top-0 w-full h-screen bg-op flex justify-center items-center z-40' onClick={CloseModal}>
                    <div className="bg-white relative lg:w-5/12 max-h-03 overflow-scroll rounded-md overscroll-none w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <p className='text-center fw-600 border-b border-gray-300 lg:text-xl pb-4'>Add New Vehicle to Database</p>
                        <div className='lg:px-6 py-6'>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                      <label className='fs-500 mb-2 block'>Vehicle make</label>
                                      <Input type="text" label="Make of Vehicle" name='make' {...register('make')}/>
                                    </div>
                                    <div className='lg:flex'>
                                        <div className='mt-5 lg:w-6/12 lg:pr-2'>
                                            <label className='fs-500 mb-2 block'>Production year</label>
                                            <Input type="text" name='year' {...register('year')} />
                                        </div>
                                        <div className='mt-5 lg:w-6/12 lg:pl-2'>
                                            <label className='fs-500 mb-2 block'>Vehicle identitification Number</label>
                                            <Input type="text" label="VIN" name='vin' {...register('vin')} />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='mt-5'>
                                            <label className='fs-500 mb-2 block'>Model</label>
                                            <Input type="text" label="Model of Vehicle" name='model' {...register('model')} />
                                        </div>
                                        <div className='mt-5'>
                                            <label className='fs-500 mb-2 block'>Engine Number</label>
                                            <Input type="text" label="Engine Number" name='engine' {...register('engine')} />
                                        </div>
                                    </div>
                                    <div className='lg:flex'>
                                        <div className='mt-5 lg:pr-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Fuel Type</label>
                                            <Input type="text" label="Vehicle fuel" name='fuel_type' {...register('fuel_type')} />
                                        </div>
                                        <div className='mt-5 lg:pl-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Cylinder</label>
                                            <Input type="text" label="Vehicle Cylinder" name='cylinder' {...register('cylinder')} />
                                        </div>
                                    </div>
                                    <div className='lg:flex'>
                                        <div className='mt-5 lg:pr-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Color</label>
                                            <Input type="text" label="Color of Vehicle" name='color' {...register('color')} />
                                        </div>
                                        <div className='mt-5 lg:pl-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Vehicle Mileage</label>
                                            <Input type="text" label="Vehicle Milage" name='mileage' {...register('mileage')} />
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <label className='fs-500 mb-2 block'>Vehicle Location</label>
                                        <Input type="text" label="Location of Vehicle" name='transmission' {...register('transmission')} />
                                    </div>
                                    <div className='lg:flex'>
                                        <div className='mt-5 lg:pr-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Date of Purchase</label>
                                            <Input type="date" label="Color of Vehicle" name='date_purchase' {...register('date_purchase')} />
                                        </div>
                                        <div className='mt-5 lg:pl-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Vehicle Driver</label>
                                            <Input type="text" label="Vehicle Driver" name='driver' {...register('driver')} />
                                        </div>
                                    </div>
                                    <div className='lg:flex'>
                                        <div className='mt-5 lg:pr-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Vehicle Condition</label>
                                            <Input type="text" label="Condition of Vehicle" name='condition' {...register('condition')} />
                                        </div>
                                        <div className='mt-5 lg:pl-2 lg:w-6/12'>
                                            <label className='fs-500 mb-2 block'>Vehicle Image</label>
                                            <Input type="file"  name='image' {...register('image')} />
                                        </div>
                                    </div>
                                    <div className='text-end mt-6'>
                                        <button className='btn-primary lg:px-8' disabled={disableBtn}>Add New Vehicle</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <FaTimes className='absolute top-5 right-5 cursor-pointer' onClick={CloseModal}/>
                    </div>
                </div>
            )
        }
        {successful ? displayMessage(message) : ''}
    </div>
  )
}
