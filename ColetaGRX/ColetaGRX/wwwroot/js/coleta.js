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
