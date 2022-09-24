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