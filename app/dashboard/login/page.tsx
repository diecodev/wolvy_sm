'use client'

import { useRouter } from 'next/navigation'
import styles from '@styles/login.module.css'
import React, { FormEvent, useState } from 'react'

const adminLogin = (): React.ReactElement => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    const username = e.currentTarget.username.value
    const password = e.currentTarget.password.value

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      if (res.ok) {
        router.refresh()
      }

      const error = await res.json().then((res) => res.error)
      setError(error)
    } catch (error) {
      setError('Error al iniciar sesión')
    }
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.error_log} ${error != null ? styles.error_message : ''}`}>{error}</div>
      <form className={styles.form} onSubmit={handleLogin}>
        <input className={styles.label} type='text' name='username' id='username' autoFocus placeholder='Usuario' />
        <input className={styles.label} type='password' name='password' id='password' placeholder='Contraseña' />
        <input className={styles.login_button} type='submit' value='Entrar' />
      </form>
    </div>
  )
}

export default adminLogin
