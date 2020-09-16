import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';



const schema = Yup.object().shape({
  name: Yup.string().required('Name required'),
  email: Yup.string()
    .email('Please, enter a valid e-mail')
    .required('E-mail required'),
  password: Yup.string().min(6, 'Minimum of 6 characters').required('Password required'),

});

// import { Container } from './styles';

export default function SingUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }){
    dispatch(signUpRequest(name, email, password))
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu nome"/>
        <Input name="email" type="email" placeholder="Seu e-mail"/>
        <Input name="password" type="password" placeholder="Sua senha secreta"/>

        <button type="submit"> Criar conta </button>
        <Link to="/">Já tenho uma conta</Link>

      </Form>

    </>

  );
}


