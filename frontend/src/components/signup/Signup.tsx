"use client"
import React, { useState } from 'react';
import styles from './signup.module.css';
import Link from 'next/link';
import useSignup from '@/hooks/api/useSignup';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signupLoading, signup} = useSignup();

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    try {
      await signup(name, email, password);
      console.log('OK!');
    } catch (error) {
      console.log('Não.')
    }
  }
  
  return (
    <div className={styles.container}>
      <div className=''><h1>Crie sua conta</h1></div>
      <form className={styles.form} onSubmit={submit}>
        <h3>Nome de usuário</h3>
        <input type='name' value={name} placeholder='Digite seu nome de usuário' className={styles.input} onChange={e => setName(e.target.value)} required></input>
        <h3>E-mail</h3>
        <input type='email' value={email} placeholder='Digite seu e-mail' className={styles.input} onChange={e => setEmail(e.target.value)} required></input>
        <h3>Senha</h3>
        <input type='password' placeholder='Digite sua senha' className={styles.input} onChange={e => setPassword(e.target.value)} required></input>
        <button type='submit' disabled={signupLoading} className={styles.button}>Criar conta</button>
      </form>
      <Link href="/">Fazer login</Link>
    </div>
  )
}

export default Signup