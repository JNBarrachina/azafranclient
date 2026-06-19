import { useState } from 'react'
import { Button, Input } from 'antd'

import type { AuthResponse } from '../../types'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginMessage, setLoginMessage] = useState('Introduce tu usuario y contraseña')

  const handleLogin = () => {
    fetch('http://localhost:8080/users/login', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
      .then(async (res) => {
        const data: AuthResponse = await res.json()
        if (res.status >= 400 && data.msg) {
          setLoginMessage(data.msg)
        } else {
          setLoginMessage('Login...')
          localStorage.setItem('accessToken', data.accessToken)
          window.location.href = '/dashboard'
        }
      })
  }

  return (
    <main>
      <article className="registerForm">
        <h1>Login</h1>
        <p>{loginMessage}</p>
        <Input
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="primary" onClick={handleLogin}>Login</Button>
      </article>
    </main>
  )
}
