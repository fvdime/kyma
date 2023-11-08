import { prisma } from "@/utils/prismadb"

export const getUsers = async (query: string) => {

  // const regex = new RegExp(query, 'i')
  // { 
  //   where: {username:{$regex:regex}}
  // }
  try {
    const users = await prisma.user.findMany()
    return users
  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch users")
  }
}