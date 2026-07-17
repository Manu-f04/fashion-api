# 👔 Fashion API

Uma API RESTful completa para gerenciamento de roupas, desenvolvida com Node.js, Express e MongoDB.

---

## 📋 Índice

- [Requisitos](#-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Como Executar](#-como-executar)
- [Endpoints](#-endpoints)
- [Testes no Postman](#-testes-no-postman)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Modelo de Dados](#-modelo-de-dados)

---

## ✅ Requisitos

Certifique-se de ter instalado:
- **Node.js** (v14 ou superior)
- **npm** ou **yarn**
- **MongoDB** (local ou Atlas)

---

## 📦 Instalação

### 1. Clonar o repositório
```bash
cd fashion-api
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
MONGO_URI=mongodb://localhost:27017/fashion-api
PORT=3000
```

**Ou use MongoDB Atlas:**
```env
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/fashion-api
PORT=3000
```

---

## 🚀 Como Executar

### Modo desenvolvimento (com auto-reload)
```bash
npm run dev
```

### Modo produção
```bash
npm start
```

Se tudo funcionar, você verá:
```
✅ Conectado ao MongoDB!
Servidor rodando na porta 3000
```

---

## 🔌 Endpoints

### 1️⃣ Health Check
Verifica se a API está funcionando:

```http
GET http://localhost:3000/
```

**Resposta esperada:**
```
Fashion API está funcionando!
```

---

### 2️⃣ CRUD de Roupas

#### ➕ Criar Roupa (POST)
```http
POST http://localhost:3000/roupas
Content-Type: application/json

{
  "nome": "Camiseta Básica",
  "categoria": "Camiseta",
  "cor": "Azul",
  "tamanho": "M",
  "preco": 49.90,
  "marca": "Nike"
}
```

**Status esperado:** `201 Created`

---

#### 📖 Listar Todas as Roupas (GET)
```http
GET http://localhost:3000/roupas
```

**Resposta esperada:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "nome": "Camiseta Básica",
    "categoria": "Camiseta",
    "cor": "Azul",
    "tamanho": "M",
    "preco": 49.90,
    "marca": "Nike",
    "__v": 0
  }
]
```

---

#### 🔍 Obter Roupa por ID (GET)
```http
GET http://localhost:3000/roupas/507f1f77bcf86cd799439011
```

**Status esperado:** `200 OK`

---

#### ✏️ Atualizar Roupa (PUT)
```http
PUT http://localhost:3000/roupas/507f1f77bcf86cd799439011
Content-Type: application/json

{
  "preco": 39.90,
  "cor": "Vermelho"
}
```

**Status esperado:** `200 OK`

---

#### 🗑️ Deletar Roupa (DELETE)
```http
DELETE http://localhost:3000/roupas/507f1f77bcf86cd799439011
```

**Resposta esperada:**
```json
{
  "mensagem": "Roupa excluída!"
}
```

---

## 📧 Testes no Postman

### 1. Importar a Coleção
- Abra o Postman
- Clique em **Import**
- Selecione o arquivo `Fashion-API.postman_collection.json`
- A coleção será importada automaticamente ✨

### 2. Configurar Variáveis
A coleção já vem com as variáveis pré-configuradas:
- `base_url`: `http://localhost:3000`
- `roupa_id`: Preenchido automaticamente

### 3. Executar os Testes
- Clique em cada endpoint
- Clique em **Send**
- Veja os testes rodando na aba **Test Results**

### 4. Testes Inclusos
Cada endpoint possui testes que validam:
- ✅ Status HTTP correto
- ✅ Estrutura da resposta
- ✅ Campos obrigatórios
- ✅ Dados corretos

---

## 📁 Estrutura do Projeto

```
fashion-api/
├── models/
│   └── Roupa.js              # Schema do MongoDB
├── routes/
│   └── roupas.js             # Endpoints da API
├── server.js                 # Arquivo principal
├── package.json              # Dependências
├── .env                       # Variáveis de ambiente (não comitar)
├── .gitignore                # Arquivos ignorados
├── README.md                 # Este arquivo
├── POSTMAN_IMPORT_GUIDE.md   # Guia de importação
└── Fashion-API.postman_collection.json  # Coleção Postman
```

---

## 📊 Modelo de Dados

### Roupa
```javascript
{
  _id: ObjectId,                    // ID único do MongoDB
  nome: String (obrigatório),       // Ex: "Camiseta Básica"
  categoria: String (obrigatório),  // Ex: "Camiseta"
  cor: String (obrigatório),        // Ex: "Azul"
  tamanho: String (obrigatório),    // Ex: "M", "G", "P"
  preco: Number (obrigatório),      // Ex: 49.90
  marca: String (obrigatório),      // Ex: "Nike"
  __v: Number                       // Versão (controlado pelo Mongoose)
}
```

---

## 🛠️ Dependências

| Dependência | Versão | Função |
|-------------|--------|--------|
| express | ^5.2.1 | Framework web |
| mongoose | ^8.24.1 | ODM para MongoDB |
| mongodb | ^7.5.0 | Driver do MongoDB |
| dotenv | ^17.4.2 | Gerenciar variáveis de ambiente |
| nodemon | ^3.1.14 | Auto-reload em desenvolvimento |

---

## 🐛 Solução de Problemas

### ❌ Erro: "Conexão recusada no MongoDB"
**Solução:** Verifique se:
- MongoDB está rodando (`mongod` no terminal)
- A `MONGO_URI` está correta no `.env`
- A URL de conexão tem permissão de acesso

### ❌ Erro: "PORT já está em uso"
**Solução:** Mude a porta no `.env`:
```env
PORT=3001
```

### ❌ Erro: "Cannot find module"
**Solução:** Reinstale as dependências:
```bash
npm install
```

---

## 📝 Exemplo de Uso Completo

### 1. Inicie o servidor
```bash
npm run dev
```

### 2. Crie uma roupa (POST)
```bash
curl -X POST http://localhost:3000/roupas \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Calça Jeans",
    "categoria": "Calça",
    "cor": "Azul Escuro",
    "tamanho": "36",
    "preco": 129.90,
    "marca": "Levi'\''s"
  }'
```

### 3. Obtenha o ID da resposta e use em outros endpoints
```bash
curl http://localhost:3000/roupas/ID_OBTIDO_ACIMA
```

---

## ✨ Licença

Este projeto foi desenvolvido para fins educacionais.

---

## 👨‍💼 Suporte

Dúvidas? Verifique:
1. Se o MongoDB está conectado (✅ Conectado ao MongoDB!)
2. Se a porta está correta (padrão: 3000)
3. Se o `.env` está configurado
4. Se as dependências foram instaladas (`npm install`)

**Boa sorte! 🚀**
