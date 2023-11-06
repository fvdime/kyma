import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>      
      <footer className="bg-white">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <hr className="my-4 border-gray-200 sm:mx-auto lg:my-6" />
            <div className="flex items-center justify-center">
                <span className="text-xs text-gray-500">© 2023 <Link href="/" className="hover:underline">Kyma™</Link>. All Rights Reserved.
                </span>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer