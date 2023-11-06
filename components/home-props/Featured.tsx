import React from 'react'
import SingleProduct from '../product-props/SingleProduct'
import { ProductType } from '@/types/types'

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/products", { cache: "no-store" })

  if (!response.ok) {
    throw new Error("failed!")
  }

  return response.json()
}


const Featured = async () => {

  const productData:ProductType = await getData()

  return (
    <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
      <div>
        <div className='mb-4'>
          <h1 className='uppercase font-bold'>Featured Products</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {productData.map((item, i) => (
            <SingleProduct key={i} item={item}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Featured