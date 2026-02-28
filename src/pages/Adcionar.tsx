import { useState } from "react";
import api from "../services/Api";
export function Adcionar(){
const [titulo, setTitulo] = useState("");
const [nPaginas, setNpaginas] = useState<number | "">("");
const [loading, setLoading] = useState(false);

//adcionar livro
async function addLivro(titulo: string, nPaginas: number){
  try {
    await api.post("addLivro", {
      titulo: titulo,
      nPaginas,
    });
  } catch (erro: any) {
    console.error("🔥 ERRO BACKEND:", erro?.response?.data);
    throw erro;
  }
}
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (!titulo || nPaginas === "") {
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
    return(
        <><h1>adcionar Livro</h1><form onSubmit={handleSubmit} className="card p-3 mb-4 shadow-sm">
            <h5 className="mb-3">Cadastrar Livro</h5>

            <div className="row g-2">

                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)} />
                </div>

                <div className="col-md-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="paginas"
                        value={nPaginas}
                        onChange={(e) => setNpaginas(Number(e.target.value))} />
                </div>
                <div className="col-md-2 d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? "Salvando..." : "Cadastrar"}
                    </button>
                </div>

            </div>
        </form></>

    );
}
export default Adcionar;