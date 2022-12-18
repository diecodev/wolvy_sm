import prisma from 'utils/prisma'
import styles from './styles.module.css'
import { Category } from '@prisma/client'

type TGetIngredients = Array<{
  id: string
  name: string
  pricing: number
}>

interface FormOptionsProps {
  index: number
  categoryName: string
}

const OrderPageData = async (): Promise<Category[]> => {
  const data = await prisma.category.findMany({
    orderBy: {
      id: 'asc'
    }
  })

  return data
}

const getIngredients = async (index: number): Promise<TGetIngredients> => {
  const data = await prisma.ingredient.findMany({
    select: {
      id: true,
      name: true,
      pricing: true
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

export const FormCategory = async (): Promise<React.ReactElement> => {
  const data = await OrderPageData()

  return (
    <>
      {data.map((category) => (
        <div key={category.id} className={styles.category_wrapper}>
          <h2 className={styles.category}>{category.name}</h2>
          {/* @ts-expect-error Server Component */}
          <FormOptions index={category.id} categoryName={category.name} />
        </div>
      ))}
    </>
  )
}

const FormOptions = async ({ index, categoryName }: FormOptionsProps): Promise<React.ReactElement> => {
  const data = await getIngredients(index)

  return (
    <>
      {data.map((ingredient) => {
        const id = ingredient.name.replaceAll(' ', '_') + categoryName
        const condition = index === 1 ? categoryName : id

        return (
          <label className={styles.ingredients_wrapper} key={ingredient.id}>
            <label className={styles.ingredient} htmlFor={id}>
              <p>
                {ingredient.name}
              </p>
              {
                index !== 4 && (
                  <p>
                    {ingredient.pricing}
                  </p>
                )
              }
            </label>
            {
              index === 1
                ? (
                  <input
                    type='radio'
                    id={id}
                    name={condition}
                    value={ingredient.name}
                    className={styles.r_button}
                  />
                  )
                : (
                  <input
                    type='checkbox'
                    id={id}
                    name={condition}
                    value={ingredient.name}
                    className={styles.r_button}
                  />
                  )
            }
          </label>
        )
      })}
    </>
  )
}
