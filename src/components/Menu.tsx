import '../css/Menu.css';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="bottom-menu">
      <ul>
        <li><Link to="/detalhes"><button className="btn-Adcionar">Sobre</button></Link></li>
        <li><Link to="/adcionar"><button className="btn-Adcionar">Adcionar</button></Link></li>
        <li><Link to="/livros"><button className="btn-livro">Livro</button></Link>
        </li>
        <li><Link to="/historico"><button className="btn-Apagar">Historico</button></Link></li></ul>
    </nav>
    
  );
}

export default Menu;