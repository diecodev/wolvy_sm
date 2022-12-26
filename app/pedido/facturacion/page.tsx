'use client'
import { Header } from '@components/header'
import { IData } from 'index'
import { useSearchParams } from 'next/navigation'
import { InvoiceForm } from './invoiceForm'
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
      <InvoiceForm delivery={delivery} data={decoded} />
      <article className={styles.order_details_wrapper}>
        <h3 className={styles.order_title}>Detalles de la orden</h3>
        <div className={styles.products_wrapper}>
          <ProductInfo data={decoded} />
        </div>
      </article>
    </main>
  )
}

export default DeliveryData
