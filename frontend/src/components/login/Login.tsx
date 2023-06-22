"use client"
import React, { useState } from 'react';
import styles from './login.module.css';
import Link from 'next/link';
import useLogin from '@/hooks/api/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loginLoading, login} = useLogin();

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const loginPost = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });
      const loginResponse = await loginPost.json();
      console.log("OK!!!!!", loginResponse);
    } catch (error) {
      console.log('Não.')
    }
  }

  return (
    <div className={styles.container}>
      <div className=''><h1>Acesse sua conta</h1></div>
      <form className={`${styles.form}`} onSubmit={submit}>
        <h3>E-mail</h3>
        <input type='email' value={email}  placeholder='Digite seu e-mail' className={styles.input} onChange={e => setEmail(e.target.value)} required></input>
        <h3>Senha</h3>
        <input type='password' value={password} placeholder='Digite sua senha' className={styles.input} onChange={e => setPassword(e.target.value)} required></input>
        <button className={styles.button} disabled={loginLoading}>Entrar</button>
      </form>
      <Link href="/signup">Clique aqui para criar uma conta.</Link>
    </div>
  )
}

export default Login