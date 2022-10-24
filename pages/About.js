import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function About(){
  return (
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"/>
  <nav className={styles.mainnav}>
    <ul>

      <Link className={styles.a}href="/"><a><li>Home</li></a></Link>
      <Link className={styles.a}href="/About"><a><li>About</li></a></Link>
      <Link className={styles.a}href="Blog"><a><li>Blog</li></a></Link>
    </ul>
  </nav>
  <center>
    <div className={styles.ad}>
      <h1>Our Team</h1>
      <p>We have a team of 5 Members:</p>
        <ul>
          <li>Kevin Mehta</li>
          <li>Aarvish Satapara</li>
          <li>Harshit Shukla</li>
          <li>Falano</li>
          <li>Dhikno</li>
        </ul>
    </div>
    <br/>
    <h1>Services</h1>
    <p>Engumet eggedum fyon kyul bezzeg fyom qui werethul thekunched en wklelue, kyniuhhad wylag illen arad en engumet ygoz byuntelen. Fyom epedek aniath qui leg epedek merth, syrou vh kunuel scepsegud scepsegud symeonnok thez ualallal fuhazatum o, symeonnok kynaal urodum mezuul byuntelen. Fyodumtul aniath epedek vylag kyniuhhad olelothya, syrolmol yg kyniuhhad.</p>
    <h1>Products</h1> 
    <p>Justo accusam labore et kasd et dolores sadipscing. Voluptua dolor sit takimata accusam et. Labore justo dolor aliquyam vero labore ipsum sed lorem vero, stet sanctus accusam kasd dolores sed, vero duo dolor sed ipsum sea. Clita vero takimata et ipsum invidunt, et et et rebum lorem, est at tempor.</p>
    <div className={styles.footer}>
      <center>
      <li>Created By:Harshit Shukla</li>
      <li>Made Using Next.JS, JavaScript and JSX</li>
      <a>©Copyright Devil Coders 2022</a>
      </center>
      </div>
      </center>
    </>
  );
}
