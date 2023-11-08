import { getUsers } from '@/actions/getUsers'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'

const UserTable = async ({ searchParams }: any) => {
  const query = searchParams?.query || ""
  const users = await getUsers(query)

  return (
    <div> 
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
          <div className="flex items-center justify-between pb-4">
              <SearchBar/>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="p-4">
                          <div className="flex items-center">
                              <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                          </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Role
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Created At
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr 
                  key={item.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                          <img className="w-10 h-10 rounded-full" src="/handsomeboi.jpg" alt="Jese image" />
                          <div className="pl-3">
                              <div className="text-base font-semibold">{item.username}</div>
                              <div className="font-normal text-gray-500">{item.email}</div>
                          </div>  
                      </th>
                      <td className="px-6 py-4">
                          {item.isAdmin ? "Admin" : "Client"}
                      </td>
                      <td className="px-6 py-4 font-normal text-gray-500">
                          {item.createdAt.toString().slice(4, 16)}
                      </td>
                      <td className="px-6 py-4">
                          <Link href={`/user/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                          <Link href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ml-4">Delete</Link>
                      </td>
                  </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default UserTable