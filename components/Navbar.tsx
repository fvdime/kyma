import { CategoryType } from '@/types/types'
import Link from 'next/link'
import React from 'react'

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/categories", { cache: "no-store" })

  if (!response.ok) {
    throw new Error("failed!")
  }

  return response.json()
}

const Navbar = async () => {

  const catData:CategoryType = await getData()

  return (
    <div className='fixed w-full z-20 top-0 left-0'>
      <nav className="bg-white border-gray-200">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 py-1">
              <Link href="/" className="flex items-center">
                  <span className="self-center text-lg font-bold whitespace-nowrap">Kyma</span>
              </Link>
              <div className="flex items-center">
                  {/* <Link href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</Link> */}
                  <Link href="#" className="text-xs  text-blue-600 hover:underline">Login</Link>
              </div>
          </div>
      </nav>
      <nav className="bg-gray-50">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <div className="flex items-center">
                  <ul className="flex flex-row font-semibold mt-0 mr-6 space-x-8 text-xs">
                    {catData.map((item) => (
                      <li key={item.id}>
                          <Link href={`/${item.slug}`} className="text-gray-900 hover:underline">{item.title}</Link>
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar