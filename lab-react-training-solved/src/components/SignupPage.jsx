import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SignupPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nationality, setNationality] = useState('en')
  const [submittedEmail, setSubmittedEmail] = useState('')

  const greetings = {
    en: 'Hello',
    de: 'Hallo',
    fr: 'Bonjour',
  }

  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const isPasswordStrong = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])([A-Za-z\d@$!%*?&.]){8,}$/.test(
      password
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isEmailValid(email) && isPasswordStrong(password)) {
      setSubmittedEmail(email)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isValid={isEmailValid(email)}
          isInvalid={!isEmailValid(email) && email !== ''}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isValid={isPasswordStrong(password)}
          isInvalid={!isPasswordStrong(password) && password !== ''}
        />
        <Form.Control.Feedback type="invalid">
          Password must be at least 8 eight characters, at least one uppercase
          letter, one lowercase letter, one number and one symbol.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicSelect">
        <Form.Label>Nationality</Form.Label>
        <Form.Control
          as="select"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {submittedEmail && (
        <p>
          {greetings[nationality]}, your email is {submittedEmail}
        </p>
      )}
    </Form>
  )
}

export default SignupPage
