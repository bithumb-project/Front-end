import type { NextPage } from 'next'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <LoginForm /> */}
      <SignUpForm />
    </div>
  )
}

export default Home
