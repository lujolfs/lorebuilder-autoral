"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import { useRouter } from 'next/navigation'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/dashboard"
    },
    {
        id: 2,
        title: "Settings",
        url: "/settings"
    },
    {
        id: 3,
        title: "Campaigns",
        url: "/campaigns"
    },
    {
        id: 4,
        title: "Characters",
        url: "/characters"
    },
    {
        id: 5,
        title: "Lineages",
        url: "/lineages"
    }

]

const Navbar = () => {
    const router = useRouter();

   function handleLogout() {
    localStorage.removeItem('token');
    console.log("Logout concluído.")
    router?.push('/');
   }

  return (
    <div className={styles.container}>
            <Link href="/dashboard" className={styles.logo}>LOREBUILDER</Link>
            <div className={styles.subcontainer}>
                <div className={styles.links}>
                    {links.map (link => (
                        <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                    ))}
                </div>
                <button className={styles.logout} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>)
}

export default Navbar