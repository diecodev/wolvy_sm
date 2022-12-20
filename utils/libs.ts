import { Category } from '@prisma/client'
import prisma from 'utils/prisma'

type TGetIngredients = Array<{
  id: string
  name: string
  pricing: number
}>

export const getCategories = async (): Promise<Category[]> => {
  const data = await prisma.category.findMany({
    orderBy: {
      id: 'asc'
    }
  })

  return data
}

export const getIngredients = async (index: number): Promise<TGetIngredients> => {
  const data = await prisma.ingredient.findMany({
    select: {
      id: true,
      name: true,
      pricing: true,
      categoryId: true,
      publicId: true
    },
    where: {
      stock: {
        gt: 0
      },
      categoryId: index
    }
  })

  return data
}
