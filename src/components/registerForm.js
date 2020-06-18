import React, { useState } from 'react'
import styled from 'styled-components'
import Recaptcha from 'react-google-recaptcha'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { navigate } from '@reach/router'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import Layout from './layout'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: bottom;
`

const Input = styled.input`
  max-width: 45%;
  padding: 15px 20px;
  border: 2px solid #545454;
  border-radius: 3px;
  outline: none;
  color: #eee;
  margin: 10px 0;
  background: #23272a;
  &::placeholder {
    color: #686d71;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const Error = styled.div`
  color: red;
  font-size: 12px;
`
const Button = styled.button`
  background: #ee3769;
  margin-top: 18px;
  width: 10em;
  color: #eee;
  border-radius: 5px;
  padding: 10px 20px;
  border: solid #ee3769;
  font-weight: 600;
  box-shadow: 0px 8px 32px #ee376920;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 8px 32px #ee376970;
    transform: translateY(-2px);
  }
  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const RegisterForm = () => {
  const { addToast } = useToasts()
  const { handleSubmit, register, errors } = useForm()
  const [recaptcha, setRecaptcha] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = values => {
    if (submitting) return
    setSubmitting(true)
    // const proxyURL = 'https://cors-anywhere.someshkar.workers.dev/?'
    //const proxyURL = 'https://cors.someshkar.workers.dev/?'
    // console.log({...values, recaptchaResponse:recaptcha})

    fetch('https://api.cryptichunt.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values, recaptchaResponse: recaptcha }),
    })
      .then(resp => resp.json())
      .then(res => {
        console.log(res)
        addToast(res.message, {
          appearance: res.status,
          autoDismiss: true,
          autoDismissTimeout: 3200,
        })

        if (res.status === 'success') {
          navigate('/success')
        } else {
          setSubmitting(false)
        }
      })
  }

  return (
    <Layout>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          placeholder="Your name"
          ref={register({
            required: 'Required',
          })}
        />
        <Error>{errors.name && errors.name.message}</Error>

        <Input
          name="username"
          placeholder="Username (no spaces)"
          ref={register({
            required: 'Required',
            pattern: {
              value: /^\S*$/,
              message: 'Invalid username (no spaces allowed)',
            },
          })}
        />
        <Error>{errors.username && errors.username.message}</Error>

        <Input
          name="email"
          placeholder="Email address"
          type="email"
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        <Error>{errors.email && errors.email.message}</Error>

        <Input
          name="discord"
          placeholder="Discord ID (username#tag)"
          ref={register()}
          // ref={register({
          //  required: 'Required',
          //  pattern: {
          //    value: /^((.+?)#\d{4})/,
          //    message: 'Invalid Discord username',
          //  },
          // })}
        />
        <Error>{errors.discord && errors.discord.message}</Error>

        <Input
          name="institution"
          placeholder="Educational Institution (not required)"
          ref={register()}
        />
        <Error>{errors.institution && errors.institution.message}</Error>

        <Input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({
            required: 'Required',
          })}
        />
        <Error>{errors.password && errors.password.message}</Error>

        <Input
          name="referralUsername"
          type="text"
          placeholder="Referred by (username) (not required)"
          ref={register()}
        />
        <Error>
          {errors.referralUsername && errors.referralUsername.message}
        </Error>

        <div style={{ marginTop: '10px' }}>
          <Recaptcha
            sitekey="6LcMqP4UAAAAAHPJgLnbWmMh1Y_dVSFgbTHTiT2K"
            onChange={val => setRecaptcha(val)}
            theme="dark"
          />
        </div>
        <Button type="submit" onClick={() => setSubmitted(!submitted)}>
          {submitted ? (
            <Loader
              type="Bars"
              color="#EEE"
              height={'20px'}
              width={'20px'}
              style={{
                marginTop: '8.5px',
                backgroundColor: 'transparent',
              }}
            />
          ) : (
            'Submit'
          )}
        </Button>
      </Form>
    </Layout>
  )
}

export default RegisterForm
