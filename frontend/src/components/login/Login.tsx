"use client"
import React, { useState, useEffect } from 'react';
import styles from './login.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(false)
  const router = useRouter();

  useEffect(() => {
   const fetchToken: any = localStorage.getItem('token')
   if (fetchToken) {
      if (!isTokenExpired(fetchToken)) {
        router?.push('/dashboard')
      }
    }
   }, [])

  function isTokenExpired(token: any) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    const isExpired = Date.now() >= expiry * 1000;
    console.log(isExpired);
    return isExpired;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setDisableButton(true);
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
      localStorage.setItem("token", loginResponse.accessToken)
      console.log("OK!!!!!", loginResponse);
      router?.push('/dashboard');
    } catch (error) {
      console.log('Não.')
    }
  }

  return (
    <div className={styles.container}>
      <div className=''><h1>Acesse sua conta</h1></div>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <h3>E-mail</h3>
        <input type='email' value={email}  placeholder='Digite seu e-mail' className={styles.input} onChange={e => setEmail(e.target.value)} required></input>
        <h3>Senha</h3>
        <input type='password' value={password} placeholder='Digite sua senha' className={styles.input} onChange={e => setPassword(e.target.value)} required></input>
        <button className={styles.button} disabled={disableButton}>Entrar</button>
      </form>
      <Link href="/signup">Clique aqui para criar uma conta.</Link>
    </div>
  )
}

export default Login