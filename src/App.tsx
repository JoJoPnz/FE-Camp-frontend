import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./pages/Example/Example"
import Form from "./components/Form/Form"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/Product/Product"
import Footer from "./components/Footer/Footer"
import { PageContainer } from "./components/Containers"
import Profile from "./components/Profile_picture/Profile"
import { setUpOmise } from "./utils/omise"
import LandingPage from "./pages/LandingPage/LandingPage"

function App() {
  setUpOmise()
  return (
    <>
      {/* <Navbar isLogin={true} /> */}
      <PageContainer>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </PageContainer>
      <Footer />
    </>
  )
}

export default App
