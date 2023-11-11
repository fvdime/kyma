import getToken from "@/utils/getToken"
import { prisma } from "@/utils/prismadb"
import { verifyToken } from "@/utils/verifyToken"

export const getUsers = async (query: string) => {
  // const regex = new RegExp(query, 'i')
  // { 
  //   where: {username:{$regex:regex}}
  // }
  try {

    // const token = getToken()
    // console.log(token)

    // const verify = verifyToken(token as string, process.env.ACCESS_TOKEN_KEY)
    // console.log(verify)

    // if (!verify) {
    //   throw new Error("U r not authenticated!")
    // } else {
    //   const users = await prisma.user.findMany()
    //   return users
    // }
    const users = await prisma.user.findMany()
    return users

  } catch (error) {
    console.log(error)
    throw new Error("Failed to fetch users")
  }
}