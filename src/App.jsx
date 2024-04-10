import Header from './Resources/Header/Header.jsx'
import IntroBox from './Resources/IntroBox/IntroBox.jsx'
import Productsbox from './Resources/AllProducts/AllProducts.jsx'
import './index.css'
import Footer from './Resources/Footer/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <IntroBox />
        <Productsbox header={"Список товаров"} />
      </div>
      <Footer />
    </>
  )
}