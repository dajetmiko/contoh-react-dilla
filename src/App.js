import { useState } from "react"
import './App.css';
import KomponenClass from './Komponen/KomponenClass/KomponenClass';
import KomponenClass2 from "./Komponen/KomponenClass2";
import KomponenCustomHooks from "./Komponen/KomponenCustomHooks/KomponenFunctionHooks";
import KomponenFunction from './Komponen/KomponenFunction/KomponenFunction';

function App() {
  const [propsNama, setPropsNama] = useState("Dilla")

  const [angka, setAngka] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <KomponenClass2 mencoba={"string mencoba"}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          (angka > 10) && <KomponenClass teks={propsNama}/>
        }
        <KomponenFunction teks={propsNama}/> 
        <KomponenCustomHooks />
        <h5>{angka}</h5>
        <button onClick={() => {setAngka(angka + 1)}}>
          button tambah angka
        </button>
        <button onClick={() => {setAngka(angka - 1)}}>
          button kurangi angka
        </button>
      </header>
    </div>
  );
}

export default App;
