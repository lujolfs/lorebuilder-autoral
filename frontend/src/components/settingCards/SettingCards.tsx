"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './settingcards.module.css';
import Link from 'next/link';

const SettingCards = () => {
const [settingsArray, setSettingsArray]: any[] = useState([])

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
        <h1>Settings</h1>
        <div className={styles.subcontainer}>
          <div className={styles.cards}>
          {settingsArray.map ((setting: any) => (
                              <>
                              <div className={styles.card} key={setting.id} name={setting.name}>
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
                              </div>
                              <div className={styles.card} key={setting.id} name={setting.name}>
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
                              </div>
                              <div className={styles.card} key={setting.id} name={setting.name}>
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
                              </div>
                              </>
                          ))}
          </div>
          <button className={styles.button}>
            ADD
          </button>
        </div>
      </div>
  )
}

export default SettingCards