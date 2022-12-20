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
  [key: string]: TOptions | TOptions[]
}

interface IData {
  principal: TOptions
  salsas: TOptions[]
  toppins: TOptions[]
  extras: TOptions[]
}
