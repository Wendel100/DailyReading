import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import './App.css'
import {Detalhes} from "./pages/Detalhes";
import { Livros } from "./pages/Livros";
import { Historico } from "./pages/Historico";
import {Adcionar} from "./pages/Adcionar";

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