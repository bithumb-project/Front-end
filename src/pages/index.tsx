import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <LoginForm/> */}
      <SignUpForm/>
    </div>
  )
}

export default Home
