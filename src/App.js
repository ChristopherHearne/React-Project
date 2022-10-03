import './App.css';
import Navbar from './components/Navbar'
import AddHabit from './components/AddHabit'
import CategoryComponent from './components/CategoryComponent';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AddHabit />
      <CategoryComponent />
    </div>
  );
}
export default App;