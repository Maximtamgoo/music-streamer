import React from 'react'
import './style/LoginPage.module.css'

const LoginPage = () => {

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const email = document.querySelector('#email').value
      const password = document.querySelector('#password').value
      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      console.log('data:', data)
    } catch (error) {
      console.log('handleSubmit error:', error)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />

        <button>Register</button>
      </form>
    </div>
  )
}

export default LoginPage