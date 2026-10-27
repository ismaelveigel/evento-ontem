const API_URL = "http://localhost:3000";

async function tratarResposta(response) {
  if (response.ok) {
    return response.status === 204 ? null : response.json();
  }

  const erro = await response.json().catch(() => ({}));
  throw new Error(erro.mensagem || "Não foi possível concluir a operação.");
}

export async function listarInscricoes() {
  const response = await fetch(`${API_URL}/inscricoes`);
  return tratarResposta(response);
}

export async function criarInscricao(dados) {
  const response = await fetch(`${API_URL}/inscricoes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  });
  return tratarResposta(response);
}

export async function removerInscricao(id) {
  const response = await fetch(`${API_URL}/inscricoes/${id}`, { method: "DELETE" });
  return tratarResposta(response);
}
