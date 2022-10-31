# Criando um Widget para seu site

## Nos arquivos _.js_ deste projeto há as explicações em cada etapa do código

- O arquivo inicial é o `main.js`
- Dentro da pasta de `views` há os arquivos:
  - **index.html** -> contém o html daquela `view`;
  - **styles.css** -> contém a estilização daquela `view`;
  - **index.js** -> contém o controle da **DOM** utilizando **JavaScript** e a função inicial da `view`.

## Para facilitar a criação de uma CDN para disponibilização do widget, foi criado uma pasta Terraform

**Terraform é utilizado para provisionar a infraestrutura com código**

Recentemente foi adicionado o uso do `remote-state` para controlar o estado da infra remotamente, para entender mais sobre, basta ler o seguinte artigo https://andrewronscki.medium.com/terraform-com-remote-state-e-trabalhando-com-multi-regi%C3%B5es-utilizando-workspace-596a3fb44463.

No exemplo que trouxemos para este projeto, estamos provisionando um **bucket S3** com acesso público para leitura. Para você conseguir provisionar a sua infra, é necessário a instalação da **AWS-CLI** e do **Terraform** na sua máquina, tendo esses dois instalados basta você:

- Ir na pasta `terraform` no seu terminal;
- Digitar o comando `terraform init`:
  - Garanta que seu terraform está dentro da versão utilizada no código, para isso basta ir no arquivo `main.tf`, ir dentro da configuração do **terraform** e verificar se seu terraform está dentro da versão requirida no `required_version`.
- Ir no arquivo `s3.tf` e alterar o nome do bucket para criação;
- Digitar o comando `terraform apply` para provisionar infraestrutura:
  - Nesta etapa ele irá mostrar o que ele irá fazer e perguntar se você autoriza ele a provisionar infraestrutura, se sim, você deve digitar `yes`no terminal quando ele pedir.

## CI-CD da aplicação utilizando github actions

Dentro da pasta `.github/workflows` há um arquivo chamado `pipeline.yml` que se trata da escrita da automatização do processo de _deploy_ do **Widget**, para isso no seu projeto do **GitHub** ou **GitLab** você deve configurar duas **Secrets**, uma para **AWS_ACCESS_KEY_ID** e outra para **AWS_SECRET_ACCESS_KEY**:

- A alteração que você deve fazer neste arquivo é somente o nome do `bucket S3` na linha **35**

```
run: aws s3 sync ./dist/ s3://{seu bucket aqui} --delete --acl public-read
```

## Para testar, no seu HTML importe o script desta forma:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Teste</title>

    <script>
      (function (w, d, s, o, f, js, fjs) {
        w["aw-widget"] = o;
        w[o] =
          w[o] ||
          function () {
            (w[o].q = w[o].q || []).push(arguments);
          };
        (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
        js.id = o;
        js.src = f;
        js.async = 1;
        fjs.parentNode.insertBefore(js, fjs);
      })(
        window,
        document,
        "script",
        "mw",
        "URL do seu Widget (no meu caso utilizei a AWS S3 para armazenar meu Widget"
      );
      // funções do widget -> mw: MediaWiki - é um objeto global contendo vários métodos e propriedades Javascript , que outros módulos javascript podem usar. Se, por exemplo, você estiver adicionando código Javascript a MediaWiki:Common.js, sempre poderá acessar a mwvariável.
      mw("nps", { test: "test" });
    </script>
  </head>
  <body>
    <h1>Teste</h1>
  </body>
</html>
```
