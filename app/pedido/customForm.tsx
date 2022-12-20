'use client'

import styles from './styles.module.css'
import { useRef, useState } from 'react'
import { createFormData, createOrder, IFormData } from 'utils/client.libs'
interface ICustomFrom {
  children: React.ReactElement
}

export const CustomForm = ({ children }: ICustomFrom): React.ReactElement => {
  const [quantity, setQuantity] = useState(1)
  const [data, setData] = useState<IFormData[]>([])
  const [count, setCount] = useState(1)
  const ref = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (count < quantity) {
      setData((prev) => [...prev, createFormData(ref.current as HTMLFormElement)])
      setCount((prev) => prev + 1)
      ref.current?.reset()
      return
    }

    if (count === quantity) {
      await createOrder([...data, createFormData(ref.current as HTMLFormElement)])
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} ref={ref}>
      <div className={styles.form_header}>
        <div className={styles.quantity_wrapper}>
          <button
            type='button'
            onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : prev)}
            className={styles.quantity_button}
          >
            -
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button
            type='button'
            onClick={() => setQuantity((prev) => prev + 1)}
            className={styles.quantity_button}
          >
            +
          </button>
        </div>

        <div className={styles.delivery_wrapper}>
          <input
            type='checkbox'
            name='domicilio'
            id='delivery'
            value='domicilio'
          />
          <label htmlFor='delivery' className={styles.delivery_label}>
            <span className={styles.delivery}>Domicilio</span>
            <span className={styles.toggle_button} />
          </label>
        </div>
      </div>
      {children}
      <input type='submit' className={styles.final_button} value={count < quantity ? 'Siguiente Wolvy' : 'Ir a factura'} />
    </form>
  )
}
