let funcionarios = [];

// 1. Carregar dados do localStorage
function carregarDados() {
  funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
}

// 2. Salvar dados no localStorage
function salvarDados() {
  localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}

// 3. Cadastrar ou Atualizar Funcionário (Create / Update)
function cadastrarFuncionario() {
  carregarDados();

  const idExistente = document.getElementById("input-id")?.value;

  const funcionario = {
    id: idExistente ? Number(idExistente) : Date.now(),
    nome: document.getElementById("input-nome").value,
    setor: document.getElementById("input-setor").value,
    funcao: document.getElementById("input-funcao").value,
    data: document.getElementById("input-data").value,
    validade: document.getElementById("input-validade").value
  };

  if (!funcionario.nome || !funcionario.setor) {
    alert("Por favor, preencha ao menos o nome e o setor!");
    return;
  }

  if (idExistente) {
    // Atualizar registro existente
    const index = funcionarios.findIndex(f => f.id === Number(idExistente));
    if (index !== -1) funcionarios[index] = funcionario;
  } else {
    // Adicionar novo registro
    funcionarios.push(funcionario);
  }

  salvarDados();
  mostrarFuncionarios();
  limparFormulario();
}

// 4. Listar Funcionários na Tela (Read)
function mostrarFuncionarios() {
  carregarDados();

  let painel = document.getElementById("painel-funcionario");
  painel.innerHTML = "";

  funcionarios.forEach((func) => {
    painel.innerHTML += `
      <div class="card-funcionario">
        <p><strong>Nome:</strong> ${func.nome}</p>
        <p><strong>Setor:</strong> ${func.setor}</p>
        <p><strong>Função:</strong> ${func.funcao}</p>
        <p><strong>Data:</strong> ${func.data}</p>
        <p><strong>Validade:</strong> ${func.validade}</p>
        <button onclick="carregarParaEdicao(${func.id})">Editar</button>
        <button onclick="excluirFuncionario(${func.id})">Excluir</button>
      </div>
      <hr>
    `;
  });
}

// 5. Excluir Funcionário (Delete)
function excluirFuncionario(id) {
  carregarDados();
  funcionarios = funcionarios.filter(f => f.id !== id);
  salvarDados();
  mostrarFuncionarios();
}

// 6. Carregar Dados no Formulário para Edição (Update)
function carregarParaEdicao(id) {
  carregarDados();
  const funcionario = funcionarios.find(f => f.id === id);

  if (funcionario) {
    // Cria um input hidden para o ID se não existir na sua página HTML
    let inputId = document.getElementById("input-id");
    if (!inputId) {
      inputId = document.createElement("input");
      inputId.type = "hidden";
      inputId.id = "input-id";
      document.querySelector("form")?.appendChild(inputId);
    }

    inputId.value = funcionario.id;
    document.getElementById("input-nome").value = funcionario.nome;
    document.getElementById("input-setor").value = funcionario.setor;
    document.getElementById("input-funcao").value = funcionario.funcao;
    document.getElementById("input-data").value = funcionario.data;
    document.getElementById("input-validade").value = funcionario.validade;
  }
}

// 7. Limpar Formulário
function limparFormulario() {
  document.getElementById("input-nome").value = "";
  document.getElementById("input-setor").value = "";
  document.getElementById("input-funcao").value = "";
  document.getElementById("input-data").value = "";
  document.getElementById("input-validade").value = "";
  
  const inputId = document.getElementById("input-id");
  if (inputId) inputId.value = "";
}

// 8. Inserir Dados de Teste (Exigência do Critério da Rubrica)
function gerardadosDeTeste() {
  const dadosTeste = [
    { id: 101, nome: "Ana Silva", setor: "TI", funcao: "Desenvolvedora", data: "2024-01-15", validade: "2025-01-15" },
    { id: 102, nome: "Carlos Souza", setor: "RH", funcao: "Analista", data: "2024-02-10", validade: "2025-02-10" },
    { id: 103, nome: "Mariana Costa", setor: "Financeiro", funcao: "Gerente", data: "2024-03-01", validade: "2025-03-01" },
    { id: 104, nome: "João Pedro", setor: "Operações", funcao: "Supervisor", data: "2024-03-20", validade: "2025-03-20" },
    { id: 105, nome: "Fernanda Lima", setor: "Marketing", funcao: "Designer", data: "2024-04-05", validade: "2025-04-05" }
  ];

  funcionarios = dadosTeste;
  salvarDados();
  mostrarFuncionarios();
}

// Inicializa a listagem ao carregar a página
mostrarFuncionarios();