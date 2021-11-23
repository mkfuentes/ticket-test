import React from 'react'
import './entryStyle.css'
import { LoginForm } from '../../components/login.comp'
import {Container} from 'react-bootstrap'

export const Entry = () => {
  return (
    <div className="entryPage bg-info">
      <Container>
      <LoginForm />
      </Container>
    </div>
  )
}
