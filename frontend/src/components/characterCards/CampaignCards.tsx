"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './charactercards.module.css';
import Link from 'next/link';

const CharacterCards = () => {
const [charactersArray, setCharactersArray]: any[] = useState([])

async function fetchcharacters() {
  try {
    const charactersFetch = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/characters`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    });
    const charactersResponse = await charactersFetch.json();
    setCharactersArray(charactersResponse);
    console.log("OK!!!!!", charactersResponse, charactersArray);
  } catch (error) {
    console.log('Não.')
  }
}

useEffect(() => {fetchcharacters()}, [] )


  return (
      <div className={styles.container}>
        <h1>Characters</h1>
        <div className={styles.subcontainer}>
          <div className={styles.cards}>
          {charactersArray.map ((character: any) => (
                              <>
                              <div className={styles.card} key={character.id} name={character.name}>
                                <div className={styles.imgContainer}>
                                  <Image 
                                  src={character.photo}
                                  fill={true}
                                  alt="Imagem que ilustra a campanha."
                                  className={styles.img}
                                  />
                                  <div className={styles.imgText}>
                                    <h3>{character.name}</h3>
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

export default CharacterCards