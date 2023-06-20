import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
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
    }
]

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>LOREBUILDER</Link>
        <div className={styles.links}>
            {links.map (link => (
                <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar