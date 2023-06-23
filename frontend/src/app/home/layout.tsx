import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import styles from './home.module.css';
import SettingCards from '@/components/settingCards/SettingCards';

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.content}>{children}</div>
      <SettingCards/>
    </div>
  )
}

export default layout