"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const CreateSetting = () => {
  const [name, setName] = useState('');
  const [ruleset, setRuleset] = useState('');
  const [image, setImage] = useState('');
  const [disableButton, setDisableButton] = useState(false)
  const router = useRouter()

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setDisableButton(true);
    try {
      const settingPost = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/settings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          name,
          ruleset,
          image
        }),
      });
      const settingResponse = await settingPost.json();
      console.log("OK!!!!!", settingResponse);
      router?.push("/dashboard");
    } catch (error) {
      console.log('Não.')
    }
  }
  
  return (
    <div className={styles.container}>
      <div className=''><h1>Create your setting.</h1></div>
      <form className={styles.form} onSubmit={submit}>
        <h3>Name your setting.</h3>
        <input type='name' value={name} placeholder="Type your setting's name" className={styles.input} onChange={e => setName(e.target.value)} required></input>
        <h3>Choose a ruleset. This one is optional.</h3>
        <input type='ruleset' value={ruleset} placeholder='Choose a ruleset' className={styles.input} onChange={e => setRuleset(e.target.value)}></input>
        <h3>Pick an image to illustrate your setting. This one's also optional.</h3>
        <input type='url' placeholder='Link your image here.' className={styles.input} onChange={e => setImage(e.target.value)}></input>
        <button type='submit' disabled={disableButton} className={styles.button}>Create setting</button>
      </form>
    </div>
  )
}

export default CreateSetting