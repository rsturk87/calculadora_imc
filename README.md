# Calculadora de IMC

Este é um projeto em React que calcula o Índice de Massa Corporal (IMC) a partir dos dados de altura e peso informados pelo usuário. A aplicação utiliza o Vite como bundler, Bootstrap para estilização e react-input-mask para melhorar a experiência de input na inserção da altura.

## Funcionalidades

- **Cálculo do IMC:** Recebe os dados de altura e peso e calcula o IMC utilizando a fórmula:  
  \[
  \text{IMC} = \frac{\text{peso}}{\text{altura}^2}
  \]
- **Classificação do IMC:** Classifica o resultado em categorias como:
  - Abaixo do peso
  - Peso normal
  - Sobrepeso
  - Obesidade
- **Input com máscara:** Utiliza `react-input-mask` para formatar automaticamente o input da altura (ex.: transforma `170` em `1,70` conforme o padrão definido).
- **Estilização responsiva:** Interface construída com Bootstrap para garantir uma boa experiência visual e responsividade.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [react-input-mask](https://github.com/sanniassin/react-input-mask)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomenda-se a versão LTS)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio