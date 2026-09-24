import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Topbar />
      <Header />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}
