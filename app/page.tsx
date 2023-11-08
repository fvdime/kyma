import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/home-props/Herobanner'
import Footer from '@/components/home-props/Footer'
import Newsletter from '@/components/home-props/Newsletter'
import Featured from '@/components/home-props/Featured'
import getToken from '@/utils/getToken'

export default function Home() {
  const token = getToken()
  console.log(token)
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <Featured/>
      <Newsletter/>
      <Footer/>
    </>
  )
}
