import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import styles from './about.module.css'

function page() {
  return (
    <>
     <Head >
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Personal Portfolio</title>
      </Head>
      
      <body className={styles.back}>
            <header className={styles.head}>
                <h2 className={styles.logo}><span>About_</span>me.</h2>
                <nav>
                    
                    <Link href="/" className={styles.navigation}> Back to Home</Link>
                    
                    
                </nav>
            </header>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <div className={styles.container2}>
        

              <div className={styles.content}>
                    <h2 id={styles.hhh}>Introduction</h2>
                    <p>Hello! My name is Dhanujaya Dilmith. I am a Designer with a passion for Graphic designing. Over the years, I have honed my skills in UI UX,Graphic designing,web Designing, and I strive to make an impact through my work. I believe in the power of creativity, continuous learning, and collaboration to drive meaningful change.</p>
              </div>

              <div className={styles.content}>
                    <h2 id={styles.hhh}>Background</h2>
                    <p>I am under graduate student from  University of Sri Jayewardenepura with a degree in Bsc.(hons) in IT. Since then, I've worked in various roles such as flyer designer,graphic designer, Photographer and editor which have helped shape my professional expertise and creativity. I have a deep interest in UIUX and continually seek out new challenges and learning opportunities.</p>
              </div>

              <div className={styles.content}>
                    <h2 id={styles.hhh}>Hobbies & Interests</h2>
                    <p>When I’m not working, you can find me exploring new places, reading, practicing photography . I also love  volunteering, staying active ., which keeps me balanced and helps fuel my creativity.</p>
              </div>
              <div className={styles.skills}>
                    <h2 id={styles.hhh}>Skills</h2>
                      <ul>
                        <li>UI/UX Design</li>
                        <li>Graphic Design</li>
                        <li>Web Design</li>
                        <li>Illustration</li>
                        <li>Adobe Creative Suite</li>
                        <li>Figma</li>
                        <li>HTML/CSS</li>
                    </ul>
              </div>

              <div className={styles.contact}>
                    <h2 id={styles.hhh}>Get In Touch</h2>
                    <p>If you’d like to collaborate or just want to say hello, feel free to drop me a message.</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link href="/contact" className={styles.navigation}>Contact Me</Link>
              </div>
              
            </div>
      </body>
    </>

  )   
}

export default page