import React, { SyntheticEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';


const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const submitHandler = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("SUBMITTED");
    await fetch('http://localhost:8081/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password
      })
    })

    window.location.href = '/login'
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="firstName" placeholder="Enter your first name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)} />
        </Form.Group>

        <Form.Group className="my-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="lastName" placeholder="Enter your last name"
            value={lastName}
            onChange={e => setLastName(e.target.value)} />
        </Form.Group>

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

export default SignupScreen