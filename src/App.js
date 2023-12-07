
import './App.css';
import NavScrollExample from './components/navbar';
import Form from './components/Form';
import Exp from './components/Experiance';
import NN from './components/Work1';
import SKILL from './components/Skills';
import CTS from './components/Contacts';

function App() {
  return (
<div>
 
  <NavScrollExample/>

    <Form/>
    <div class = "txt">
    <span> Licences and certifications </span>
    </div>

    <div class="x">
    <Exp/>
    </div>
    <div class="txt1">
    <span> Career summary </span>
    </div>
    <div class ="y">
    <NN/>
     </div>
     <div class="txt2">
    <span> List of skills </span>
    </div>
    <div class ="skill">
    <SKILL/>
     </div>
     <div class="txt3">
    <span> Contactes</span>
    </div>
    <div class ="cnts">
    <CTS/>
     </div>
</div>
   



  );
}

export default App;
