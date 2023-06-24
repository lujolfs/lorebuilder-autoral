"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './charactercards.module.css';
import Link from 'next/link';

const CharacterCards = () => {
  interface Character {
    id: string,
    name: string,
    image: string;
}
  
const [charactersArray, setCharactersArray] = useState<Character[]>([])

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
        <div className={styles.title}><h1>Characters</h1></div>
        <div className={styles.subcontainer}>
          <div className={styles.cards}>
          {charactersArray.map ((character: any) => (
                              <>
                              <Link href={`/characters/${character.id}`} className={styles.card} key={character.id}>
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
                              </Link>
                              </>
                          ))}
          </div>
          <Link href={'/characters/create'}><button className={styles.button}>
            ADD
          </button></Link>
        </div>
      </div>
  )
}

export default CharacterCards