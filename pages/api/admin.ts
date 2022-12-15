// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma, Admin } from '@prisma/client'
import { generateCookie, parseCookie } from 'utils/cookie'
import prisma from 'utils/prisma'
import bcrypt from 'bcrypt'

interface loginSuccess {
  message: string
}

interface loginUnsuccess {
  error: string
}

/**
 * Handle login request from admin page
 *
 * @param req NextApiRequest
 * @param res NextApiResponse
 * @returns Promise<any>
 */
const handleLogin = async (req: NextApiRequest, res: NextApiResponse<loginSuccess | loginUnsuccess>): Promise<void> => {
  const { username, password } = req.body

  try {
    const admin = await prisma.admin.findUnique({ where: { username } })
    if (admin === null) {
      throw new Error('Incorrect username or password')
    }

    const isPasswordCorrect = await bcrypt.compare(password, admin.password)
    if (!isPasswordCorrect) {
      throw new Error('Incorrect username or password')
    }

    res.setHeader('Set-Cookie', await generateCookie(admin.id))
    return res.status(200).json({ message: 'Login success' })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientValidationError) {
      return res.status(401).json({ error: 'Incorrect username or password' })
    }

    if (error instanceof Error) {
      return res.status(401).json({ error: error.message })
    }

    return res.status(500).json({ error: 'Internal server error' })
  }
}

const searchAdmin = async (cookie: string): Promise<Partial<Admin>> => {
  const admin = await prisma.admin.findUnique({ where: { id: parseCookie(cookie) } }) as Partial<Admin>

  delete admin?.password
  delete admin.id

  return admin
}

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    await handleLogin(req, res)
  }

  if (req.method === 'GET') {
    const cookie = req.cookies.wlvtkn as string
    const admin = await searchAdmin(cookie)
    return res.status(200).json({ ...admin })
  }
}

export default handler
