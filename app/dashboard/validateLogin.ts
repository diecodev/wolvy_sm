import { cookies } from 'next/headers'
import { Admin } from '@prisma/client'
import { baseURL } from 'utils/constants'

interface IToken {
  name: string
  value: string
}

export const dashboardData = async (): Promise<Admin | undefined> => {
  const nextCookies = cookies()
  const token = nextCookies.get('wlvtkn') as IToken

  const res = await fetch(`${baseURL}/api/admin`, {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      cookie: `${token.name}=${token.value}`
    }
  })

  if (res.ok) {
    const data = await res.json() as Admin
    return data
  }

  return undefined
}
