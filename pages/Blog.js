import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
export default function Contact(){
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"/>
  <nav className={styles.mainnav}>
    <ul>

      <Link className={styles.a}href="/"><a><li>Home</li></a></Link>
      <Link className={styles.a}href="/About"><a><li>About</li></a></Link>
      <Link className={styles.a}href="/Blog"><a><li>Blog</li></a></Link>
    </ul>
  </nav>
  <div className={styles.bodyb}>
    
        <h1>Blog 1:</h1>
        <p>Accusam est ea amet labore sit voluptua kasd. Sanctus ea stet diam et ea takimata gubergren sea amet, sit vero erat justo ut invidunt,<br/> 
          stet et ea aliquyam invidunt.Made wandered longed but a superstition of not. Day and amiss was saw, sad childe plain ear had parasites almost. Holy alone say one drowsy, so however he would childe fall sun objects was. Into nine later in favour he,.</p>
        <h1>Blog 2:</h1>
        <p>Velvet the angels nevermore him from name, and thee prophet smiling nevermore i off ever beak the, seeing sent said caught that before louder only faster, word token bird just nights. On on unmerciful door i violet nevernevermore cushions was.</p>
  </div>
  <div className={styles.footer}>
      <center>
      <li>Created By:Harshit Shukla</li>
      <li>Made Using Next.JS, JavaScript and JSX</li>
      <a>©Copyright Devil Coders 2022</a>
      </center>
    </div>

    </>
  )
}
