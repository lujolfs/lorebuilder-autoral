"use client"
import React, { useState } from 'react';
import styles from './signup.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(false)
  const router = useRouter()

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setDisableButton(true);
    try {
      const loginPost = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password
        }),
      });
      const loginResponse = await loginPost.json();
      console.log("OK!!!!!", loginResponse);
      router?.push("/");
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
        <button type='submit' disabled={disableButton} className={styles.button}>Criar conta</button>
      </form>
      <Link href="/">Fazer login</Link>
    </div>
  )
}

export default Signup