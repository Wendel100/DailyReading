import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import './App.css'
import {Detalhes} from "./Components/Detalhes";
import { Livros } from "./Components/Livros";
import { Historico } from "./Components/Historico";
import {Adcionar} from "./Components/Adcionar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detalhes" element={<Detalhes/>} />
        <Route path="/adcionar" element={<Adcionar/>} />
        <Route path="/livros" element={<Livros/>} />
        <Route path="/historico" element={<Historico/>} />
      </Routes>
      <Menu/>
    </BrowserRouter>
  );
}

export default App;