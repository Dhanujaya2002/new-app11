import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Head >
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Personal Portfolio</title>
      </Head>
      
      <body>
            <header className={styles.head}>
                <h2 className={styles.logo}><span>Dhanu</span>jaya.</h2>
                <nav>
                    
                    <Link href="/" className={styles.navigation}>Home.</Link>
                    <Link href="/about" className={styles.navigation}>About</Link>
                    <Link href="/gallery" className={styles.navigation}>Gallery</Link>
                    <Link href="/contact" className={styles.navigation}>Contact</Link>
                    
                </nav>
            </header>

            <section className={styles.home}>
                <div className={styles.content}>
                    <h2 id={styles.hh}>Hi, I'm <span> Dhanujaya Dilmith</span></h2>
                    <h4> Graphic Designer</h4>
                    <p>As a graphic designer, 
                        I strive to create designs that are not only visually appealing but also communicate a message effectively.
                        With 5 years of experience in the industry,  My areas of expertise include logo design, print design,photo editing and UIUX design.
                        I take pride in my ability to deliver projects on time and on budget, while maintaining the highest standards of quality</p>

                    <br></br>   
                    <br></br> 
                    <p id={styles.pp}>&copy; 2024 Dhanujaya Dilmith. All Rights Reserved.</p>


                </div>
            </section>

          
      </body>
      
    </>
  );
}

   
