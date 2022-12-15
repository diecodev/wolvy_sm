import { SignJWT, decodeJwt } from 'jose'
import { serialize } from 'cookie'
import { JWTSECRET } from './constants'
import { Admin } from '@prisma/client'

export const generateCookie = async (id: string): Promise<string> => {
  const jwt = await new SignJWT({ id }).setProtectedHeader({ alg: 'HS256' }).sign(JWTSECRET)

  const cookie = serialize('wlvtkn', jwt, {
    httpOnly: true,
    path: '/',
    expires: new Date(Date.now() + 60 * 60 * 12 * 1000),
    sameSite: 'strict',
    priority: 'high',
    secure: process.env.NODE_ENV === 'production'
  })

  return cookie
}

export const parseCookie = (cookie: string): string => {
  const { id } = decodeJwt(cookie) as Admin
  return id
}
