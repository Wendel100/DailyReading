import { useState, useEffect } from "react";
import api from "../services/Api";
import type { Livro } from "../types/Livro";
import '../css/Livro.css'

export function Livros() {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    async function carregarLivros() {
      try {
        const response = await api.get<Livro[]>("todo");
        setLivros(response.data);
      } catch (erro) {
        console.error("Erro ao buscar livros:", erro);
      }
    }

    carregarLivros();
  }, []);

  // função original de apagar (sem alertas)
  async function apagarLivro(id: number) {
    await api.delete(`delete/${id}`);
  }
  // ✅ nova função com confirmação
  async function confirmarApagar(id: number) {
    const confirmou = window.confirm(
      "Tem certeza que deseja apagar este livro?"
    );

    if (!confirmou) return;

    try {
      await apagarLivro(id);

      // remove da tela
      setLivros((prev) => prev.filter((livro) => livro.id !== id));

      // aviso de sucesso
      alert("Livro apagado com sucesso!");
    } catch (erro) {
      console.error("Erro ao apagar livro:", erro);
      alert("Erro ao apagar o livro.");
    }
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-bold">Lista de livros</h1>

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
                  <strong>ID:</strong> {livro.id}
                </p>

                <p className="mb-3">
                  <strong>Titulo:</strong> {livro.titulo}
                </p>
                <p className="mb-3">
                  <strong>numero de paginas:</strong> {livro.numPaginas}
                </p>
                <p className="mb-3">
                  <strong>Criado em :</strong> {livro.dataCriacao.getDate()}
                </p>
                 <p className="mb-3">
                  <strong>Finalizado:</strong> {livro.finalizado}
                </p>
              </div>

              {/* Footer */}
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => confirmarApagar(livro.id)}
                >
                  <i className="bi bi-plus-circle me-1"></i>
                  Finalizar(+)
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Livros;