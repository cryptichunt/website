import React from 'react'
import { ToastProvider } from 'react-toast-notifications'

import Layout from '../components/layout'
import { Heading } from '../components/Home/Landing'
import RegisterForm from '../components/Register/form'

const RegisterPage = () => {
  return (
    <Layout>
      <Heading style={{ margin: '25px 0' }}>Register</Heading>
      <ToastProvider>
        <RegisterForm />
      </ToastProvider>
    </Layout>
  )
}

export default RegisterPage
