"use client"
import React, { useState, useEffect, ReactElement } from 'react';
import styles from './settingcards.module.css';
import Link from 'next/link';

const SettingCards = () => {

async function fetchSettings() {
  try {
    const settingsFetch = await fetch(`${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/settings`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    });
    const settingsResponse = await settingsFetch.json();
    console.log("OK!!!!!", settingsResponse);
  } catch (error) {
    console.log('Não.')
  }
}

useEffect(() => {fetchSettings()}, [] )


  return (
    <h1>SETTINGS</h1>
  )
}

export default SettingCards