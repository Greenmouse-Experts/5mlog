import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { BsTelephoneForward } from 'react-icons/bs'
import { ContactForm } from './forms/ContactForm'
import { Footer } from './home-comp/Footer'
import { Header } from './home-comp/Header'
import { Track } from './home-comp/Track'

export const Contact = () => {
  return (
    <div>
        <Header/>
         {/* contact us hero */}
         <div className='bg-contact lg:bg-fit bg-cover lg:h-80 h-44'>
            <div className='box h-full'>
                <div className='grid h-full items-center'>
                    <p className='lg:text-3xl text-xl fw-700 text-white'>Contact Us</p>
                </div>
            </div>
        </div>
        <div className='section pb-6'>
            <div className='box'>
                <div>
                    <p className='fw-600 text-2xl'>Office Address</p>
                    <div className='lg:grid-3s justify-between mt-6'>
                        <div className='p-5 shadow'>
                            <p className='mb-2 fw-500'>Houston Texas</p>
                            <p>9898 Bissonnet Street Houston Texas 77036 United States</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+1832 820 3994 </p>
                        </div>
                        <div className='p-5 mt-8 lg:mt-0 shadow'>
                            <p className='mb-2 fw-500'>Lagos Office</p>
                            <p>19 Omotola plaza, Afolabi Aina street, off Awolowo way Ikeja, Lagos state.</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2348060168209</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2349013272111 </p>
                        </div>
                        <div className='p-5 mt-8 lg:mt-0 shadow'>
                            <p className='mb-2 fw-500'>Abuja Office</p>
                            <p>Suite A4 Danziyal plaza Central Business District Abuja.</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2348060168209</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2349013272111 </p>
                        </div>
                        <div className='p-5 shadow mt-8'>
                            <p className='mb-2 fw-500'>Ogbomoso Office</p>
                            <p>3 D Place complex opposite Bovas filling station Aroje Area Ogbomoso Oyo state.</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2348060168209</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2349013272111 </p>
                        </div>
                        <div className='p-5 mt-8 shadow'>
                            <p className='mb-2 fw-500'>Kaduna Office</p>
                            <p>9 Ahafsusan Plaza Jos road by Ibadan street junction, Kaduna State.</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2348060168209</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2349013272111 </p>
                        </div>
                        <div className='p-5 mt-8 shadow'>
                            <p className='mb-2 fw-500'>Ikorodu Office</p>
                            <p>No. 49, Jesuloba Bus-Stop, Igbogbo Bayeku Road, Jitkok Event Centre, Lagos State.</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2348060168209</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2349013272111 </p>
                        </div>
                        <div className='p-5 mt-8 shadow'>
                            <p className='mb-2 fw-500'>Gabon Office</p>
                            <p>Libreville, Boulevard Du Bord De Mer Au Pk O Derriere La Station Engen.</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2348060168209</p>
                            <p className='flex items-center mt-2'><span className='pr-2'><BsTelephoneForward/></span><span className='pr-3 text-green-700'><FaWhatsapp/></span>+2349013272111 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='section'>
            <div className='box'>
                <div className='lg:flex lg:w-11/12 mx-auto border shadow '>
                    <div className='lg:w-7/12 lg:px-10 px-4 py-10'>
                        <p className='lg:text-2xl text-lg fw-600'>Get in touch</p>
                        <p className='py-4 lg:w-8/12'>Fill in the placeholders below with the appropriate information to keep in touch with us.</p>
                        <ContactForm/>
                    </div>
                    <div className='lg:w-5/12 flex items-center py-12 px-5 lg:py-0 lg:px-10 bg-contact2 lg:bg-fit bg-cover'>
                        <div className='text-white'>
                            <p className='lg:text-2xl text-lg fw-600'>Contact Information</p>
                            <p className='fs-500 py-6'>Reach us via the following links and information provided below.</p>
                            <div className='my-6'>
                                <p className='fw-600 text-lg'>Address</p>
                                <p className='fs-500 pt-4'>9898 Bissonnet Street Houston Texas 77036 United States.</p>
                                <p className='fs-500 pt-4'>19 Omotola plaza, Afolabi Aina street, off Awolowo way Ikeja, Lagos state.</p>
                            </div>
                            <div className='my-6'>
                                <p className='fw-600 text-lg'>Phone</p>
                                <p className='fs-500 pt-4'>+18328203994</p>
                                <p className='fs-500 pt-4'>+2348060168209</p>
                            </div>
                            <div className='my-6'>
                                <p className='fw-600 text-lg'>Email</p>
                                <p className='fs-500 pt-4'>info@5mlogistics.com</p>
                            </div>
                            <div className='mt-6'>
                                <ul className='flex text-xl'>
                                    <li><a href='https://www.facebook.com/profile.php?id=100088570011053&mibextid=LQQJ4d' target='_blank' rel="noreferrer"><img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1674808835/5mlog/facebook_k3hzd5.png' alt='social' className='hover:scale-105 w-6 lg:w-7'/></a></li>
                                    <li className='mx-4'><a href='https://www.instagram.com/5mlogistics/' target='_blank' rel="noreferrer"><img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1674808841/5mlog/insta_jzwq3z.png' alt='social' className='hover:scale-105  w-6 lg:w-7'/></a></li>
                                    <li><a href='https://twitter.com/5m_global' target='_blank' rel="noreferrer"><img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1674808859/5mlog/twitter_kp3atw.png' alt='social' className='hover:scale-105  w-6 lg:w-7'/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <Track/>
    </div>
  )
}
