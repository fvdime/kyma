import DeleteButton from '@/components/DeleteButton';
import { ProductType } from '@/types/types';
import Image from 'next/image'
import React from 'react'

const getData = async (slug:string)=>{
  // console.log(catName)
  const res = await fetch(`http://localhost:3000/api/products/${slug}`,{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}

type Props = {
  params:{slug:string}
}


const page = async ({params}:Props) => {

  // console.log(params)

  const singleProduct:ProductType = await getData(params.slug)

  // console.log(singleProduct)

  return (
    <div className='max-w-screen-xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
        <div className='w-full md:w-1/2 h-screen relative'>
        {singleProduct.image ?
          <Image src={singleProduct.image} fill alt='' className='absolute object-cover'/>
          :
          <Image src='/handsomeboi.jpg' fill alt='' className='absolute object-cover'/>
        }
        </div>
        <div className='flex flex-col items-start justify-start font-semibold w-full md:w-1/2'>
          <div className='pb-16'>
            <h1 className='uppercase text-lg'>{singleProduct.title}</h1>
            <span className='text-sm'>{singleProduct.desc}</span>
          <DeleteButton slug={singleProduct.slug}/>
          </div>
          <div className='w-full flex items-center justify-between'>
            <h2>${singleProduct?.price}</h2>
            <button>add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page