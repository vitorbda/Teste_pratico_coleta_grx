//LISTAR OS VALORES PARA A TABELA
function listaTabela() {
    var tb = document.getElementById("tbody")

    localStorage.total = JSON.stringify(total)
    let resultados = JSON.parse(localStorage.meuArr)

    for (i = 0; i < (JSON.parse(localStorage.meuArr)).length; i++) {

        let tr = tb.insertRow()

        let td_av = tr.insertCell()
        let td_p1 = tr.insertCell()
        let td_p2 = tr.insertCell()
        let td_p3 = tr.insertCell()
        let td_p4 = tr.insertCell()

        td_av.innerText = resultados[i].Dados.avaliacao
        td_p1.innerText = defineNome(resultados[i].Dados.pergunta1)
        td_p2.innerText = defineNome(resultados[i].Dados.pergunta2)
        td_p3.innerText = defineNome(resultados[i].Dados.pergunta3)
        td_p4.innerText = resultados[i].Dados.pergunta4
    }
}

//VERIFICA SE NÃO HÁ VALORES
function verificaValores() {
    if (localStorage.meuArr == undefined) {
        document.getElementById("vazio").innerText = "Sem valores."
    } else listaTabela()
}


//DEFINE O NOME PARA A PERGUNTA 3
function defineNome(id) {
    if (id == 0) {
        return "Não"
    } else if (id == 1) {
        return "Sim"
    } else if (id == 3) {
        return "Agora!!!"
    } else {
        return "Não sei"
    }
}