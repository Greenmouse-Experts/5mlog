import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {

  return (
    <div>
        <div className='lg:pt-16 lg:pb-10 bg-footer bg-cover xl:bg-fit w-full'>
            <div className='box'>
                <div className='lg:flex justify-end text-center lg:text-left'>
                  <div className='lg:w-3/12 relative pt-6 lg:pt-0 lg:-top-6'>
                      <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1671792219/5mlog/logo-white_nxy7zm.png" alt="logo" className='lg:w-auto mx-auto w-44 ' />
                      <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237750_spbhv7.png" alt="logo" className='lg:w-44 w-36 mx-auto mt-8' />
                      <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669904665/5mlog/Group_237751_dqkaep.png" alt="logo" className='lg:w-44 w-36 mx-auto mt-2' />
                  </div>
                  <div className='lg:w-9/12 lg:flex justify-between text-white'>
                    <div className='lg:w-3/12 lg:ml-10 mt-10 lg:mt-0'>
                      <p className='fw-600 text-xl mb-6 mt-4'>Links</p>
                      <ul>
                        <li className='mb-4'><Link to="/">Home</Link></li>
                        <li className='mb-4'><Link to="/about">About Us</Link></li>
                        <li className='mb-4'><Link to="/services">Services</Link></li>
                        <li className='mb-4'><Link to="/faqs">FAQs</Link></li>
                        <li className='mb-4'><Link to="/contact">Contact Us</Link></li>
                      </ul>
                    </div>
                    <div className='lg:w-3/12  mt-10 lg:mt-0'>
                      <p className='fw-600 text-xl mb-6 mt-4'>Company Policy</p>
                      <ul>
                        <li className='mb-4'><Link to="/terms">Terms of Services</Link></li>
                        <li className='mb-4'><Link to="/privacy">Privacy Policy</Link></li>
                        <li className='mb-4'><Link to="/contact">Report an issue</Link></li>
                      </ul>
                    </div>
                    <div className='lg:w-5/12'>
                      <div>
                          <div>
                              <p className='lg:text-xl text-lg fw-600 mt-4 mb-6 lg:fw-600 text-center'>Newsletter</p>
                              <p  className='text-center fs-500 mt-2'>Be the first to get notified on our latest news and updates</p>
                          </div>
                          <div className='w-full flex mt-6 mx-auto rounded-lg bg-white shadow-lg px-1 lg:px-2 lg:py-2 py-1'>
                              <input type="text" placeholder="your Email" className="py-2 px-3 text-black bg-light lg:w-9/12 w-8/12"/>
                              <div className='w-4/12  pl-4'>
                                  <button className='w-full fs-500 fw-600 py-3 bg-primary text-white text-center'>Subscribe</button>
                              </div>
                          </div>
                          <div className='mt-8 flex justify-end'>
                            <ul className='flex items-center w-full justify-between w-5/12 lg:w-5/12'>
                              <li><a href='https://www.facebook.com/profile.php?id=100088570011053&mibextid=LQQJ4d' target='_blank' rel="noreferrer"><img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1674808835/5mlog/facebook_k3hzd5.png' alt='social' className='hover:scale-105 w-7 lg:w-auto'/></a></li>
                              <li><a href='https://www.instagram.com/5mlogistics/' target='_blank' rel="noreferrer"><img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1674808841/5mlog/insta_jzwq3z.png' alt='social' className='hover:scale-105 w-7 lg:w-auto'/></a></li>
                              <li><a href='https://twitter.com/5m_global' target='_blank' rel="noreferrer"><img src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1674808859/5mlog/twitter_kp3atw.png' alt='social' className='hover:scale-105 w-7 lg:w-auto'/></a></li>
                            </ul>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-6 border-t-2 text-center text-white fw-500 fs-500 pt-4 opacity-60'>
                  <p className='pb-6'>© {new Date().getFullYear() }  5M Logistics. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
