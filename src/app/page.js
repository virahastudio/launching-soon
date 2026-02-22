"use client"

import { useEffect, useState } from "react"
import styles from "./page.module.css"
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className={`${styles.container} ${loaded ? styles.fadeIn : ""}`}>
      <div className={styles.content}>
        <p className={styles.smallText}>WE ARE</p>

        <h1 className={styles.title}>
          LAUNCHING <br /> SOON!
        </h1>

        <p className={styles.smallText}>STAY TUNED</p>
      </div>

      <div className={styles.socials}>
        <a href="https://www.instagram.com/virahastudio/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/company/viraha-studio/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>

        <a href="https://x.com/VirahaStudio" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>

        <a href="https://www.youtube.com/@VirahaStudio" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>

        <a href="mailto:virahastudio@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdEmail />
        </a>
      </div>
    </main>
  )
}