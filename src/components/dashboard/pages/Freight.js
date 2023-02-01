import React from 'react'
import { FreightForm } from './Freight/Form'

export const Freight = () => {
  return (
    <div className='min-h-screen'>
        <div className='h-44 bg-freight bg-center bg-cover  text-white w-full bg-white flex items-center'>
            <div className='lg:pl-12 px-4'>
                <p className='fw-600 text-xl lg:text-2xl'>Freight Services</p>
                <p className='mt-2 lg:w-8/12 fs-400 lg:fs-600'>Delivery is possible within 5-7 business days at your door-step. Please fill the form and select the most suitable process for your item(s)</p>
            </div>
        </div>
        {/* content */}
        <div className='mt-6 lg:p-5 px-3 mx-auto'>
            <div className='bg-white lg:w-10/12 p-5 mx-auto mt-8 lg:p-10 rounded-lg'>
                <FreightForm/>
            </div>
        </div>
    </div>
  )
}
