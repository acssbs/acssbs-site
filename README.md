# Site ACSSBS

Site da Associação Comunitária de Surdos de São Bento do Sul (ACSSBS) desenvolvido com Next.js.


## Requisitos

Antes de executar o projeto, verifique se você tem os seguintes requisitos instalados:

- Git
- Node.js

### Instalação

1. Para instalar o Git, visite o site oficial do Git e siga as instruções de instalação para o seu sistema operacional: [Git](https://git-scm.com/)

2. Para instalar o Node.js, visite o site oficial do Node.js e faça o download da versão recomendada para o seu sistema operacional: [Node.js](https://nodejs.org/), instale a versão LTS (Long-Term Support) ou (Suporte de Longo Prazo).

> Geralmente, as versões LTS são consideradas mais estáveis e confiáveis, sendo recomendadas para ambientes de produção e uso a longo prazo.

### Verificação

Após a instalação, você pode verificar se o Git e o Node.js estão corretamente instalados.

Abra o seu terminal e execute os seguintes comandos:

```bash
git --version
node --version
```


## Clonando o Repositório

Para obter uma cópia local deste projeto, você precisará clonar o repositório do GitHub. Siga as etapas abaixo:

1. Abra o terminal ou a linha de comando.

2. Navegue até o diretório onde você deseja clonar o repositório.

3. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/acssbs/acssbs-site.git acssbs-site
```

Isso irá criar uma nova pasta chamada "acssbs-site" e baixar todos os arquivos do repositório para essa pasta.


## Executando o Projeto

Antes de executar o projeto, você precisará instalar as dependências necessárias. Certifique-se de ter o Node.js instalado em seu sistema antes de prosseguir. Siga as etapas abaixo:

1. Abra o terminal ou a linha de comando.

2. Navegue até o diretório raiz do projeto `acssbs-site` usando o comando `cd acssbs-site`.

3. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

Isso irá baixar todas as dependências listadas no arquivo package.json e criará uma pasta `node_modules` com os pacotes instalados.

### Executando o Projeto no Modo de Desenvolvimento

Após a conclusão da instalação, você pode executar o projeto no modo de desenvolvimento.

Para fazer isso, execute o seguinte comando:

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Next.js e você poderá acessar o projeto em seu navegador no endereço [http://localhost:3000](http://localhost:3000).

Durante o modo de desenvolvimento, o Next.js criará uma pasta chamada `.next` para armazenar os arquivos do site.

O Next.js detecta automaticamente as alterações feitas nos arquivos do projeto e atualiza os arquivos correspondentes na pasta .next. Isso permite que as modificações sejam enviadas automaticamente para o navegador, facilitando o processo de desenvolvimento.

### Executando o Projeto no Modo de Produção

Quando estiver pronto para implantar o projeto em um ambiente de produção, siga as etapas abaixo:

1. Abra o terminal ou a linha de comando.

2. Navegue até o diretório raiz do projeto "acssbs-site" usando o comando `cd acssbs-site`.

3. Execute o seguinte comando para criar uma versão otimizada do projeto para produção:

```bash
npm run build
```

Isso irá compilar e otimizar todos os arquivos do projeto e criar, assim como no modo de desenvolvimento, será criado uma pasta chamada `.next`, com os arquivos resultantes.

4. Após a conclusão do processo de build, você pode iniciar o projeto no modo de produção. Execute o seguinte comando:

```bash
npm run start
```

Isso iniciará o servidor do Next.js no modo de produção e você poderá acessar o projeto em seu navegador no endereço [http://localhost:3000](http://localhost:3000).

O modo de produção, o Next.js utilizará os arquivos otimizados que estão dentro da pasta `.next`, proporcionando um melhor desempenho e eficiência.