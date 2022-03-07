import React from 'react'
import styles from "styles/Home.module.css"

const SecretPages = () => {
       return (
              <div className={styles.container}>
                     <h1>Not Allowed to access content in <span className={styles.secret}>"Secret Routes"</span></h1>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, quibusdam. Lorem ipsum dolor sit.</p>
              </div>
       )
}

export default SecretPages