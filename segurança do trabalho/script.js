
// C >> Create  >> Cadastrar
// R   >> Read   >> Ler
// U   >>  Update  >> alterar/atualizar/editar/fuçar/mudar
// D   >>  Delete  >> Apagar/deletar/excluir

// ctrl + ;

// const nomes = []
// const alturas = []




// console.log(dino);

let funcionarios = []

function salvarDados(){
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios))
    
    // let texto = JSON.stringify(dinos)
    // localStorage.setItem('dinos', texto)
}

function carregarDados(){
    funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || []
    
    // let textoLido = localStorage.getItem('dinos')
    // dinos = JSON.parse(textoLido)
}

function cadastrarfuncionario() {

    carregarDados()

    const funcionario = {
        nome: document.getElementById('input-nome').value,
        sertor: Number(document.getElementById("input-setor").value),
        funcao: document.getElementById("input-funcao").value,
        data: Number(document.getElementById("input-data").value),
        validade: Number(document.getElementById('input-validade').value),
    }
  

    console.log(funcionario);

    limparFormulario()
    mostrarTodos()

    salvarDados()
}

function limparformulario() {
    document.getElementById('input-nome').value = ''
    document.getElementById('input-setor').value = ''
    document.getElementById('input-funcao').value = ''
    document.getElementById('input-data').value = ''
    

    document.getElementById('input-nome').focus()
}

function mostrarformulario(){
    document.getElementById('painel-funcionario').innerHTML = '' 

    for(let i=0; i<segurancadotrabalho.length; i++){
        // alert(dinos[i].nome)
        document.getElementById('painel-funcionario').innerHTML += 
        `<div class="card-dino">
            <h2>${funcionario[i].nome}</h2>
            <p>nome: ${funcionario[i].setor}</p>
            <p>validade:${funçao$funcionario[i].funçao}</p>
            <p>:validade ${funcionario[i].validade}</p>
            <p>${funcionario[i].id}</p>
        </div>` 
    }

}

function salvarfuncionario() {
    
    // window.location.href = 'teste.html'

    carregarDados()



 
    console.log(funcionario);

}

function segurancadotrabalho(){
    let nomeProcurado = document.getElementById('input-nome').value

    for(let i = 0; i<segurancadotrabalho.length; i++){
        if(nomeProcurado == segurancadotrabalho[i].nome ){
            console.log(segurancadotrabalho[i]);
            document.getElementById('input-nome').value = funcionario[i].nome
            document.getElementById('input-setor').value = funcionario[i].setor
            document.getElementById('input-funcao').value = funcionario[i].funçao
            document.getElementById('input-validade').value = funcionario[i].validade
            console.log(i);
        }
        
    }

}

function salvarfuncionario(){
    let id = Number(document.getElementById('input-nome').value)

    for (let i = 0; i< mostrarfuncionario.length; i++)
    {
        if(id == mostrarfuncionario[i].nome ){
          console.log(segurancadotrabalho[i]);
            document.getElementById('input-nome').value = funcionario[i].nome
            document.getElementById('input-setor').value = funcionario[i].setor
            document.getElementById('input-funcao').value = funcionario[i].funçao
            document.getElementById('input-validade').value = funcionario[i].validade
            console.log(i);
        }
    }
    
    mostrarformulario()
    limparformulario()

}
function excluirfuncionario(){
    let id = Number(document.getElementById('input-validade').value)

    for(let i = 0; i<dinos.length; i++){
        if(id == funcionario[i].id ){
            console.log(funcionario[i]);
            funcionario.splice(i, 1)
            console.log(i);
        }
    }
    mostrarformulario()
    limparformulario()
}