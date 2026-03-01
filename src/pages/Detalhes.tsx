import "../css/Detalhes.css"
export function Detalhes(){
    return(
    <div className="sobre mt-4">
        <span> Autor: Renan wendel</span>
      <h1 className="mb-4">Sobre o DailyReading</h1>
      <p>
        O <strong>DailyReading</strong> é uma aplicação de lista de tarefas
        focada em livros. A proposta é auxiliar pessoas que possuem uma rotina
        puxada ou que têm dificuldade em manter o foco a conseguirem finalizar
        suas leituras. Muitas vezes, a correria do dia a dia acaba tirando nossa
        concentração, e este aplicativo surge como uma ferramenta de apoio para
        resolver esse problema.
      </p>
      <h3 className="mt-4">Tecnologias utilizadas</h3>
      <ul className="tecnologias">
        <li><strong>Frontend:</strong><p className="detalhesP">React</p></li>
        <li><strong>Backend:</strong><p className="detalhesP">C# .NET</p></li>
        <li><strong>Banco de dados:</strong><p className="detalhesP">SQL Server</p></li>
      </ul>
    </div>
  );
}
export default Detalhes;