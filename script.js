document.addEventListener("DOMContentLoaded", function() {
    const projetos = [
        { nome: "Projeto 1", descricao: "Descrição do projeto 1" },
        { nome: "Projeto 2", descricao: "Descrição do projeto 2" },
        { nome: "Projeto 3", descricao: "Descrição do projeto 3" }
    ];

    const listaProjetos = document.getElementById("lista-projetos");

    projetos.forEach(projeto => {
        const li = document.createElement("li");
        li.textContent = `${projeto.nome}: ${projeto.descricao}`;
        listaProjetos.appendChild(li);
    });

    const form = document.getElementById("form-contato");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;
        alert(`Obrigado pelo contato, ${nome}!`);
        form.reset();
    });
});
