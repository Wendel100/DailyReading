import { useState } from "react";
import api from "../services/Api";
import "../css/Adcionar.css";
export function Adcionar(){
const [titulo, setTitulo] = useState("");
const [nPaginas, setNpaginas] = useState<number | "">("");
const [loading, setLoading] = useState(false);

//adcionar livro
async function addLivro(titulo: string, nPaginas: number){
  try {
    await api.post("addLivro", {
  titulo: titulo,
  numPaginas: nPaginas,
});
  } catch (erro: any) {
    console.error("🔥 ERRO BACKEND:", erro?.response?.data);
    throw erro;
  }
}
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (titulo === "" || nPaginas === "") {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    setLoading(true);

    await addLivro(titulo, Number(nPaginas));

    alert("Livro cadastrado com sucesso!");

    // limpa formulário
    setTitulo("");
    setNpaginas("");
  } catch {
    alert("Erro ao cadastrar livro.");
  } finally {
    setLoading(false);
  }
}
  return (
  <div className="page-add-livro">
    <form
      onSubmit={handleSubmit}
      className="card form-card mb-4"
    >
      <h4 className="mb-3"><i className="bi bi-plus-square-fill"></i> Livro</h4>

      <div className="row g-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="paginas"
            value={nPaginas}
            onChange={(e) => setNpaginas(Number(e.target.value))}
          />
        </div>

        <div className="col-md-2 d-grid">
          <button
            type="submit"
            className="btn btn-primary btn-submit-livro"
            disabled={loading}
          >
            {loading ? "Salvando..." : "Cadastrar"}
          </button>
        </div>
      </div>
    </form>
  </div>
);
}
export default Adcionar;