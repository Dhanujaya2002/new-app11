import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import styles from './contact.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

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
                <h2 className={styles.logo}><span>Contact_</span>me</h2>
                <nav>
                    
                    <Link href="/" className={styles.navigation}>Back to Home</Link>
                   
                    
                </nav>
            </header>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           
            <div className={styles.social}>
                    <h2 id={styles.hhh}>Follow me on</h2>
                      <ul>
                        <li> <Link href="https://www.facebook.com/dhanujaya.dilmith" target='_blank'> <FaFacebook />  Facebook </Link></li>
                        <li> <Link href="https://www.linkedin.com/in/dhanujaya-dilmith-761018300/" target='_blank'><FaLinkedin />  Linkedin </Link></li>
                        <li> <Link href="https://github.com/Dhanujaya2002" target='_blank'><FaGithub />  GitHub </Link></li>
                        
                      </ul>
            </div>

            <div className={styles.container}>
        
              <p className={styles.pp}>If you have any questions or inquiries, feel free to reach out to us using the form below or the contact information provided.</p>

              <form className={styles.form1} action="your-server-side-script" method="POST">
                  <div className={styles.formgroup}>
                     <label className={styles.label1} htmlFor="name">Name</label>
                      <input className={styles.input1} type="text" id="name" name="name" placeholder="Your Name" required />
                  </div>

                  <div className={styles.formgroup}>
                      <label className={styles.label1} htmlFor="email">Email</label>
                      <input className={styles.input1} type="email" id="email" name="email" placeholder="Your Email" required />
                  </div>

                  <div className={styles.formgroup}>
                      <label className={styles.label1} htmlFor="message">Message</label>
                      <textarea className={styles.textarea1} id="message" name="message" placeholder="Your Message" required></textarea>
                  </div>

                  <div className={styles.formgroup}>
                      <button className={styles.button1} type="submit">Submit</button>
                  </div>
              </form>

                  <div className={styles.contactinfo}>
                      <div>
                          <strong>Email:</strong> dhanudil2002@gmail.com
                      </div>
                      <div>
                          <strong>Phone/Whatsapp:</strong> +94714775661
                      </div>
                      <div>
                          <strong>Address:</strong> 57/5,New Colony,Gamagoda,Kalutara,Sri Lanka.
                      </div>
                  </div>
            </div>
      </body>
    </>

  )   
}

export default page