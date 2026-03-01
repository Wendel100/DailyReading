import { useEffect, useState } from "react";
import type { Historico } from "../types/Historico";
import api from "../services/Api";
export function Historico(){
const [livros, setLivros] = useState<Historico[]>([]);

  useEffect(() => {
    async function carregarLivros() {
      try {
        const response = await api.get<Historico[]>("historico");
        setLivros(response.data);
      } catch (erro) {
        console.error("Erro ao buscar livros:", erro);
      }
    }
    carregarLivros();
  }, []);
  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-bold">Livros finalizados</h1>

      <div className="row g-4">
        {livros.map((livro) => (
          <div key={livro.id} className="col-md-4 col-lg-3">
            <div className="card tarefa-card h-100">

              {/* Header */}
              <div className="card-header text-center fw-bold">
                <p className="Titulo">{livro.titulo}</p>
              </div>

              {/* Body */}
              <div className="card-body">
                <p className="mb-2">
                N°{livro.id}
                </p>
                <p className="mb-3">
                Vou iniciar a leitura do livro <span className="tituloLivro">{livro.titulo}</span> que tem {livro.numPaginas} paginas,
                estou determinado a finalizá-lo em até 30 dias.
                Com foco e disciplina, alcançarei essa meta!</p>
               <p>
               <strong>Criado em :</strong> {new Date(livro.dataCriacao).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })}
                  </p>
                  </div>

              {/* Footer */}
              <div className="card-footer d-flex justify-content-between">
                  <i className="bi bi-check-circle-fill"></i>
                  <p ><strong>Finalizado: </strong>
    {new Date(livro.dataExclusao).toLocaleDateString("pt-BR",{
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })}</p>
  </div>
  </div>
  </div>
))}
</div>
    </div>
  );
}
export default Historico;