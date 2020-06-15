import React from 'react'
import { ToastProvider } from 'react-toast-notifications'

import SEO from '../components/seo'
import RegisterForm from '../components/registerForm'

const RegisterPage = () => {
  return (
    <>
      <SEO title="Register" />
      <ToastProvider>
        <RegisterForm />
      </ToastProvider>
    </>
  )
}

export default RegisterPage
