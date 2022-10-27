# Criando um Widget para seu site
## Nos arquivos *.js* deste projeto há as explicações em cada etapa do código
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
