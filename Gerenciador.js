<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Gerenciador de Tarefas Domésticas</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    h1 {
      color: #333;
    }
    input, button {
      padding: 8px;
      margin: 5px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 10px 0;
      padding: 8px;
      background-color: #f2f2f2;
      border-radius: 5px;
    }
    .done {
      text-decoration: line-through;
      color: green;
    }
    button {
      margin-left: 5px;
    }
  </style>
</head>
<body>

  <h1>Gerenciador de Tarefas Domésticas</h1>

  <input type="text" id="novaTarefa" placeholder="Digite uma tarefa">
  <button onclick="adicionarTarefa()">Adicionar</button>

  <ul id="listaTarefas"></ul>

  <script>
    const listaTarefas = document.getElementById("listaTarefas");
    const input = document.getElementById("novaTarefa");

    function adicionarTarefa() {
      const texto = input.value.trim();
      if (texto === "") return;

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = texto;

      const btnConcluir = document.createElement("button");
      btnConcluir.textContent = "✔️";
      btnConcluir.onclick = () => {
        span.classList.toggle("done");
      };

      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.onclick = () => {
        const novoTexto = prompt("Editar tarefa:", span.textContent);
        if (novoTexto) span.textContent = novoTexto;
      };

      const btnRemover = document.createElement("button");
      btnRemover.textContent = "Remover";
      btnRemover.onclick = () => {
        listaTarefas.removeChild(li);
      };

      li.appendChild(span);
      li.appendChild(btnConcluir);
      li.appendChild(btnEditar);
      li.appendChild(btnRemover);
      listaTarefas.appendChild(li);

      input.value = "";
    }
  </script>

</body>
</html>
