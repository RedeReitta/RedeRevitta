// document.getElementById("contactForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Evita o envio padrão do formulário

//   const nome = document.getElementById("nome").value;
//   const telefone = document.getElementById("telefone").value;
//   const email = document.getElementById("email").value;
//   const mensagemTexto = document.getElementById("mensagem").value;

//   const mensagem = `Olá, boa tarde,\nNome: ${nome}\nTelefone: ${telefone}\nEmail: ${email}\nMensagem: ${mensagemTexto}`;

//   const url = `https://wa.me/5571988118197?text=${encodeURIComponent(mensagem)}`;

//   window.open(url, "_blank"); // Abre o WhatsApp em uma nova aba
// });