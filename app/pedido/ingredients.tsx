'use client'

import { Ingredient } from '@prisma/client'
import styles from './styles.module.css'

interface FormOptionsProps {
  ingredients: Ingredient[]
  categoryName: string
}

export const FormOptions = ({ ingredients, categoryName }: FormOptionsProps): React.ReactElement => {
  return (
    <>
      {ingredients.map((ingredient) => {
        const id = `${categoryName}-${ingredient.name.replaceAll(' ', '_')}-${ingredient.publicId.toString()}`

        return (
          <label className={styles.ingredients_wrapper} key={ingredient.id} htmlFor={categoryName}>
            <input
              type='checkbox'
              id={id}
              name={id}
              value={ingredient.name}
              className={styles.r_button}
            />
            <label className={styles.ingredient} htmlFor={id}>
              <span>
                <span>
                  {ingredient.name}
                </span>
                <span>
                  {ingredient.pricing !== 0 ? ` - $${ingredient.pricing}` : ''}
                </span>
              </span>
              <div className={styles.r_button_div} />
            </label>
          </label>
        )
      })}
    </>
  )
}
