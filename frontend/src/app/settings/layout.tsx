import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import styles from './page.module.css';

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}

export default layout