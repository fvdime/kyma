import { prisma } from "@/utils/prismadb"
import { NextRequest, NextResponse } from "next/server"

//SINGLE PRODUCT
export const GET = async (req: NextRequest, {params}: {params: { slug: string}}) => {

  const  {slug} = params
  
  try {
    const product = await prisma.product.findUnique({
      where: {
       slug: slug
      }
    })
    return new NextResponse(JSON.stringify(product), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
  }
}

//DELETE PRODUCT
export const DELETE = async (req: NextRequest, {params}: {params: { slug: string}}) => {

  const  {slug} = params
  
  try {
    await prisma.product.delete({
      where: {
       slug: slug
      }
    })
    return new NextResponse(JSON.stringify("product has been deleted"), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
  }
}