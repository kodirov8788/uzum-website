import './App.scss';
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer"
import Products from './components/Products/Products';
import NavBottom from './components/nav_bottom/NavBottom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavBottom />
      {/* <Products />
      <Footer /> */}

    </div>
  );
}

export default App;
