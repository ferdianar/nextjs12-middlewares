import React from 'react'
import styles from "styles/Home.module.css"

const Login = () => {
       return (
              <React.Fragment>
                     <div className={styles.container}>
                            <h1>Login Page</h1>
                            <p>Lets login first to access features</p>
                            <button onClick={() => {
                                   document.cookie = 'token = gd7sd5sdhvjgv2324bhj@#$2gg; path=/'
                            }}>Login</button>
                     </div>
              </React.Fragment>
       )
}

export default Login