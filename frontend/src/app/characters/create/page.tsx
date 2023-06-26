"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const CreateCharacter = () => {
  const [name, setName] = useState('');
  const [campaigns, setCampaigns] = useState([]);
  const [photo, setPhoto] = useState('');
  const [campaign_id, setCampaignId] = useState(null);
  const [hp, setHp] = useState('')
  const [str, setStr] = useState('')
  const [dex, setDex] = useState('')
  const [con, setCon] = useState('')
  const [int, setInt] = useState('')
  const [wis, setWis] = useState('')
  const [cha, setCha] = useState('')
  const [speed, setSpeed] = useState('')
  const [bio, setBio] = useState('')
  const [isLoaded, setIsLoaded] = useState(false);
  const [disableButton, setDisableButton] = useState(false)
  const [checkAuth, setCheckAuth] = useState(false)
  const router = useRouter();
  
  useEffect(() => {
      const fetchItem: any = localStorage.getItem('token')
          if (fetchItem) {
              setCheckAuth(true)
          } else {
              router?.push('/')
          }
  }, []);


  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDisableButton(true);
    try {
      const CharacterPost = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/characters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          "user_id": 0,
          campaign_id,
          name,
          hp,
          "strength": str,
          "dexterity": dex,
          "constitution": con,
          "intelligence": int,
          "wisdom": wis,
          "charisma": cha,
          speed,
          "biography": bio,
          photo
        }),
      });
      const CharacterResponse = await CharacterPost.json();
      console.log("OK!!!!!", typeof campaign_id, CharacterResponse);
    } catch (error) {
      console.log('Não.')
    }
  }

  async function fetchCampaigns() {
    try {
      const campaignsFetch = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/campaigns`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
      });
      const campaignsResponse = await campaignsFetch.json();
      setCampaigns(campaignsResponse);
      setIsLoaded(true);
      console.log("OK!!!!!", campaignsResponse, campaigns);
    } catch (error) {
      console.log('Não.')
    }
  }

  useEffect(() => {fetchCampaigns()}, [] )

  if (!setIsLoaded) {
    return (
      <div>Loading...</div>
    )
  }
  
  return (
    <div className={styles.container}>
      <div className=''><h1>Create your character.</h1></div>
      <form className={styles.form} onSubmit={submit}>
        <h3>Name your Character.</h3>
        <input type='name' value={name} placeholder="Name" className={styles.input} onChange={e => setName(e.target.value)} required></input>
        <h3>Select the campaign your character will be played at.</h3>
        <select value={campaign_id} onChange={e => setCampaignId(Number(e.target.value))} required>
          <option value={""}>{'Select a campaign'}</option>
                {campaigns.map((campaign) => (
                  <option key={campaign.id} value={campaign.id}>
                    {campaign.name}
                  </option>
                  ))}
          </select>
        <h3>Pick a photo for you character!</h3>
        <input type='url' placeholder='Link your image here.' className={styles.input} onChange={e => setPhoto(e.target.value)}></input>
        <h3>Now tell me your stats.</h3>
        <div className={styles.stats}>
          <div className={styles.statContainer}>
            <input type='number' value={hp} placeholder="HP" className={styles.input} onChange={e => setHp(Number(e.target.value))} required></input>
            <input type='text' value={speed} placeholder="SPEED" className={styles.input} onChange={e => setSpeed(e.target.value)} required></input>
          </div>
          <div className={styles.statContainer}>
            <input type='number' value={str} placeholder="STR" className={styles.input} onChange={e => setStr(Number(e.target.value))} required></input>
            <input type='number' value={dex} placeholder="DEX" className={styles.input} onChange={e => setDex(Number(e.target.value))} required></input>
          </div>
          <div className={styles.statContainer}>
            <input type='number' value={con} placeholder="CON" className={styles.input} onChange={e => setCon(Number(e.target.value))} required></input>
            <input type='number' value={int} placeholder="INT" className={styles.input} onChange={e => setInt(Number(e.target.value))} required></input>
          </div>
          <div className={styles.statContainer}>
            <input type='number' value={wis} placeholder="WIS" className={styles.input} onChange={e => setWis(Number(e.target.value))} required></input>
            <input type='number' value={cha} placeholder="CHA" className={styles.input} onChange={e => setCha(Number(e.target.value))} required></input>
          </div>
        </div>
        <h3>Write about your character's life.</h3>
        <input type='text' value={bio} placeholder="Biography" className={styles.bio} onChange={e => setBio(e.target.value)} required></input>
        <button type='submit' disabled={disableButton} className={styles.button}>Create Character</button>
      </form>
    </div>
  )
}

export default CreateCharacter