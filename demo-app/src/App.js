import a,{b,c} from './module2.mjs';
import './App.css';
import Navbar from './components/Navbar';
console.log(a,b,c);
function App() {
  return (
    <>
    <Navbar title="Demo-navbar" />
    </>
  );
}

export default App;
