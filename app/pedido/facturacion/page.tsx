'use client'
import { Header } from '@components/header'
import { IData } from 'index'
import { useSearchParams } from 'next/navigation'
import { ProductInfo } from './productInfo'
import styles from './styles.module.css'

const DeliveryData = (): React.ReactElement => {
  const searchParams = useSearchParams()
  const dataParam = searchParams.get('data') as string
  const delivery = searchParams.get('delivery') as string

  const decoded = JSON.parse(Buffer.from(dataParam, 'base64').toString('utf-8')) as IData[]

  return (
    <main className={styles.invoice_wrapper}>
      <Header />
      <article className={styles.order_details_wrapper}>
        <h3 className={styles.order_title}>Detalles de la orden</h3>
        <div className={styles.products_wrapper}>
          {
            decoded.map((item, index: number) => (
              <ProductInfo data={item} key={index} />
            ))
          }
        </div>
      </article>
    </main>
  )
}

export default DeliveryData
