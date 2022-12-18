import { Header } from '@components/header'
import React from 'react'
import { CustomForm } from './customForm'
import { FormCategory } from './formOptions'
import styles from './styles.module.css'

const OrderPage = (): any => {
  return (
    <div className={styles.global_wrapper}>
      <Header />
      <h1 className={styles.title}>Realiza tu pedido</h1>
      <p className={styles.description}>Por favor selecciona los ingredientes de tu preferencia</p>
      <CustomForm>
        {/* @ts-expect-error Server Component */}
        <FormCategory />
      </CustomForm>
    </div>
  )
}

export default OrderPage
