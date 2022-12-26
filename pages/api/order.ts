// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CreateOrderProps } from 'index'
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'utils/prisma'

const createOrder = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { customerName, products, whatsappNumber, customerAddress, total } = req.body as CreateOrderProps

  const order = await prisma.invoice.create({
    data: {
      customerName,
      total,
      whatsappNumber,
      customerAddress,
      Product: {
        create: products.map(({ principal, salsas, toppins, extras }) => ({
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
        }))
      }
    },
    select: {
      id: true
    }
  })

  res.status(200).json(order)
}

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    await createOrder(req, res)
  }
}

export default handler
