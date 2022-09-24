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