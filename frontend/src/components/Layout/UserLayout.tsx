import Home from "../../pages/Home"
import Footer from "../Common/Footer"
import Header from "../Common/Header"



const UserLayout = () => {
  return (
    <div>
       {/* Header  */}
       <Header />
       <Home />
       <Footer />
    </div>
  )
}

export default UserLayout