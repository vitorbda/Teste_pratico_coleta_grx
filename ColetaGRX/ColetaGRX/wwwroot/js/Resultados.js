//ORDENA OS VALORES QUE IRÃO PARA A TABELA
function Maior1() {
    let values = valores()
    let ordenacao = {
        "nPrimeiro": '',
        "primeiro": '',
        "nSegundo": '',
        "segundo": '',
        "nTerceiro": '',
        "terceiro": ''
    };

    // DECIDE SE O PRIMEIRO É O VALOR POSITIVO
    if (values.Positivo > values.Negativo && values.Positivo > values.NA) {
        if (values.Negativo > values.NA) {
            ordenacao = {
                "nPrimeiro": ' Positivas',
                "primeiro": values.Positivo,
                "nSegundo": ' Negativas',
                "segundo": values.Negativo,
                "nTerceiro": ' NAs',
                "terceiro": values.NA
            };
        } else {
            ordenacao = {
                "nPrimeiro": ' Positivas',
                "primeiro": values.Positivo,
                "nSegundo": ' NAs',
                "segundo": values.NA,
                "nTerceiro": ' Negativas',
                "terceiro": values.Negativo
            };
        }
    }
    // DECIDE SE O PRIMEIRO É O NEGATIVO
    else if (values.Negativo > values.Positivo && values.Negativo > values.NA) {
        if (values.Positivo > values.NA) {
            ordenacao = {
                "nPrimeiro": ' Negativas',
                "primeiro": values.Negativo,
                "nSegundo": ' Positivas',
                "segundo": values.Positivo,
                "nTerceiro": ' NAs',
                "terceiro": values.NA
            };
        } else {
            ordenacao = {
                "nPrimeiro": ' Negativas',
                "primeiro": values.Negativo,
                "nSegundo": ' NAs',
                "segundo": values.NA,
                "nTerceiro": ' Positivas',
                "terceiro": values.Positivo
            };
        }
    }
    //DECIDE SE O PRIMEIRO É N/A
    else {
        if (values.Positivo > values.Negativo) {
            ordenacao = {
                "nPrimeiro": ' NAs',
                "primeiro": values.NA,
                "nSegundo": ' Positivas',
                "segundo": values.Positivo,
                "nTerceiro": ' Negativas',
                "terceiro": values.Negativo
            };
        } else {
            ordenacao = {
                "nPrimeiro": ' NAs',
                "primeiro": values.NA,
                "nSegundo": ' Negativas',
                "segundo": values.Negativo,
                "nTerceiro": ' Positivas',
                "terceiro": values.Positivo
            };
        }
    }
    return ordenacao;
}

//CALCULA A PORCENTAGEM DE CADA UM
function calculaPorcentagem(valor) {
    if (valor == 0) {
        return 0;
    }

    let res
    let total = localStorage.total

    res = ((valor * 100) / total)

    if (res == 0) {
        return 100;
    } else {
        return Math.round(res)
    }
}


//INSERE OS VALORES NA TABELA
function testeValor() {
    contabilizar();

    let colunaTotal = document.getElementById("valorTotal")
    colunaTotal.innerText = localStorage.total

    //PRIMEIRA LINHA/MAIOR VALOR
    let Linha1Nome = document.getElementById("Nprimeiro")
    Linha1Nome.innerText = ("Quantidades" + Maior1().nPrimeiro)
    let Linha1Valor = document.getElementById("Vprimeiro")
    Linha1Valor.innerText = Maior1().primeiro
    //PRIMEIRA LINHA/PORCENTAGEM
    let Linha1PorNomr = document.getElementById("NprPrimeiro")
    Linha1PorNomr.innerText = ("Porcentagem de" + Maior1().nPrimeiro)
    let Linha1PorValor = document.getElementById("VpPrimeiro")
    Linha1PorValor.innerText = (calculaPorcentagem(Maior1().primeiro) + '%')

    //SEGUNDA LINHA/VALOR
    let Linha2Nome = document.getElementById("Nsegundo")
    Linha2Nome.innerText = ("Quantidades" + Maior1().nSegundo)
    let linha2Valor = document.getElementById("Vsegundo")
    linha2Valor.innerText = Maior1().segundo
    //SEGUNDA LINHA/PORCENTAGEM
    let Linha2PorNomr = document.getElementById("NpSegundo")
    Linha2PorNomr.innerText = ("Porcentagem de" + Maior1().nSegundo)
    let Linha2PorValor = document.getElementById("VpSegundo")
    Linha2PorValor.innerText = (calculaPorcentagem(Maior1().segundo) + '%')

    //TERCEIRA LINHA/VALOR
    let Linha3Nome = document.getElementById("Nterceira")
    Linha3Nome.innerText = ("Quantidades" + Maior1().nTerceiro)
    let linha3Valor = document.getElementById("Vterceira")
    linha3Valor.innerText = Maior1().terceiro
    //TERCEIRA LINHA/PORCENTAGEM
    let Linha3PorNomr = document.getElementById("NpTerceira")
    Linha3PorNomr.innerText = ("Porcentagem de" + Maior1().nTerceiro)
    let Linha3PorValor = document.getElementById("VpTerceira")
    Linha3PorValor.innerText = (calculaPorcentagem(Maior1().terceiro) + '%')

}
