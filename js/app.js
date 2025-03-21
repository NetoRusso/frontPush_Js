// const aulas = document.querySelectorAll('span');

// aulas.forEach((aula, index) => {
//   aula.classList.add(`span-${index + 1}`);
// });

// console.log(aulas);


// ============================================================================
{
  // const titulo = document.querySelector('.count-title');
  // const label = document.querySelector('.count-label');
  // const limite = document.querySelector('#count');
  // const btn = document.querySelector('#count-btn');
  // const resultado = document.querySelector('.resultado');
  // const valor = document.querySelector('#count-value');
  // const tabela = document.querySelector(".tabela");
  // const acumulado = document.querySelector(".acumulado");

  // let items = document.querySelectorAll('grid-item');

  // let acumuladoValor = 0;

  // let j = 0;

  // btn.addEventListener("click", () => {


  //   for (let i = 0; i <= limite.value; i++) { 
  //     if ( i > 0) {
  //       tabela.innerHTML += `<div class="grid-item item-${i}" onClick="depositar(${i})" data-value = ${i} > <p> ${i.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </p> </div>`;
  //       j += i;
  //     }
  //   }

  //   valor.innerText = j.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  //   resultado.style.display = "block";
  //   btn.style.display = "none";
  //   limite.style.display = "none";
  //   label.style.display = "none";
  //   titulo.innerText = 'Poupando...';

  //   acumulado.innerText = `
  //     Até o momento você juntou ${acumuladoValor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} em sua poupança. \n Até o momento atingiu ${(acumuladoValor/j*100).toFixed(2)}% da sua Meta`;
  //   ;

  // })

  // const depositar = (item) => {
  //   const valor = document.querySelector(`.item-${item}`);
  //   acumuladoValor += Number(valor.dataset.value);
  //   console.log(acumuladoValor);
  //   acumulado.innerText = `
  //     Até o momento você juntou ${acumuladoValor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} em sua poupança. \n Até o momento atingiu ${(acumuladoValor/j*100).toFixed(2)}% da sua Meta`;
  //   ;
  //   valor.classList.add('active');
  // }

}
// ===============================================================================//

const titulo = document.querySelector('.titulo');
const aulas = document.querySelectorAll('.aula-index');


let is = 0;

const passarAula = () => {
  if (is === 0) {
    aulas[aulas.length - 1].classList.remove('active');
  }

  if (is > 0) {
    aulas[is - 1].classList.remove('active');
  }

  aulas[is].classList.add('active');
  is++;
  if (is >= aulas.length) {
    is = 0;
  }
}

const selecionarAula = (event) => {
  event.target.classList.toggle('active');
  is = 0;
}


titulo.addEventListener("click", passarAula);

aulas.forEach(aula => {
  aula.addEventListener("click", selecionarAula);
})

// titulo.setAttribute('test', 'e Agora?');

// titulo.setAttribute('data-test', 'Novo Atributo');

//estilizando o link por js
// {
// let link = document.createElement('a');

// link.href = "https://www.google.com";
// let conteudo = document.createTextNode("Google");
// link.target = "_blank";


// Object.assign(link.style, {
//   "display": "flex",
//   "justifyContent": "center",
//   "alignItems": "center",
//   "width": "128px",
//   "height": "32px",
//   "borderRadius": "8px",
//   "fontSize": "24px",
//   "fontWeight": "600",
//   "textDecoration": "none",
//   "color": "#f2f2f2",
//   "backgroundColor": "#1f8063",
//   "cursor": "pointer",
//   "userSelect": "none",
//   "transition": "all 200ms ease-in-out",
//   "textAlign": "center",
// })

// link.addEventListener("mouseover", () => {
//   Object.assign(link.style, {
//     "display": "flex",
//     "justifyContent": "center",
//     "alignItems": "center",
//     "width": "128px",
//     "height": "32px",
//     "borderRadius": "8px",
//     "fontSize": "24px",
//     "fontWeight": "600",
//     "textDecoration": "none",
//     "color": "#1a1a1a",
//     "cursor": "pointer",
//     "userSelect": "none",
//     "transition": "all 200ms ease-in-out",
//     "textAlign": "center",
//     "scale": ".9",
//     "backgroundColor": "#cccccc",
//     "Transition": "all 200ms ease-in-out",
//   })
// })

// link.addEventListener("mouseout", () => {
//   Object.assign(link.style, {
//     "display": "flex",
//     "justifyContent": "center",
//     "alignItems": "center",
//     "width": "128px",
//     "height": "32px",
//     "borderRadius": "8px",
//     "fontSize": "24px",
//     "fontWeight": "600",
//     "textDecoration": "none",
//     "color": "#f2f2f2",
//     "backgroundColor": "#1f8063",
//     "scale": "1",
//     "cursor": "pointer",
//     "userSelect": "none",
//     "transition": "all 200ms ease-in-out",
//     "textAlign": "center",
//     "Transition": "all 200ms ease-in-out",
//   })
// })



