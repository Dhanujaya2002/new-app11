import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import styles from './gallery.module.css'
import img1 from '../public/img1.jpeg'
import img2 from '../public/img2.jpeg'
import img3 from '../public/img3.jpeg'
import img4 from '../public/img4.jpg'
import img5 from '../public/img5.jpg'
import img6 from '../public/img6.jpg'
import img7 from '../public/img7.jpg'
import img8 from '../public/img8.jpg'
import img9 from '../public/img9.jpg'
import img10 from '../public/img10.jpg'
import img11 from '../public/img11.jpg'
import img13 from '../public/img13.jpg'
import img14 from '../public/img14.jpg'
import img15 from '../public/img15.jpg'
import img16 from '../public/img16.jpg'
import img17 from '../public/img17.jpg'
import img18 from '../public/img18.jpg'
import img19 from '../public/img19.jpg'
import img20 from '../public/img20.jpg'




function page() {
  return (
    <>
     <Head >
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Personal Portfolio</title>
      </Head>
      
      <body>
            <header className={styles.head}>
                <h2 className={styles.logo}><span>Design_</span>Gallery</h2>
                <nav>
                    
                    <Link href="/" className={styles.navigation}>Back to Home</Link>
                   
                    
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
            <h2 id={styles.topic}>UI/UX</h2>
            <div className={styles.container}>
              <div className={styles.box}>
                <Image src={img1} alt={'1'} />
              </div>
              <div className={styles.box}>
                <Image src={img2} alt={'2'} />
              </div>
              <div className={styles.box}>
                <Image src={img3} alt={'3'} />
              </div>
            
            </div>
              <br></br>

            <h2 id={styles.topic}>Flyers</h2>
            <div className={styles.container}>
             
              <div className={styles.box}>
                <Image src={img4} alt={'4'} />
              </div>
              <div className={styles.box}>
                <Image src={img5} alt={'5'} />
              </div>
              <div className={styles.box}>
                <Image src={img6} alt={'6'} />
              </div>
              <div className={styles.box}>
                <Image src={img7} alt={'7'} />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.box}>
                <Image src={img8} alt={'8'} />
              </div>
              <div className={styles.box}>
                <Image src={img9} alt={'9'} />
              </div>
              <div className={styles.box}>
                <Image src={img10} alt={'10'} />
              </div>
              <div className={styles.box}>
                <Image src={img11} alt={'11'} />
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.box}>
                <Image src={img13} alt={'13'} />
              </div>
              <div className={styles.box}>
                <Image src={img14} alt={'14'} />
              </div>
              <div className={styles.box}>
                <Image src={img15} alt={'15'} />
              </div>
              <div className={styles.box}>
                <Image src={img16} alt={'16'} />
              </div>
            </div>
            <br></br>

            <h2 id={styles.topic}>Other</h2>
            <div className={styles.container}>
            <div className={styles.box}>
                <Image src={img17} alt={'17'} />
              </div>
              <div className={styles.box}>
                <Image src={img18} alt={'18'} />
              </div>
              <div className={styles.box}>
                <Image src={img19} alt={'19'} />
              </div>
              <div className={styles.box}>
                <Image src={img20} alt={'20'} />
              </div>
              
            
            </div>
            
            
      </body>
    </>

  )   
}

export default page