import { IData } from 'index'
import styles from './styles.module.css'

export const ProductInfo = ({ data }: { data: IData[] }): React.ReactElement => {
  return (
    <>
      {
        data.map((item: IData, index: number) => {
          const { extras, principal, salsas, toppins, price } = item
          const COP = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            maximumFractionDigits: 0
          })

          return (
            <div key={index} className={styles.product_details}>
              <div className={styles.product_title}>
                <h4>Cono Wolvy #{index + 1}</h4>
                <span>{COP.format(price)}</span>
              </div>
              <div className={styles.products_selected}>
                <h6 className={styles.principal_ingredient}>- {principal.name}</h6>
                <span>
                  {salsas.length !== 0 && salsas.map((salsa, index) => (
                    <p key={index}>+ {salsa.name}</p>
                  ))}
                </span>
                <span>
                  {toppins.length !== 0 && toppins.map((toppin, index) => (
                    <p key={index}>+ {toppin.name}</p>
                  ))}
                </span>
                <span>
                  {extras.length !== 0 && extras.map((extra, index) => (
                    <p key={index}>+ {extra.name}</p>
                  ))}
                </span>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
