import { IData } from 'index'
import styles from './styles.module.css'

export const ProductInfo = ({ data }: { data: IData }): React.ReactElement => {
  return (
    <div className={styles.product_details_wrapper}>
      <h4 className={styles.product_category}>Principal</h4>
      <ul className={styles.product_ingredient_wrapper}>
        <li className={styles.product_ingredient}>{data.principal.name}</li>
      </ul>
      <h4 className={styles.product_category}>Salsas</h4>
      <ul className={styles.product_ingredient_wrapper}>
        {data.salsas.map((salsa) => <li key={salsa.id} className={styles.product_ingredient}>{salsa.name}</li>)}
      </ul>
      <h4 className={styles.product_category}>Toppins</h4>
      <ul className={styles.product_ingredient_wrapper}>
        {data.toppins.map((toppin) => <li key={toppin.id} className={styles.product_ingredient}>{toppin.name}</li>)}
      </ul>
      <h4 className={styles.product_category}>Extras</h4>
      <ul className={styles.product_ingredient_wrapper}>
        {data.extras.map((extra) => <li key={extra.id} className={styles.product_ingredient}>{extra.name}</li>)}
      </ul>
    </div>
  )
}