// link.appendChild(conteudo);

// const container = document.getElementById('app');

// container.appendChild(link);

// const box = document.querySelector('.box');


// // console.log(media);

// function responsive() {
//   const media = window.matchMedia('(max-width: 540px)');

//   if (media.matches) {
//     console.log('mobile');
//   } else {
//     console.log("desktop");
//   }
// }


// // window.addEventListener("resize", responsive);

// const rotate = (e) => {
//   e.target.classList.toggle('active');
// }

// box.addEventListener("dblclick", rotate);

// function callback(e) {
//   // console.log(e.key);

//   if (e.key === 'r') {
//     box.classList.add('r')
//     box.classList.remove('g', 'b', 'y')
//   } else if (e.key === 'g') {
//     box.classList.add('g')
//     box.classList.remove('r', 'b', 'y')
//   } else if (e.key === 'b') {
//     box.classList.add('b')
//     box.classList.remove('r', 'g', 'y')
//   } else if (e.key === 'y') {
//     box.classList.add('y')
//     box.classList.remove('r', 'g', 'b')
//   } else {
//     box.classList.remove('r', 'g', 'b', 'y')
//   }
// }

// window.addEventListener("keydown", callback);

// }

//JSON
{
///JSON.parse(); // Transforma o texto JSON em um objeto
///JSON.stringify(); // Transforma um objeto em um texto JSON

// const json = JSON.parse('{"id": "1", "nome": "Notebook Dell", "Modelo": "Gaming", "Quantidade": 5}');

// console.log(json);

// function produto(id, nome, cor, quantidade) {
//   this.id = id;
//   this.nome = nome;
//   this.cor = cor;
//   this.quantidade = quantidade;
// }

// const caneta = new produto(1, "caneta", "Azul", 10);

// console.log(caneta);

// const canetaJson = JSON.stringify(caneta);

// console.log(canetaJson);
}

const container2 = document.querySelector(".container-2");

//AJAX
{
// let xhr = new XMLHttpRequest();

// xhr.open("GET", "https://api.github.com/users/NetoRusso");
// xhr.send(null);



// xhr.onreadystatechange = () => {
//   if(xhr.readyState == 4) {
//     const data = JSON.parse(xhr.responseText);
//     const img = document.createElement("img");
//     img.src = data.avatar_url;
//     container2.appendChild(img);
//     img.style.width = "200px";
//     img.style.height = "200px";
//     img.style.borderRadius = "50%";
//     img.style.border = "5px solid #f2f2f2";
//     img.style.margin = "0 auto";
//     img.style.cursor = "pointer";

//     img.addEventListener("mouseover", () => {
//       img.style.filter = "grayscale(100%)";
//       img.style.scale = "0.9";
//       img.style.transition = "all 500ms ease-in-out";
//     })

//     img.addEventListener("mouseout", () => {
//       img.style.filter = "none";
//       img.style.scale = "1";
//       img.style.transition = "all 500ms ease-in-out";
//     })

//     img.addEventListener("click", () => {
//       window.open(data.html_url, "_blank");
//     })

//   }
// }

}

let minhaPromise = function () {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.gihub.com/users/NetoRusso");
    xhr.send(null);

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {

        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro!');
        }
      }
    }
  })
}

function seErro() {
  const img = document.createElement("img");
    img.src = "https://compras.wiki.ufsc.br/images/5/56/Erro.png";
    container2.appendChild(img);
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.borderRadius = "50%";
    // img.style.border = "5px solid #f2f2f2";
    img.style.margin = "0 auto";
    // img.style.cursor = "pointer";
}

minhaPromise()
  .then(function (response) {
    const data = response;
    const img = document.createElement("img");
    img.src = data.avatar_url;
    container2.appendChild(img);
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.borderRadius = "50%";
    img.style.border = "5px solid #f2f2f2";
    img.style.margin = "0 auto";
    img.style.cursor = "pointer";

    img.addEventListener("mouseover", () => {
      img.style.filter = "grayscale(100%)";
      img.style.scale = "0.9";
      img.style.transition = "all 500ms ease-in-out";
    })

    img.addEventListener("mouseout", () => {
      img.style.filter = "none";
      img.style.scale = "1";
      img.style.transition = "all 500ms ease-in-out";
    })

    img.addEventListener("click", () => {
      window.open(data.html_url, "_blank");
    })

  }).catch(function (error) {
    seErro();
    console.log(error);
  });


