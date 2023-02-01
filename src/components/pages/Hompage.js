import React from 'react'
// import { BsArrowRightShort } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { FiLayers } from 'react-icons/fi'
import { TbTruckDelivery } from 'react-icons/tb'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'
import { HeroSwipe } from './home-comp/HeroSwipe'
import Review from './home-comp/Review'
import { Track } from './home-comp/Track'

export const Hompage = () => {

  return (
    <div>
        <div className='font-primary'>
            <Header/>
            {/* hero banner */}
            <div className='relative'>
                <HeroSwipe/>
            </div>
            {/* about us */}
            <div className='section bg-process lg:bg-fit'>
                <div className='box'>
                    <div className='lg:w-11/12 mx-auto lg:flex items-center flex-row-reverse'>
                        <div className='lg:w-6/12'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904736/5mlog/Group_237745_xdhv41.png" alt="img" className='w-9/12 mx-auto'/>
                        </div>
                        <div className='lg:w-6/12'>
                            <p className='lg:text-2xl text-lg fw-600 lg:fw-700'>About Us</p>
                            <div className='mt-8'>
                                <p>5M Logistics is a subsidiary of 5M global services whose goal is to provide top notch services in Freight, transportation and delivery to clients and users globally hereby boosting businesses and increasing sales and exchange between users worldwide.</p>
                                <p className='mt-4'>We offer wide range of services which includes logistics, freights, warehousing, procurements, export packaging and express shipping to clients in different part of the world.</p>
                                <button className='mt-4 lg:mt-8 text-primary fw-600'>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section bg-stats bg-cover bg-center'>
                <div className='box'>
                    <div>
                        <p className='lg:text-2xl text-lg fw-600 lg:fw-700 text-center text-white'>Stats and Recent Accomplishments.</p>
                        <div className='lg:grid-3s justify-between mt-10 lg:mt-16'>
                            <div className='flex items-center justify-center bg-white lg:p-6 xl:px-12 p-3 rounded-lg'>
                                <TbTruckDelivery className='text-7xl'/>
                                <p className='fw-600 text-2xl ml-4'>4000+</p>
                                <div className='ml-4 mt-1 fs-700'>
                                    <p>Deliveries</p>
                                    <p className='relative -top-1'>Worldwide</p>
                                </div>
                            </div>
                            <div className='flex mt-6 lg:mt-0 items-center justify-center bg-white p-3 lg:p-6 xl:px-12 rounded-lg'>
                                <FaUsers className='text-7xl'/>
                                <p className='fw-600 text-2xl ml-4'>3100+</p>
                                <div className='ml-4 mt-1 fs-700'>
                                    <p>Satisfied</p>
                                    <p className='relative -top-1'>Clients</p>
                                </div>
                            </div>
                            <div className='flex mt-6 lg:mt-0 p-3 items-center justify-center bg-white lg:p-6 xl:px-12 rounded-lg'>
                                <FiLayers  className='text-7xl'/>
                                <p className='ml-4 mt-1 text-2xl fw-600'>1200+</p>
                                <div className='ml-4 mt-1 fs-700'>
                                    <p>Orders</p>
                                    <p className='relative -top-1'>Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* what we do */}
            <div className='section'>
                <div className='box lg:pt-12'>
                    <div className='lg:flex items-center'>
                        <div className='lg:w-4/12 lg:px-2'>
                            <p className='lg:text-2xl text-xl fw-600 lg:fw-700'>What we Do</p>
                            <div className='mt-8'>
                                <div className='flex'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671232225/5mlog/icons8-box-64_s0pdzn.png" alt="wwd" className='w-9' />
                                    </div>
                                    <div  className='w-10/12'>
                                        <p className='fw-600'>Logistics</p>
                                        <p className='fs-500'>We take care of the end-to-end logistics of your business so you can focus on your core business operation.</p>
                                    </div>
                                </div>
                                <div className='flex mt-6'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904666/5mlog/Rectangle_19547_cuxzyk.png" alt="wwd" />
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='fw-600'>Air Freights</p>
                                        <p className='fs-500'>We handle both your international freight forwarding and domestic delivery via air shipping.</p>
                                    </div>
                                </div>
                                <div className='flex mt-6'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Rectangle_19548_eyiogp.png" alt="wwd" />
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='fw-600'>Ocean Freights</p>
                                        <p className='fs-500'>We offer expedited shipping of cargo and courier packages.</p>
                                    </div>
                                </div>
                                <div className='flex mt-6'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671232225/5mlog/icons8-warehouse-64_jke4un.png" alt="wwd" className='w-9 '/>
                                    </div>
                                    <div  className='w-10/12'>
                                        <p className='fw-600'>Warehousing</p>
                                        <p className='fs-500'>We provide safe warehouse management services to protect your goods in the meantime.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-4/12 lg:px-2'>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904755/5mlog/Group_237727_pbqshc.png" alt="wwd" className='w-full hidden lg:block lg:w-10/12 mx-auto' />
                            <div className='flex mt-6 lg:mt-10'>
                                <div className='w-2/12 grid place-content-center'>
                                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671232225/5mlog/icons8-container-64_aiv1tf.png" alt="wwd" className='w-12' />
                                </div>
                                <div  className='w-10/12 mt-6'>
                                    <p className='fw-600'>Door to Door Delivery</p>
                                    <p className='fs-500'>We pickup packages at designated addresses and deliver directly to the destination selected.</p>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-4/12 lg:mt-3 lg:px-2'>
                            {/* <p className='lg:text-2xl text-xl fw-600 lg:fw-700'>What we Do</p> */}
                            <div className='mt-8'>
                                <div className='flex'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671232225/5mlog/icons8-logistics-64_tnd1nb.png" alt="wwd" className="w-9" />
                                    </div>
                                    <div className='w-10/12'>
                                        <p className='fw-600'>Procurements</p>
                                        <p className='fs-500'>We offer easy and cost-effective way to help do your procurement.</p>
                                    </div>
                                </div>
                                <div className='flex mt-6'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671232588/5mlog/icons8-package-48_y1bmgi.png" alt="wwd" className="w-9" />
                                    </div>
                                    <div  className='w-10/12'>
                                        <p className='fw-600'>Export Packaging</p>
                                        <p className='fs-500'>You can trust us to ensure your goods arrive intact and undamaged at its intended destination.</p>
                                    </div>
                                </div>
                                <div className='flex mt-6'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671232225/5mlog/icons8-deliveryman-48_rmosxw.png" alt="wwd" className="w-9" />
                                    </div>
                                    <div  className='w-10/12'>
                                        <p className='fw-600'>Same-Day Delivery</p>
                                        <p className='fs-500'>We Provide relaible, quality and affordable daily delivery of your goods and products.</p>
                                    </div>
                                </div>
                                <div className='flex mt-6'>
                                    <div className='w-2/12 grid place-content-center'>
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671232225/5mlog/icons8-express-delivery-64_huvyzx.png" alt="wwd" className="w-10" />
                                    </div>
                                    <div  className='w-10/12'>
                                        <p className='fw-600'>Express Shipping</p>
                                        <p className='fs-500'> We offer quick delivery, ranging from same day to three-day delivery, depending upon the store and your geographic location.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* the process */}
            <div className='section bg-process lg:bg-fit'>
                <div className='box'>
                    <div>
                        <div>
                            <p  className='lg:text-2xl text-xl fw-600 lg:fw-700 text-center'>The Process</p>
                            <p className='lg:w-6/12 mx-auto text-center fs-500 mt-2'>We have created a seamless process that you can follow to receive your orders and the process is explained below.</p>
                        </div>
                        <div className='mt-8 lg:mt-12 lg:grid-3 justify-evenly'>
                            <div className='text-center bg-white shadow-md lg:py-12 py-6 px-5'>
                                <Link to='/signup'>
                                    <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237747_mriujj.png' alt="process" className='mx-auto w-20' />
                                    <p className='my-6 fs-700 fw-600'>Sign Up</p>
                                    <p className='fs-500'>Provide your needed information and sign up to 5M Logistics.</p>
                                </Link>
                            </div>
                            <div className='text-center bg-white mt-6 lg:mt-0 shadow-md lg:py-12 py-6 px-5'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237748_qdcoyz.png' alt="process" className='mx-auto w-20' />
                                <p className='my-6 fs-700 fw-600'>Select a Service</p>
                                <p className='fs-500'>Select a service and fill in the required information for your delivery.</p>
                            </div>
                            <div className='text-center bg-white mt-6 lg:mt-0  shadow-md lg:py-12 py-6 px-5'>
                                <img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237746_e8x861.png' alt="process" className='mx-auto w-20' />
                                <p className='my-6 fs-700 fw-600'>Await your Delivery</p>
                                <p className='fs-500'>Relax and await your delivery whilst tracking your goods via a tracking id provided for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* reviws */}
            <div className='section'>
                <div className='box'>
                    <div className='lg:flex items-center lg:mb-16'>
                        <div className='lg:w-5/12 text-center'>
                            <p className='fs-400 text-gray-500'>Our Testimonials</p>
                            <p className='lg:text-2xl text-xl fw-600 mb-6'>What are our customers saying</p>
                            <p>Join thousands of people today who make use of services to enjoy seamless and hassle-free logistic services.</p>
                        </div>
                        <div className='lg:w-7/12 w-full overflow-hidden mt-10 lg:mt-0'>
                            <Review/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <Track/>
        </div>
    </div>
  )
}
