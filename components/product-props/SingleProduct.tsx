import Link from 'next/link'
import React from 'react'

const SingleProduct = ({item}: {item: any}) => {
  return (
    <div>
      <Link href={`/product/${item.slug}`}>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <img className="p-8 rounded-t-lg" src={item.image} alt="product image" />
            
            <div className="px-5 pb-5">
                    <h5 className="text-sm font-bold tracking-tight text-gray-900">{item.title}</h5>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gray-900">${item.price}</span>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-xs px-4 py-2 text-center">Add to cart</button>
                </div>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default SingleProduct