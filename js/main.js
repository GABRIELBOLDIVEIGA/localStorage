const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = localStorage.getItem("itens") || [];
console.log(itens)

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = event.target.elements["nome"];
  const quantidade = event.target.elements["quantidade"];

  criaElemento(nome.value, quantidade.value);

  nome.value = "";
  quantidade.value = "";

  // console.log(lista);
});

lista.addEventListener("click", (event) => {
  if (event.target.value == "delete") {
    event.target.parentNode.remove();
  }
});

function criaElemento(nome, quantidade) {
  // console.log(nome, quantidade);

  // `<li class="item"><strong>${quantidade}</strong>${nome}</li>`
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  const btndelete = document.createElement("button");
  btndelete.value = "delete";
  btndelete.innerHTML = "X";

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  novoItem.appendChild(btndelete);

  lista.appendChild(novoItem);

  // console.log(lista);

  const itemAtual = {
    nome: nome,
    quantidade: quantidade,
  };

  itens.push(itemAtual);
  localStorage.setItem("itens", JSON.stringify(itens));

  
}