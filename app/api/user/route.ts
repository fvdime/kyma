import { prisma } from "@/utils/prismadb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import * as z from 'zod'

//USER SCHEMA FOR AUTHENTICATION
const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email('Invalid Email'),
  password: z.string().min(1, 'Password is required'),

})
// }).refine((data) => data.password === data.confirmPassword,{
//   path: ['confirmPassword'],
//   message: "Password do not match"
// })
// confirmPassword: z.string().min(1, "Password confirmation is required")


export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, username, password } = userSchema.parse(body)

    const existingEmail = await prisma.user.findUnique({
      where: { email: email }
    })

    //CHECKING IF THE USER WITH THIS EMAIL IS EXISTS
    if (existingEmail) {
      return NextResponse.json({ user: null, message: "User with this email is already exists!" }, { status: 409 })
    }

    const existingUsername = await prisma.user.findUnique({
      where: { username: username }
    })

    //CHECKING IF THE USER WITH THIS USERNAME IS EXISTS
    if (existingUsername) {
      return NextResponse.json({ user: null, message: "User with this username is already exists!" }, { status: 409 })
    }

    //HASHING THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 12)

    //CREATING USER
    const newUser = await prisma.user.create({
      data: { username, email, hashedPassword }
    })
    
    //NOT SENDING PASSWORD 
    const { hashedPassword: newUserPassword, ...args } = newUser

    return new NextResponse(JSON.stringify({ user: args, message: 'User created successfully' }), { status: 201 })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
  }
}