document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);
  
    var mensagemElement = document.getElementById("mensagem");
  
    if (campoB > campoA) {
      mensagemElement.textContent = "Formulário válido! B é maior que A.";
      mensagemElement.style.color = "green";
    } else {
      mensagemElement.textContent = "Formulário inválido! B precisa ser maior que A.";
      mensagemElement.style.color = "red";
    }
  });
  