import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LoginForm from '../components/LoginForm'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}

export default Home
