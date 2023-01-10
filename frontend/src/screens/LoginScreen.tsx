import React, { SyntheticEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch('http://localhost:8081/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    })

    window.location.href = '/'
  }

  return (
    <FormContainer>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="my-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" className='my-3'>
          Submit
        </Button>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen