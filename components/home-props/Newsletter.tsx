import React from 'react'

const Newsletter = () => {
  return (
    <div>   
      <section className="bg-gray-50">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="flex flex-col justify-center">
                  <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">We invest in the world potential</h1>
                  <p className="mb-6 text-sm font-normal text-gray-500 lg:text-xl ">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                  <a href="#" className="text-blue-600 hover:underline font-medium text-sm inline-flex items-center">Read more about our app </a>
              </div>
              <div>
                  <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
                      <h2 className="text-2xl font-bold text-gray-900 ">
                          Sign in to Flowbite
                      </h2>
                      <form className="mt-8 space-y-6" action="#">
                          <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
                          </div>
                          <button type="submit" className="w-full px-4 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto">Login to your account</button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Newsletter