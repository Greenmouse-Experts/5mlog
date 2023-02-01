import { Button } from '@material-tailwind/react'
import axios from 'axios'
import dayjs from 'dayjs'
import React, {useState, useEffect} from 'react'
import { BsFillBookmarkCheckFill, BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FaCity, FaFlag } from 'react-icons/fa'
import { GiModernCity } from 'react-icons/gi'
import { MdOutlineAppRegistration, MdOutlineMarkEmailRead, MdSignalWifiStatusbar1Bar } from 'react-icons/md'
import { useLocation } from 'react-router'
import authHeader from '../../../../services/auth-header'
import { Spinner } from '../../../assets/Spinner'

export const UserDetails = () => {

    const { search } = useLocation();
    const userId = new URLSearchParams(search).get("userId");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchUserDetails = async () =>{
        try {
            setLoading(true);
            const url = `${process.env.REACT_APP_BASE_URL}/admin/get/user/${userId}`
            const response = await axios.get(url, { headers: authHeader() });
            const  data  = response.data.data
            setUser(data);
            setLoading(false);
            console.log(data);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUserDetails() // eslint-disable-next-line 
    }, [])
    if(loading){
        return <Spinner/>
    } 

  return (
    <div className='lg:mt-8 mt-4 px-3 min-h-screen fs-500'>
        <div className='lg:w-7/12 mx-auto lg:p-8 p-6 bg-white rounded-lg shadow-lg'>
            <div className='flex items-center'>
                <div className='w-3/12'>
                    <img src={user?.photo ? `${process.env.REACT_APP_MEDIA_URL+ user.photo}` : 'https://usg.usc.edu/wp-content/uploads/2022/07/Square-person-icon.png'}
                        alt="profifepic"
                        className='w-full rounded-lg'
                        />
                </div>
                <div className='w-8/12 pl-5'>
                    <p className='lg:text-xl fw-500'>{user?.first_name} {user?.last_name}</p>
                    <p>{user?.account_type}</p>
                </div>
            </div>
            <div className='lg:grid-2 justify-between mt-5 gap-5'>
                <div className='lg:py-6 py-4 shadow-md flex'>
                    <div className='text-primary grid place-content-center w-3/12 text-4xl'><MdOutlineMarkEmailRead/></div>
                    <div>
                        <p className='fw-500'>Email:</p>
                        <p>{user?.email}</p>
                    </div>
                </div>
                <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                    <div className='text-primary grid place-content-center w-3/12 text-4xl'><BsFillTelephoneForwardFill/></div>
                    <div>
                        <p className='fw-500'>Phone Number:</p>
                        <p>{user?.phone_number}</p>
                    </div>
                </div>
                <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                    <div className='text-primary grid place-content-center w-3/12 text-4xl'><MdOutlineAppRegistration/></div>
                    <div>
                        <p className='fw-500'>Register Date:</p>
                        <p>{dayjs(user?.email_verified_at).format('DD-MMM-YYYY')}</p>
                    </div>
                </div>
                <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                    <div className='text-primary grid place-content-center w-3/12 text-4xl'><MdSignalWifiStatusbar1Bar/></div>
                    <div>
                        <p className='fw-500'>Status:</p>
                        <p>{user?.status}</p>
                    </div>
                </div>
                <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                    <div className='text-primary grid place-content-center w-3/12 text-4xl'><FaCity/></div>
                    <div>
                        <p className='fw-500'>City:</p>
                        <p>{user?.city}</p>
                    </div>
                </div>
                <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                    <div className='text-primary grid place-content-center w-3/12 text-4xl'><GiModernCity/></div>
                    <div>
                        <p className='fw-500'>State:</p>
                        <p>{user?.state}</p>
                    </div>
                </div>
                <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                    <div className='text-primary grid place-content-center w-3/12 text-4xl'><FaFlag/></div>
                    <div>
                        <p className='fw-500'>Country:</p>
                        <p>{user?.country}</p>
                    </div>
                </div>
                <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                    <div className='text-primary grid place-content-center w-3/12 text-4xl'><BsFillBookmarkCheckFill/></div>
                    <div>
                        <p className='fw-500'>Referrer Id:</p>
                        <p>{user?.referral_code}</p>
                    </div>
                </div>
            </div>
            {
                    user?.account_type === "Driver"? 
                    <div className='lg:grid-2 justify-between mt-5 gap-5'>
                        <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                            <div className='text-primary grid place-content-center w-3/12 text-4xl'><BsFillBookmarkCheckFill/></div>
                            <div>
                                <p className='fw-500'>Type of service:</p>
                                <p>{user?.service_information?.type_of_service_render}</p>
                            </div>
                        </div>
                        <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                            <div className='text-primary grid place-content-center w-3/12 text-4xl'><BsFillBookmarkCheckFill/></div>
                            <div>
                                <p className='fw-500'>Preffered Route:</p>
                                <p>{user?.service_information?.preferred_route}</p>
                            </div>
                        </div>
                        <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                            <div className='text-primary grid place-content-center w-3/12 text-4xl'><BsFillBookmarkCheckFill/></div>
                            <div>
                                <p className='fw-500'>Account Name:</p>
                                <p>{user?.bank_information?.account_name}</p>
                            </div>
                        </div>
                        <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                            <div className='text-primary grid place-content-center w-3/12 text-4xl'><BsFillBookmarkCheckFill/></div>
                            <div>
                                <p className='fw-500'>Account Currency:</p>
                                <p>{user?.bank_information?.account_currency}</p>
                            </div>
                        </div>
                        <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                            <div className='text-primary grid place-content-center w-3/12 text-4xl'><BsFillBookmarkCheckFill/></div>
                            <div>
                                <p className='fw-500'>Bank Name:</p>
                                <p>{user?.bank_information?.bank_name}</p>
                            </div>
                        </div>
                        <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                            <div className='text-primary grid place-content-center w-3/12 text-4xl'><BsFillBookmarkCheckFill/></div>
                            <div>
                                <p className='fw-500'>Bank Address:</p>
                                <p>{user?.bank_information?.address}</p>
                            </div>
                        </div>
                        <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                            <div className='text-primary grid place-content-center w-3/12 text-4xl'><BsFillBookmarkCheckFill/></div>
                            <div>
                                <p className='fw-500'>Bank Account Number:</p>
                                <p>{user?.bank_information?.bank_account_number}</p>
                            </div>
                        </div>
                        <div className='lg:py-6 py-4 mt-6 lg:mt-0 shadow-md flex'>
                            <div className='text-primary grid place-content-center w-3/12 text-4xl'><BsFillBookmarkCheckFill/></div>
                            <div>
                                <p className='fw-500'>Routing Number:</p>
                                <p>{user?.bank_information?.routing_number}</p>
                            </div>
                        </div>
                    </div>
                    :
                    ""
                }
            <div className='mt-8 lg:mt-12 text-end'>
                <Button className='bg-primary lg:px-12'>Suspend user</Button>
            </div>
        </div>
    </div>
  )
}
