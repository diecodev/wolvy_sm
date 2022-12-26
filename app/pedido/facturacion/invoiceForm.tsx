'use client'

import { IData } from 'index'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { createOrder } from 'utils/client.libs'
import styles from './styles.module.css'

interface Props {
  data: IData[]
  delivery: string
}

export const InvoiceForm = ({ data, delivery }: Props): React.ReactElement => {
  const [message, setMessage] = useState({
    type: '',
    message: ''
  })
  const [disable, setDisable] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    setDisable(true)
    e.preventDefault()
    const { current } = formRef
    if (current === null) return
    const form = new FormData(e.currentTarget)

    const clientData = {
      customerName: form.get('name') as string,
      customerAddress: form.get('address') as string,
      whatsappNumber: form.get('whatsapp') as string,
      total: data.reduce((acc, curr) => acc + curr.price, 0)
    }

    const producstData = data.map(prod => ({
      principal: prod.principal.id,
      salsas: prod.salsas.map(salsa => salsa.id),
      extras: prod.extras.map(extra => extra.id),
      toppins: prod.toppins.map(topping => topping.id)
    }))

    const orderCreated = await createOrder({
      ...clientData,
      products: producstData
    })

    orderCreated
      ? setMessage({
        type: 'success',
        message: 'Pedido realizado con éxito'
      })
      : setMessage({
        type: 'error',
        message: 'Error al realizar el pedido'
      })

    setDisable(false)
    !!orderCreated && current.reset()
    !!orderCreated && router.push(`/pedido/${orderCreated as string}`)
  }

  return (
    <form className={styles.personal_data} ref={formRef} onSubmit={handleSubmit}>
      <h3>Datos personales</h3>
      <div className={styles[message.type]}>{message.message}</div>
      <input type='text' name='name' id='name' placeholder='Nombre' required autoFocus />
      <input type='tel' name='whatsapp' id='whatsapp' placeholder='WhatsApp' required min={300} maxLength={10} minLength={10} />
      {
        delivery === 'true' && (
          <>
            <input type='text' name='address' id='address' placeholder='Dirección' required />
          </>
        )
      }
      <input type='submit' value={disable ? 'Espere...' : 'Realizar pedido'} disabled={disable} />
    </form>
  )
}
