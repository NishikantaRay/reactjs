import a,{b,c} from './module2.mjs';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
console.log(a,b,c);
function App() {
  return (
    <>
    <Navbar title="Demo-navbar" />
    <div className="container my-3">
       <Textform name="Text Analyser" />
    </div>
    </>
  );
}

export default App;
