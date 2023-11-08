import jwt from 'jsonwebtoken'

type user = {
  username: string,
  email: string,
  password: string,
  hashedPassword: string
}

export function generateAccessToken(user: user){
  return jwt.sign(
    { ...user },
    process.env.ACCESS_TOKEN_KEY as string,
    {
      expiresIn: "1h"
    }
  )
}

export function generateRefreshToken(user: user){
  return jwt.sign(
    { ...user },
    process.env.REFRESH_TOKEN_KEY as string,
    {
      expiresIn: "30d"
    }
  )
}