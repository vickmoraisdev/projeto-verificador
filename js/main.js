function resultado(){
    var txtano = document.getElementById('txtano')
    var ano = Number(txtano.value)
    var masc = document.getElementById('masc')
    var fem = document.getElementById('fem')
    var res = document.getElementById('res')
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var idade = (anoAtual - ano)
    var img = document.createElement('img')
    var sexo = ''
    var selecionou = document.getElementsByName('radsex')
    
    if (selecionou[0].checked){
        sexo = 'Homem'
        if (ano < 1909 || ano > anoAtual){
            window.alert('[ERRO] Verifique os dados inseridos.')
        } else if (idade >= 0 && idade < 12){
            img.setAttribute('src', 'imagens/meninoft.png')
        } else if (idade >= 12 && idade <= 25){
            img.setAttribute('src', 'imagens/garotoft.png')
        } else if (idade > 25 && idade < 60){
            img.setAttribute('src', 'imagens/homemft.png')
        } else{
            img.setAttribute('src', 'imagens/idosoft.png')
        }

    } else{
        sexo = 'Mulher'
        if (ano < 1909 || ano > anoAtual){
            window.alert('[ERRO] Verifique os dados inseridos.')
        } else if (idade >= 0 && idade < 12){
            img.setAttribute('src', 'imagens/meninaft.png')
        } else if (idade >= 12 && idade <= 25){
            img.setAttribute('src', 'imagens/garotaft.png')
        } else if (idade > 25 && idade < 60){
            img.setAttribute('src', 'imagens/mulherft.png')
        } else{
            img.setAttribute('src', 'imagens/idosaft.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
    res.style.margin = 'auto'
    res.appendChild(img)
}