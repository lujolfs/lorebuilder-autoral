"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './campaigncards.module.css';
import Link from 'next/link';

const CampaignCards = () => {
interface Campaign {
    id: string,
    name: string,
    image: string;
}

const [campaignsArray, setCampaignsArray] = useState<Campaign[]>([])

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
        <div className={styles.title}><h1>Campaigns</h1></div>
        <div className={styles.subcontainer}>
          <div className={styles.cards}>
          {campaignsArray.map (campaign => (
                              <>
                              <Link href={`/campaigns/${campaign.id}`} className={styles.card} key={campaign.id}>
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
                              </Link>
                              </>
                          ))}
          </div>
          <Link href={'/campaigns/create'}><button className={styles.button}>
            ADD
          </button></Link>
        </div>
      </div>
  )
}

export default CampaignCards