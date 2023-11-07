import { ProductType } from '@/types/types'
import Link from 'next/link'
import React from 'react'

const getData = async (catName:string)=>{
  // console.log(catName)
  const res = await fetch(`http://localhost:3000/api/products?cat=${catName}`,{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}

type Props = {
  params:{catName:string}
}

const CategoryPage = async ({params}:Props) => {
  // console.log(params)

  const products:ProductType[] = await getData(params.catName)

  // console.log(products)
  return (
    <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
      <div>
        <div className='mb-4'>
          <h1 className='uppercase font-bold'>Featured Products</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {products.map((item) => (
            <div key={item.id}>
              {/* <Link href={`/product/${item.slug}`}> */}
                {/* <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <img className="p-8 rounded-t-lg" src={item.image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-sm font-bold tracking-tight text-gray-900">{item.title}</h5>
                        </a>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-xl font-bold text-gray-900">${item.price}</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-xs px-4 py-2 text-center">Add to cart</a>
                        </div>
                    </div>
                </div> */}
                <div>
                  {item.title}
                  {item.price}
                </div>
              {/* </Link> */}
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage