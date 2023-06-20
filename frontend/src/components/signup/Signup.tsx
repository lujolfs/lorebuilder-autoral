"use client"
import React from 'react';
import styles from './signup.module.css';
import Link from 'next/link';
import { share } from '@/app/fonts';

const Signup = () => {
  return (
    <div className={styles.container}>
      <div className=''><h1>Crie sua conta</h1></div>
      <form className={styles.form}>
        <h3>Nome de usuário</h3>
        <input type='name' placeholder='Digite seu nome de usuário' className={styles.input} required></input>
        <h3>E-mail</h3>
        <input type='email' placeholder='Digite seu e-mail' className={styles.input} required></input>
        <h3>Senha</h3>
        <input type='password' placeholder='Digite sua senha' className={styles.input} required></input>
        <button className={styles.button}>Criar conta</button>
      </form>
      <Link href="/">Fazer login</Link>
    </div>
  )
}

export default Signup