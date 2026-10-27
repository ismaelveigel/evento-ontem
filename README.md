# Evento Ontem

Aplicação full stack para divulgação e inscrição no **Evento Ontem**, um evento fictício de tecnologia inspirado na ideia de um evento que já aconteceu... amanhã.

## Stack

- Backend: Node.js + Express
- Persistência: array em memória
- Frontend: React + Vite + React Router
- Estilização: CSS puro

## Requisitos

- Node.js 20.19+ (ou uma versão LTS mais recente)
- npm

## Como executar

Abra dois terminais na pasta do projeto.

### Backend

```bash
cd backend
npm install
npm run dev
```

API disponível em `http://localhost:3000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Site disponível em `http://localhost:5173`.

> A persistência atual é em memória. As inscrições são apagadas quando o backend é reiniciado.

## Endpoints

- `GET /inscricoes` — lista inscrições
- `POST /inscricoes` — cria uma inscrição
- `DELETE /inscricoes/:id` — remove uma inscrição

Exemplo de `POST /inscricoes`:

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "telefone": "(11) 99999-9999",
  "tipoIngresso": "estudante"
}
```

O campo `tipoIngresso` aceita apenas `estudante` ou `profissional`. O e-mail não pode ser repetido e `nome`, `email` e `tipoIngresso` são obrigatórios.

