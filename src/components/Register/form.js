import React from 'react'
import styled from 'styled-components'
import Recaptcha from 'react-google-recaptcha'

import { navigate } from '@reach/router'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'

import { Button as NavButton } from '../navbar'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: bottom;
`

const Input = styled.input`
  max-width: 45%;
  padding: 15px 20px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #d0d0d0;
  margin: 10px 0;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`

const Error = styled.div`
  color: red;
  font-size: 12px;
`

const Button = styled(NavButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 30%;
  }
`

//hi

const RegisterForm = () => {
  const { addToast } = useToasts()
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = values => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'

    fetch(proxyURL + 'https://cryptocracy-reg-api.now.sh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
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
        }
      })
  }

  return (
    <div>
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
          placeholder="Username"
          ref={register({
            required: 'Required',
          })}
        />
        <Error>{errors.username && errors.username.message}</Error>

        <Input
          name="email"
          placeholder="Email address"
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
          placeholder="Discord ID"
          ref={register()}
          // ref={register({
          //   required: 'Required',
          //   pattern: {
          //     value: /^((.+?)#\d{4})/,
          //     message: 'Invalid Discord username',
          //   },
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

        <Recaptcha
          style={{ margin: '10px 0' }}
          sitekey="6LcMqP4UAAAAAHPJgLnbWmMh1Y_dVSFgbTHTiT2K"
        />

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default RegisterForm
