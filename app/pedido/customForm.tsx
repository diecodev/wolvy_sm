import styles from './styles.module.css'

interface ICustomFrom {
  children: React.ReactElement
}

export const CustomForm = ({ children }: ICustomFrom): React.ReactElement => {
  return (
    <form action='POST' className={styles.form}>
      {children}
    </form>
  )
}
