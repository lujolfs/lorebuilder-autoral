"use client"
import React, { useState, useEffect } from 'react';
import { Listbox } from '@headlessui/react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const CreateCampaign = () => {
  const [name, setName] = useState('');
  const [settings, setSettings] = useState([]);
  const [image, setImage] = useState('');
  const [setting_id, setSettingId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [disableButton, setDisableButton] = useState(false)
  const router = useRouter()

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDisableButton(true);
    try {
      const campaignPost = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/campaigns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          setting_id,
          name,
          image
        }),
      });
      const campaignResponse = await campaignPost.json();
      console.log("OK!!!!!", typeof setting_id, campaignResponse);
    } catch (error) {
      console.log('Não.')
    }
  }

  async function fetchSettings() {
    try {
      const settingsFetch = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/settings`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
      });
      const settingsResponse = await settingsFetch.json();
      setSettings(settingsResponse);
      setIsLoaded(true);
      console.log("OK!!!!!", settingsResponse, settings);
    } catch (error) {
      console.log('Não.')
    }
  }

  useEffect(() => {fetchSettings()}, [] )

  if (!setIsLoaded) {
    return (
      <div>Loading...</div>
    )
  }
  
  return (
    <div className={styles.container}>
      <div className=''><h1>Create your campaign.</h1></div>
      <form className={styles.form} onSubmit={submit}>
        <h3>Name your campaign.</h3>
        <input type='name' value={name} placeholder="Type your campaign's name" className={styles.input} onChange={e => setName(e.target.value)} required></input>
        <h3>Select the setting of your campaign.</h3>
        <select value={setting_id} onChange={e => setSettingId(Number(e.target.value))}>
          <option value={""}>{'Select a setting'}</option>
                {settings.map((setting) => (
                  <option key={setting.id} value={setting.id}>
                    {setting.name}
                  </option>
                  ))}
          </select>
        <h3>Pick an image to illustrate your campaign. This is optional.</h3>
        <input type='url' placeholder='Link your image here.' className={styles.input} onChange={e => setImage(e.target.value)}></input>
        <button type='submit' disabled={disableButton} className={styles.button}>Create campaign</button>
      </form>
    </div>
  )
}

export default CreateCampaign