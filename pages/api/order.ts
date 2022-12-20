// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'utils/prisma'

interface IFormData {
  principal: number
  salsas: number[]
  toppins: number[]
  extras: number[]
}

const createOrder = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { principal, salsas, toppins, extras } = req.body as IFormData

  const order = await prisma.invoice.create({
    data: {
      customerName: 'John Doe',
      total: 0,
      whatsappNumber: '1234567890',
      Product: {
        create: {
          IngredientProduct: {
            createMany: {
              data: [
                {
                  ingredientId: principal
                },
                ...salsas.map((salsa: number) => ({
                  ingredientId: salsa
                })),
                ...toppins.map((toppin: number) => ({
                  ingredientId: toppin
                })),
                ...extras.map((extra: number) => ({
                  ingredientId: extra
                }))
              ]
            }
          }
        }
      }
    },
    select: {
      Product: {
        include: {
          IngredientProduct: {
            include: {
              ingredient: {
                select: {
                  name: true,
                  category: true
                }
              }
            }
          }
        }
      }
    }
  })

  res.status(200).json({ order })
}

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    await createOrder(req, res)
  }
}

export default handler
