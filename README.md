# Aprendendo React + Vite + TypeScript

Este repositório contém exercícios práticos e projetos com **React moderno com Vite e TypeScript**, focando em:

- Componentes funcionais
- Reutilização com Props
- Tipagem forte com TypeScript

---

## Lista de Exercícios

### Exercício 1: `CartaoDePerfil`

**Objetivo**: Criar um componente que exibe nome, idade e cidade de uma pessoa.

**Requisitos:**
- Nome do componente: `CartaoDePerfil`
- Props:
  - `nome: string`
  - `idade: number`
  - `cidade: string`
- Use o componente no `App.tsx` com pelo menos 2 pessoas diferentes

---

### Exercício 2: `BotaoPersonalizado`

**Objetivo**: Criar um botão com texto e cor de fundo passados por props.

**Requisitos:**
- Nome do componente: `BotaoPersonalizado`
- Props:
  - `texto: string`
  - `cor: string`
- Use a prop `cor` para definir o `backgroundColor` com `style`
- Use 3 botões com cores diferentes

---

### Exercício 3: `Mensagem`

**Objetivo**: Criar um componente que exibe uma frase simples. Se for importante, mostrar em negrito.

**Requisitos:**
- Nome do componente: `Mensagem`
- Props:
  - `texto: string`
  - `importante: boolean`
- Se `importante` for `true`, use `<strong>`, senão apenas `<p>`

---

### Exercício 4 (DESAFIO): `Tarefa` + `ListaDeTarefas`

**Objetivo**: Criar uma lista de tarefas com um ícone ✔️ ou ❌ indicando se foi concluída.

**Requisitos:**
- Nome do componente: `Tarefa`
- Props:
  - `descricao: string`
  - `concluida: boolean`
- Exibir ✔️ se `concluida === true`, ❌ caso contrário
- Criar uma lista de 3 tarefas no `App.tsx`

---

### Exercício 5: `ImagemDePerfil`

**Objetivo**: Mostrar a foto de uma pessoa com o nome abaixo, usando uma borda arredondada.

**Requisitos:**
- Nome do componente: `ImagemDePerfil`
- Props:
  - `nome: string`
  - `fotoUrl: string`
- Estilize a imagem com borda circular
- Mostre o nome abaixo da imagem

## Contato

Se quiser entrar em contato, colaborar ou tirar dúvidas:

- **Autor:** lolkajigoless  
- **GitHub:** [https://github.com/lolkajigoless](https://github.com/lolkajigoless)   
- **Email:** abracadabraalakazam92@gmail.com*  

