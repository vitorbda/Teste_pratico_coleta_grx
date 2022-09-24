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

inputs.addEventListener('input', () => {
    const min = 15
    const max = 200
    if (inputs.value.length > max || inputs.value.length < min) {
        button.disabled = true
    } else {
        button.disabled = false
    }
})

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
}