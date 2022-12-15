import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
import { JWTSECRET } from 'utils/constants'

export const config = {
  matcher: ['/dashboard/:path*']
}

const middleware = async (req: NextRequest): Promise<NextResponse | undefined> => {
  const url = new URL(req.url)

  if (url.pathname.startsWith('/dashboard')) {
    if (req.nextUrl.pathname === '/api/admin' && req.method === 'POST') {
      return NextResponse.next()
    }

    const { cookies } = req
    const jwt = cookies.get('wlvtkn')

    try {
      if (jwt == null) throw new Error('No JWT found')
      await jwtVerify(jwt.value, JWTSECRET)

      return url.pathname === '/dashboard/login'
        ? NextResponse.rewrite(new URL('/dashboard', req.url))
        : NextResponse.next()
    } catch (error) {
      return NextResponse.rewrite(new URL('/dashboard/login', req.url))
    }
  }
}

export default middleware
