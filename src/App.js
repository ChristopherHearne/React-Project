import './App.css';
import Navbar from './components/Navbar'
import AddHabit from './components/AddHabit'
import CategoryComponent from './components/CategoryComponent';
import SignIn from './components/SignIn';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SignIn />
      <AddHabit />
      <CategoryComponent />
    </div>
  );
}
export default App;