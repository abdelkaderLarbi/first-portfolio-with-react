import logo from './logo.svg';
import './App.css';
import img from'./pics/2023-maserati-mc20-cielo-spyder-28-1666275747.jpg';
function App() {
  return (
<div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title color">Your name here</h1>
    <br />
    <img src={img} />
    <br />
    <img src="/imagehome.jpeg" />
  </div>
  <video width={320} height={240} controls>
    <source src="video1.mp4" type="video/mp4" />
  </video>
</div>

  );
}

export default App;