//FUNÇÃO QUE SALVA OS DADOS NA LOCALSTORAGE
var arr = [];
function addItem(valor) {
    if (localStorage) {
        arr = JSON.parse(localStorage.getItem('meuArr'));
    }

    let novoItem = valor;
    console.log(novoItem)
    this.arr = this.arr || [];
    this.arr.push(novoItem)
    novoItem.value = "";
    localStorage.meuArr = JSON.stringify(arr);
}

let inputs = document.querySelector("textarea")
let button = document.getElementById("botaoSalvar")
button.disabled = true;

//VERIFICA O TAMANHO DA TEXTAREA
inputs.addEventListener('input', () => {
    const min = 15
    const max = 200
    if (inputs.value.length > max || inputs.value.length < min) {
        button.disabled = true
    } else {
        button.disabled = false
    }
})

//FUNÇÃO QUE PEGA OS DADOS DO FORMULÁRIO
function collectionSave() {
    event.preventDefault()

    if (localStorage.contador === undefined) localStorage.contador = 0;

    localStorage.contador++
    let info = {
        "Dados":
        {
            "pergunta1": document.querySelector('input[name=pergunta1]:checked').value,
            "pergunta2": document.querySelector('input[name=pergunta2]:checked').value,
            "pergunta3": (document.getElementById('pergunta3')).options
                         [(document.getElementById('pergunta3')).selectedIndex].value,
            "pergunta4": document.getElementById("pergunta4").value,
            "avaliacao": localStorage.contador
        }


    }
    addItem(info)
    limpar();
    abreModal();
}

//LIMPAR OS DADOS DO FORMULÁRIO AO SALVAR
function limpar() {
    document.getElementById("pergunta4").value = ''
    document.getElementById("p1false").checked = false
    document.getElementById("p1true").checked = true
    document.getElementById("p2false").checked = false
    document.getElementById("p2true").checked = true
    document.getElementById("pergunta3").selectedIndex = 'Sim'
    document.getElementById("botaoSalvar").disabled = true
}

//CHAMA A MODAL DE CONFIRMAÇÃO
function abreModal() {
    $("#myModal").modal('toggle')
}
