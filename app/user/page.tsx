import UserForm from '@/components/forms/UserForm'
import UserTable from '@/components/tables/UserTable'
import React from 'react'

const UserPage = ({ searchParams }: any) => {
  return (
    <div className='bg-gray-900 h-full w-full'>
      <UserTable searchParams={searchParams}/>
      <UserForm/>
    </div>
  )
}

export default UserPage