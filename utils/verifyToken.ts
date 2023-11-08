import { NextResponse } from "next/server";
import * as jwt from 'jsonwebtoken'
import type { JwtPayload } from "jsonwebtoken";


export async function verifyToken(token: string, res:any) {
  try {
    const decoded = jwt.verify(token, res)

    return decoded
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({message: 'Token is not valid'}), {status: 405})
  }
}

// export async function tokenRefresh(refreshToken: string, res: any){
//   let decoded = ' '

//   try {
//     decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY)
//   } catch (error) {
//     console.log(error)
//     return new NextResponse(JSON.stringify({message: 'Can not refresh it. Token is not valid'}), {status: 401})
//   }
// }