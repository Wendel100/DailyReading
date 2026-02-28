import '../css/Menu.css';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="bottom-menu">
      <ul>
        <li><Link to="/detalhes"><button className="btn-Adcionar"><i className="bi bi-info-circle"></i></button></Link></li>
        <li><Link to="/adcionar"><button className="btn-Adcionar"><i className="bi bi-file-earmark-plus"></i></button></Link></li>
        <li><Link to="/livros"><button className="btn-livro"><i className="bi bi-book-fill"></i></button></Link>
        </li>
        <li><Link to="/historico"><button className="btn-Apagar"><i className="bi bi-clock-history"></i></button></Link></li></ul>
    </nav>
    
  );
}

export default Menu;