import { useState } from "react";
import api from "../services/Api";
export function Adcionar(){
const [name, setNome] = useState("");
const [idade, setIdade] = useState<number | "">("");
const [setorId, setSetorId] = useState<number | "">("");
const [loading, setLoading] = useState(false);

//adcionar livro
async function addLivro(nome: string, idade: number, setorId: number) {
  try {
    await api.post("add", {
      name: nome,
      idade,
      setorId,
    });
  } catch (erro: any) {
    console.error("🔥 ERRO BACKEND:", erro?.response?.data);
    throw erro;
  }
}
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (!name || idade === "" || setorId === "") {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    setLoading(true);

    await addLivro(name, Number(idade), Number(setorId));

    alert("Livro cadastrado com sucesso!");

    // limpa formulário
    setNome("");
    setIdade("");
    setSetorId("");

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
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="col-md-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Idade"
                        value={idade}
                        onChange={(e) => setIdade(Number(e.target.value))} />
                </div>

                <div className="col-md-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Setor ID"
                        value={setorId}
                        onChange={(e) => setSetorId(Number(e.target.value))} />
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