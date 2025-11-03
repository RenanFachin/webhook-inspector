# Webhook Inspector

Sistema para inspeção e monitoramento de webhooks, composto por uma API REST e interface web.

## Tecnologias

### Backend (API)
- **Node.js** com **TypeScript**
- **Fastify** - Framework web
- **Drizzle ORM** - Gerenciamento de banco de dados
- **PostgreSQL** - Banco de dados
- **Zod** - Validação de schemas
- **Docker** - Containerização do banco de dados

## Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **pnpm** (versão 10.20.0 ou superior)
- **Docker** e **Docker Compose**

## Instalação

### 1. Clone o repositório

### 2. Instale as dependências
```bash
pnpm install
```

### 3. Configure o banco de dados

Inicie o PostgreSQL usando Docker:
```bash
cd api
docker-compose up -d
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na pasta `api`:
```bash
cd api
touch .env
```

Adicione as seguintes variáveis (ajuste conforme necessário):
```env
DATABASE_URL=postgresql://docker:docker@localhost:5432/webhooks_inspector
PORT=3333
```

### 5. Execute as migrations do banco de dados
```bash
cd api
pnpm db:migrate
```

## Executando o projeto

### Modo desenvolvimento

**Terminal 1 - API:**
```bash
cd api
pnpm dev
```
A API estará disponível em `http://localhost:3333`

**Terminal 2 - Web:**
```bash
cd web
pnpm dev
```
O frontend estará disponível em `http://localhost:5173`

## Scripts disponíveis

### API (`/api`)
```bash
pnpm dev          # Inicia o servidor em modo desenvolvimento
pnpm start        # Inicia o servidor em produção
pnpm db:generate  # Gera migrations do Drizzle
pnpm db:migrate   # Executa migrations
pnpm db:studio    # Abre o Drizzle Studio (interface visual do banco)
pnpm format       # Formata o código com Biome
```

### Web (`/web`)
```bash
pnpm dev          # Inicia o servidor de desenvolvimento
pnpm build        # Gera build de produção
pnpm preview      # Visualiza o build de produção
```

## Banco de dados

O projeto utiliza PostgreSQL via Docker. Para gerenciar o banco:

```bash
# Iniciar o banco
cd api
docker-compose up -d

# Parar o banco
docker-compose down

# Ver logs do banco
docker-compose logs -f

# Acessar o Drizzle Studio (interface visual)
pnpm db:studio
```

## Estrutura do projeto

```
webhook-inspector/
├── api/                    # Backend API
│   ├── src/
│   │   ├── db/            # Configuração e schemas do banco
│   │   ├── routes/        # Rotas da API
│   │   ├── server.ts      # Servidor principal
│   │   └── env.ts         # Validação de variáveis de ambiente
│   ├── docker-compose.yml # Configuração do PostgreSQL
│   └── package.json
├── web/                    # Frontend React
│   ├── src/
│   │   ├── app.tsx        # Componente principal
│   │   └── main.tsx       # Ponto de entrada
│   └── package.json
└── package.json           # Workspace raiz
```

## Documentação da API

Com a API rodando, acesse:
- **Swagger/OpenAPI**: `http://localhost:3333/docs`

## Desenvolvimento

Este é um monorepo gerenciado pelo **pnpm workspaces**. Cada pasta (`api` e `web`) é um workspace independente com suas próprias dependências.

