import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}

interface TOptions {
  name: string
  id: number
}
interface IFormData {
  [key: string]: TOptions | TOptions[] | number
}

interface IData {
  principal: TOptions
  salsas: TOptions[]
  toppins: TOptions[]
  extras: TOptions[]
  price: number
}

interface ApiOrderProps {
  principal: number
  salsas: number[]
  toppins: number[]
  extras: number[]
}

interface CreateOrderProps {
  customerName: string
  customerAddress?: string
  whatsappNumber: string
  total: number
  products: ApiOrderProps[]
}
