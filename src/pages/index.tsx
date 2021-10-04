import type { NextPage } from 'next'
// import CoinInfo from '../components/CoinInfo/CoinInfo'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      {/* <LoginForm /> */}
      <SignUpForm />
      {/* <CoinInfo/> */}
    </div>
  )
}

export default Home
