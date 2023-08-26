import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>CONTACT</li>
        <li>RESUME</li>
      </ul>
    </nav>
  )
}

export default Navbar
