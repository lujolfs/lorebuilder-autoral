"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './settingcards.module.css';
import Link from 'next/link';

const SettingCards = () => {
  interface Setting {
    id: string,
    name: string,
    image: string;
}

const [settingsArray, setSettingsArray] = useState<Setting[]>([])

async function fetchSettings() {
  try {
    const settingsFetch = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/settings`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    });
    const settingsResponse = await settingsFetch.json();
    setSettingsArray(settingsResponse);
    console.log("OK!!!!!", settingsResponse, settingsArray);
  } catch (error) {
    console.log('Não.')
  }
}

useEffect(() => {fetchSettings()}, [] )


  return (
      <div className={styles.container}>
        <div className={styles.title}><h1>Settings</h1></div>
        <div className={styles.subcontainer}>
          <div className={styles.cards}>
          {settingsArray.map (setting => (
                              <>
                              <Link href={`/settings/${setting.id}`} className={styles.card} key={setting.id}>
                                <div className={styles.imgContainer}>
                                  <Image 
                                  src={setting.image}
                                  fill={true}
                                  alt="Imagem que descreve o cenário."
                                  className={styles.img}
                                  />
                                  <div className={styles.imgText}>
                                    <h3>{setting.name}</h3>
                                  </div>
                                </div>
                              </Link>
                              </>
                          ))}
          </div>
          <Link href={'/settings/create'}><button className={styles.button}>
            ADD
          </button></Link>
        </div>
      </div>
  )
}

export default SettingCards