const pegandoHistoria = fetch("./assets/historia/O Senhor dos Anéis.txt")
  .then((response) => {
    return response.text(); //Retorno, vem como funcao nativa, precisamos utilizar mas um then, nesse caso ele so pega a resposta do site
  })
  .then((resposta) => {
    const htmlItem = document.querySelector(".conteudo");
    htmlItem.innerHTML = resposta;
  });
