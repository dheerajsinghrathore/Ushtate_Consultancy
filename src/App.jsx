import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ServicesDetail from './components/ServicesDetail'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
    <div className="px-5 py-5 sm:px-10 md:px-14 lg:px-20 min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Home />
        <AboutUs />
        <ServicesDetail />
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}

export default App