import styles from './styles.module.css'
import { FormOptions } from './ingredients'
import { getCategories, getIngredients } from 'utils/libs'

export const FormCategory = async (): Promise<React.ReactElement> => {
  const data = await getCategories()
  const ingredients = {
    1: await getIngredients(1),
    4: await getIngredients(4),
    5: await getIngredients(5),
    6: await getIngredients(6)
  }

  return (
    <>
      {data.map((category) => {
        return (
          <div key={category.id} className={styles.category_wrapper}>
            <h2 className={styles.category}>{category.name}</h2>
            {/* @ts-expect-error Server Component */}
            <FormOptions categoryName={category.name} ingredients={ingredients[category.id]} />
          </div>
        )
      })}
    </>
  )
}
