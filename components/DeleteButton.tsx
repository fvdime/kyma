"use client"

import axios from "axios"
import { useRouter } from "next/navigation"


const DeleteButton = ({slug}: {slug: string}) => {

  const router = useRouter()

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/products/${slug}`)
      console.log("product deleted")
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button 
    onClick={handleDelete}
    className="bg-red-400 p-2 rounded-xl">delete</button>
  )
}

export default DeleteButton