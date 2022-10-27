import axios from "axios";
import { show } from "./views/nps";

const supportedAPI = ["nps"]; // todos os métodos suportados na api de widget (ex `mw('nps', { test: 'test' });`)

// primeiro parâmetro do mw referece ao método
// segundo parâmetro do mw referece aos parâmetros passados para este método

function app(window) {
  console.log("Starting script widget");

  // buscando o objeto global
  let globalObject = window[window["aw-widget"]];
  let queue = globalObject.q;
  if (queue) {
    // percorrendo array dos métodos startados no script do widget
    queue.forEach((q) => apiHandler(q[0], q[1]));
  }

  globalObject = apiHandler;
}

// Verificações para ver se pode exibir o widget na página
async function checkDisplayNPSWidget(params) {
  // verifica na api de widgets se pode exibir conteúdo
  const { data } = await axios.get(
    "https://run.mocky.io/v3/f6f9e956-534e-4473-b0de-265ac01f5bcc"
  );

  if (data.isView) {
    // exibe o html montado na função show()
    show(params);
  } else {
    alert("Não exibiu o widget");
  }
}

function apiHandler(api, params) {
  // verifica se api foi passada
  if (!api) throw Error("API method required");

  // verifica se o widget suporta api passada no script de adição do widget
  api = api.toLowerCase();
  if (supportedAPI.includes(api) === false)
    throw Error(`Method ${api} is not supported`);

  // adiciona implementação das api's passadas
  switch (api) {
    case "nps":
      checkDisplayNPSWidget(params);
      break;
    default:
      console.warn(`No handler defined for ${api}`);
  }
}

app(window);
