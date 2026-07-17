# Importar Collection no Postman

## Arquivo da Coleção
O arquivo `Fashion-API.postman_collection.json` contém todos os endpoints da API Fashion com testes pré-configurados.

## Como Importar

### Método 1: Via Interface do Postman
1. Abra o **Postman**
2. Clique em **Import** (canto superior esquerdo)
3. Selecione a aba **File**
4. Escolha o arquivo `Fashion-API.postman_collection.json`
5. Clique em **Import**

### Método 2: Drag and Drop
1. Abra o **Postman**
2. Arraste o arquivo `Fashion-API.postman_collection.json` para a área do Postman
3. Confirmea importação

## Configurar Variáveis

Após importar, configure as variáveis globais:

1. Acesse **Environments** (ícone de engrenagem)
2. Clique em **Manage Environments**
3. Procure por **Fashion API** ou crie uma nova
4. Configure as variáveis:
   - `base_url`: `http://localhost:3000` (ou sua URL)
   - `roupa_id`: deixe em branco (será preenchido automaticamente)

## Endpoints da Coleção

### 1. Health Check
- **GET** `/` - Testa se a API está funcionando

### 2. Roupas (CRUD)

#### Criar Roupa
- **POST** `/roupas`
- Body (exemplo):
```json
{
  "nome": "Camiseta Básica",
  "categoria": "Camiseta",
  "cor": "Azul",
  "tamanho": "M",
  "preco": 49.90,
  "marca": "Nike"
}
```

#### Listar Todas as Roupas
- **GET** `/roupas`

#### Obter Roupa por ID
- **GET** `/roupas/:id`
- Usa a variável `roupa_id` capturada automaticamente

#### Atualizar Roupa
- **PUT** `/roupas/:id`
- Body (exemplo):
```json
{
  "preco": 39.90,
  "cor": "Vermelho"
}
```

#### Deletar Roupa
- **DELETE** `/roupas/:id`

## Testes Inclusos

Cada endpoint possui testes automáticos que validam:
- ✅ Status HTTP correto
- ✅ Estrutura da resposta JSON
- ✅ Presença de campos obrigatórios
- ✅ Dados retornados conforme esperado

### Como Executar os Testes

1. Clique em **Runner** no Postman
2. Selecione a coleção **Fashion API**
3. Configure o número de iterações
4. Clique em **Start Test Run**

## Fluxo de Testes Recomendado

1. **Health Check** - Verificar se API está online
2. **Criar Roupa** - Cria e armazena o ID automaticamente
3. **Listar Todas** - Valida se a roupa foi criada
4. **Obter por ID** - Testa busca específica
5. **Atualizar** - Modifica a roupa criada
6. **Deletar** - Remove a roupa do banco

## Variáveis Disponíveis

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `base_url` | URL base da API | `http://localhost:3000` |
| `roupa_id` | ID da roupa criada | Preenchido automaticamente |

## Dicas

- Os testes capturam o `_id` automaticamente após criar uma roupa
- Sempre execute "Criar Roupa" antes dos outros endpoints para popular o ID
- Customize os dados nos bodies conforme necessário
- Você pode usar o Runner para executar múltiplas requisições em sequência
