"use client"
import React from 'react';
import styles from './login.module.css';
import Link from 'next/link';
import { share } from '@/app/fonts';

const Login = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const email: string = e.target[0].value;
    const password: string = e.target[1].value
  }

  return (
    <div className={styles.container}>
      <div className=''><h1>Acesse sua conta</h1></div>
      <form className={`${styles.form} ${share.variable}`} onSubmit={handleSubmit}>
        <h3>E-mail</h3>
        <input type='email' placeholder='Digite seu e-mail' className={styles.input} required></input>
        <h3>Senha</h3>
        <input type='password' placeholder='Digite sua senha' className={styles.input} required></input>
        <button className={styles.button}>Entrar</button>
      </form>
      <Link href="/signup">Clique aqui para criar uma conta.</Link>
    </div>
  )
}

export default Login