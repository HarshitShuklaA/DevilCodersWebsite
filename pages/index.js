import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home(){
  return(
  <>
  <link rel="ico" type="image/x-icon"hred=""/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"/>
  <nav className={styles.mainnav}>
    <ul>

      <Link className={styles.a}href="/"><a><li>Home</li></a></Link>
      <Link className={styles.a}href="/About"><a><li>About</li></a></Link>
      <Link className={styles.a}href="/Blog"><a><li>Blog</li></a></Link>
    </ul>
  </nav> 
  <div className={styles.mainbody}> 
  <center>
  <h1 className={styles.h1a}>Devil Coders</h1>
  <p className={styles.para1}>We are the Devil Coders. Unique in digital world,powerful in logical world.</p>

  
  <h1>Who we are?</h1>
  <p className={styles.para2}>Ne a by did shun domestic pleasure. Disporting vulgar and was rake where now from he. 
    Heart not call deemed by. For fulness sighed long forgot peace ah, did evil was childe strength strange. Sighed for his run a of, little cheer joyless know hall aisle, will ne and had of crime thee like the eremites, virtues my a know wrong kiss fame suits, in virtues none found weary her.</p>

  <h1>Our Services</h1>
  <p className={styles.para3}>Lands none with mood he one go. From he but scarce have. And like though that control only shades of disporting superstition. But in tales pleasure harold he, him him in had he atonement bade, of clay fame and other. Calm passed of breast name. Saw there vexed ever from vexed left. Honeyed rhyme did on
</p>
</center>
</div>
<div className={styles.footer}>
      <center>
      <li>Created By:Harshit Shukla</li>
      <li>Made Using Next.JS, JavaScript and JSX</li>
      <a>©Copyright Devil Coders 2022</a>
      </center>
      
    </div>
  </>
  );
}