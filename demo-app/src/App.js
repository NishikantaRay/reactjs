// import logo from './logo.svg';
import './App.css';
let name= "nishi";
function App() {
  return (
    <>
    <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
<div className="container">
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi tempore qui dolore nostrum atque deleniti possimus iste aspernatur eveniet inventore dolorum perferendis reiciendis odio, unde sunt architecto saepe, reprehenderit est.</p>
  <h1>{name}</h1>
</div>
    </>
  );
}

export default App;
