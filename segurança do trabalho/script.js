// C >> Create  >> Cadastrar
// R >> Read    >> Ler
// U >> Update  >> Alterar/atualizar/editar
// D >> Delete  >> Apagar/deletar/excluir

let funcionarios = [];

carregarDados();
mostrarFuncionarios();

function salvarDados() {
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}

function carregarDados() {
    funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
}

function cadastrarFuncionario() {
    let nome = document.getElementById("input-nome").value;

    if (!nome) {
        return;
    }

    let index = funcionarios.findIndex(f => f.nome.toLowerCase() === nome.toLowerCase());

    if (index !== -1) {
        funcionarios[index].setor = document.getElementById("input-setor").value;
        funcionarios[index].funcao = document.getElementById("input-funcao").value;
        funcionarios[index].data = document.getElementById("input-data").value;
        funcionarios[index].validade = document.getElementById("input-validade").value;
    } else {
        let funcionario = {
            id: Date.now(),
            nome: nome,
            setor: document.getElementById("input-setor").value,
            funcao: document.getElementById("input-funcao").value,
            data: document.getElementById("input-data").value,
            validade: document.getElementById("input-validade").value
        };

        funcionarios.push(funcionario);
    }

    salvarDados();
    mostrarFuncionarios();
    limparFormulario();
}

function mostrarFuncionarios() {
    let painel = document.getElementById("painel-funcionario");
    if (!painel) return;

    painel.innerHTML = "";

    for (let i = 0; i < funcionarios.length; i++) {
        painel.innerHTML += `
        <div style="border:1px solid #000; margin:10px; padding:10px;">
            <h3>${funcionarios[i].nome}</h3>
            <p><b>Setor:</b> ${funcionarios[i].setor}</p>
            <p><b>Função:</b> ${funcionarios[i].funcao}</p>
            <p><b>Data:</b> ${funcionarios[i].data}</p>
            <p><b>Validade:</b> ${funcionarios[i].validade}</p>
        </div>
        `;
    }
}

function procurarFuncionario() {
    let nome = document.getElementById("input-nome").value;

    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].nome.toLowerCase() === nome.toLowerCase()) {
            document.getElementById("input-setor").value = funcionarios[i].setor;
            document.getElementById("input-funcao").value = funcionarios[i].funcao;
            document.getElementById("input-data").value = funcionarios[i].data;
            document.getElementById("input-validade").value = funcionarios[i].validade;

            return;
        }
    }
}

function excluirFuncionario() {
    let nome = document.getElementById("input-nome").value;

    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].nome.toLowerCase() === nome.toLowerCase()) {
            funcionarios.splice(i, 1);
            salvarDados();
            mostrarFuncionarios();
            limparFormulario();
            return;
        }
    }
}

function limparFormulario() {
    document.getElementById("input-nome").value = "";
    document.getElementById("input-setor").value = "";
    document.getElementById("input-funcao").value = "";
    document.getElementById("input-data").value = "";
    document.getElementById("input-validade").value = "";

    document.getElementById("input-nome").focus();
}

function gerarDadosDeTeste() {
    funcionarios = [
        { id: 1, nome: "Carlos Silva", setor: "Obras", funcao: "Pedreiro", data: "2024-01-15", validade: "12 meses" },
        { id: 2, nome: "Ana Souza", setor: "Elétrica", funcao: "Eletricista", data: "2024-02-10", validade: "6 meses" },
        { id: 3, nome: "Roberto Lima", setor: "Manutenção", funcao: "Mecânico", data: "2024-03-01", validade: "12 meses" },
        { id: 4, nome: "Mariana Costa", setor: "Segurança", funcao: "Técnica de SST", data: "2024-01-20", validade: "24 meses" },
        { id: 5, nome: "João Pedro", setor: "Logística", funcao: "Op. de Empilhadeira", data: "2024-04-05", validade: "12 meses" }
    ];

    salvarDados();
    mostrarFuncionarios();
}
