
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Home/shared/Navbar/Navbar'
import Footer from '../pages/Home/shared/footer/Footer'

export default function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
