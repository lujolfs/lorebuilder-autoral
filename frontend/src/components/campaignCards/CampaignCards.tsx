"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './campaigncards.module.css';
import Link from 'next/link';

const CampaignCards = () => {
const [campaignsArray, setCampaignsArray]: any[] = useState([])

async function fetchCampaigns() {
  try {
    const campaignsFetch = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/campaigns`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    });
    const campaignsResponse = await campaignsFetch.json();
    setCampaignsArray(campaignsResponse);
    console.log("OK!!!!!", campaignsResponse, campaignsArray);
  } catch (error) {
    console.log('Não.')
  }
}

useEffect(() => {fetchCampaigns()}, [] )


  return (
      <div className={styles.container}>
        <h1>Campaigns</h1>
        <div className={styles.subcontainer}>
          <div className={styles.cards}>
          {campaignsArray.map ((campaign: any) => (
                              <>
                              <div className={styles.card} key={campaign.id} name={campaign.name}>
                                <div className={styles.imgContainer}>
                                  <Image 
                                  src={campaign.image}
                                  fill={true}
                                  alt="Imagem que ilustra a campanha."
                                  className={styles.img}
                                  />
                                  <div className={styles.imgText}>
                                    <h3>{campaign.name}</h3>
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

export default CampaignCards