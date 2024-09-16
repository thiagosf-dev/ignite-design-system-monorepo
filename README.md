# Componentes

[ ] Text
[ ] Heading
[ ] Box
[ ] Button
[ ] TextInput
[ ] TextArea
[ ] Checkbox
[ ] Avatar
[ ] MultiStep

criada a pasta `packages`.
criada a pasta `packages/tokens`.
o projeto foi iniciado dentro da pasta `tokens` com o comando `npm init -y`.
no arquivo `package.json` foi alterado para ficar assim `"name": "@ignite-ui/tokens"`, por motivo de publicação do pacote no repositório do **npm** com o padrão _@nome_instituição/nome_do_pacote_.
criada a pasta `src` para manter os fontes do projeto.
criado o arquivo `colors.ts` para representar os tokens das cores.

## Configuração do TypeScript

```shell
npx tsc --init
```

para converter os código `.js` em `.ts`

```shell
npx tsc
```

## Instalação do **TSUP** (conversão de arquivos .js para .ts)

```shell
npm i -D tsup
```

criação dos scripts no arquivo `package.json`

`"build": "tsup src/index.ts --format esm,cjs --dts"` (exporta o pacote para os formatos EcmaScript e Commons JS; exporta os arquivos de definição de tipagem)
`"dev": "tsup src/index.ts --format esm,cjs --dts --watch"` (roda no modo watch)

## Configurando MONOREPO (prática de colocar vários projetos dentro de um único repositório)

Na pasta root (raíz do repositório) `packages/` executar o comando `npm init -y` para representar o empacotamento de todos os outros projetos (repositórios). Esse não será publicado no **npm**, por isso o arquivo `package.json` é enxuto, apenas os outros projetos dentro dele serão publicados no repositório do **npm**

```json
{
  "private": true -> indica que esse pacote não será publicado no npm
  "workspaces": [
    "packages/*"
  ] -> indica a pasta aonde estarão os projetos do monorepo
}
```

## DEPLOY

### Instalar a dependência: `npm i @storybook/storybook-deployer@2` no monorepo _packages/docs-v6_

### Criar no _package.json_ o seguinte script: `"deploy-storybook": "storybook-to-ghpages",`

### Criar um repositório para o projeto no GitHub

### Commitar todas as alterações e fazer o push para o projeto criado
