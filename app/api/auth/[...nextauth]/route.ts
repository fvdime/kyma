//NOT WORKING WELL
//TOKENS HAVE SUM BUG (NEXT AUTH TOKEN IS INVALID IDK WHY THO)

import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}