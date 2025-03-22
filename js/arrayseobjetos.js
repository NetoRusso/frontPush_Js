const vetor = [5, 10, 19, 24, 55];

function somaArray(array) {
  let soma = 0;

  array.forEach((item) => {
    soma += item;
  })

  return soma;
}

function mediaArray(array) {
  // let media = 0;
  // let quantidade = 0;

  // array.forEach((item) => {
  //   media += item;
  //   quantidade++;
  // })

  // return media / quantidade;

  return somaArray(array) / (array.length);
}


const calculaArray = {

  "soma": (array) => {
    let soma = 0;
    array.forEach((item) => {
      soma += item;
    })
    return soma;
  },

  "media": (array) => {
    return calculaArray.soma(array) / (array.length);
  },

  "reduzir": (array) => {
    let reduzido = 0;
    array.forEach((item, index) => {
      if (index === 0) {
        reduzido += item;
      } else {
        reduzido -= item;
      }
    }
    )
    return reduzido;
  },

  "potencia": (array) => {
    let potencia = 1;
    array.forEach((item) => {
      potencia = potencia * item;
    })
    return potencia;
  },

  "divisao": (array) => {
    let total;
    array.forEach((item, index) => {
      if (index === 0) {
        total = item;
      } else {
        total = total / item;
      }
    })
    return total;
  },

  "ordenarCrescente": (array) => {
    return array.sort((a, b) => a - b);
  },

  "ordenarDecrescente": (array) => {
    return array.sort((a, b) => b - a);
  },
}

console.log(vetor);
console.log("soma: " + calculaArray.soma(vetor));
console.log("media: " + calculaArray.media(vetor));
console.log("reduzir: " + calculaArray.reduzir(vetor));
console.log("potencia: " + calculaArray.potencia(vetor).toLocaleString('pt-BR'));
console.log("divisao: " + calculaArray.divisao(vetor));

let vetor1Resultante = [
  { "Vetor": vetor },
  { "soma": calculaArray.soma(vetor) },
  { "media": calculaArray.media(vetor) },
  { "reduzir": calculaArray.reduzir(vetor) },
  { "potencia": calculaArray.potencia(vetor) },
  { "divisao": calculaArray.divisao(vetor) }
];

// console.log( vetor1Resultante);


let nomes = JSON.parse(localStorage.getItem("nomes")) || [
  "João",
  "Maria",
  "Pedro",
  "Carol",
];

const resultado = document.querySelector(".content h3");
const input = document.querySelector("#seach");
const add = document.querySelector("#add");
const listaBox = document.querySelector(".content-list");

const atualizarLocalStorage = () => {
  localStorage.setItem("nomes", JSON.stringify(nomes));
};

const formatarNome = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const renderLista = (lista) => {
  listaBox.innerHTML = "";
  lista.forEach((nome, index) => {
    const liElement = document.createElement("li");
    liElement.textContent = nome;

    const delButton = document.createElement("button");
    delButton.textContent = "x";
    delButton.classList.add("delLi");
    delButton.addEventListener("click", () => {
      nomes.splice(index, 1);
      atualizarLocalStorage();
      renderLista(nomes);
    });

    liElement.appendChild(delButton);
    listaBox.appendChild(liElement);
  });
};

const limparRealceLista = () => {
  document.querySelectorAll(".content-list li").forEach((li) => {
    li.classList.remove("aqui");
  });
};

input.addEventListener("input", (e) => {
  const entrada = formatarNome(e.target.value);
  if (entrada.length < 3) {
    resultado.innerText = "Existe ou não Existe ?";
    limparRealceLista();
    add.disabled = true;
    return;
  }

  const listaFormatada = nomes.map(formatarNome);
  const index = listaFormatada.indexOf(entrada);

  if (index !== -1) {
    resultado.innerText = "Já está na lista";
    limparRealceLista();
    document.querySelectorAll(".content-list li")[index]?.classList.add("aqui");
    add.disabled = true;
  } else {
    resultado.innerText = "Não está na Lista. Deseja adicionar?";
    add.disabled = entrada.length <= 3;
    limparRealceLista();
  }
});

add.addEventListener("click", () => {
  const entrada = formatarNome(input.value);
  if (!nomes.map(formatarNome).includes(entrada) && entrada.length > 3) {
    nomes.push(input.value);
    atualizarLocalStorage();
    renderLista(nomes);
    resultado.innerText = "Existe ou não Existe ?";
    input.value = "";
    add.disabled = true;
  }
});

add.disabled = true;
renderLista(nomes);

