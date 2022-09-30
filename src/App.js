import './App.css';
import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Info />
      <About />
      <Footer />
    </div>
  );
}
export default App;