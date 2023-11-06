import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='w-full md:w-1/2 h-screen relative'>
          <Image src='/handsomeboi.jpg' fill alt='' className='absolute object-cover'/>
        </div>
        <div className='flex flex-col items-start justify-start font-semibold w-full md:w-1/2'>
          <div className='pb-16'>
            <h1 className='uppercase text-lg'>product title</h1>
            <span className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus reiciendis similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus reiciendis similique.</span>
          </div>
          <div className='w-full flex items-center justify-between'>
            <h2>$599</h2>
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page