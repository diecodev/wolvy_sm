'use client'

import styles from './styles.module.css'
import { useRef, useState } from 'react'
import { createFormData } from 'utils/client.libs'
import { useRouter } from 'next/navigation'
import { IFormData } from 'index'
interface ICustomFrom {
  children: React.ReactElement
}

export const CustomForm = ({ children }: ICustomFrom): React.ReactElement => {
  const [quantity, setQuantity] = useState(1)
  const [data, setData] = useState<IFormData[]>([])
  const [count, setCount] = useState(1)
  const [delivery, setDelivery] = useState(false)
  const ref = useRef<HTMLFormElement>(null)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const { current } = ref
    if (current === null) return

    if (count < quantity) {
      setData((prev) => [...prev, createFormData(current)])
      setCount((prev) => prev + 1)
      e.currentTarget.reset()
      return
    }

    if (count === quantity) {
      const missingData = createFormData(current)
      const dataParam = Buffer.from(JSON.stringify([...data, missingData])).toString('base64')
      router.push(`/pedido/facturacion?data=${dataParam}&delivery=${delivery ? 'true' : ''}`)
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
          <label htmlFor='delivery' className={styles.delivery_label} onClick={() => setDelivery(prev => !prev)}>
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
