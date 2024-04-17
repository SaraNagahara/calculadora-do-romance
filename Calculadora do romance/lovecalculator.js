function clicar(){
    var nome = window.document.getElementById('pessoa').value;
    var nome2 = window.document.getElementsByClassName('pessoa2')[0].value;
    var primeiraLetra = nome.slice(0,1).toUpperCase();
    var resto = nome.slice(1).toLowerCase();
    nome = primeiraLetra + resto;
    var primeiraLetra2 = nome2.slice(0,1).toUpperCase();
    var resto2 = nome2.slice(1).toLowerCase();
    nome2 = primeiraLetra2 + resto2;
    var res = window.document.querySelector('#res');
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
    
    if(loveScore < 30){
        res.innerHTML = `<p>${nome} e ${nome2} tem <strong>${loveScore}%</strong> de chances. Vocês são como água e óleo!</p>`
        res.style.color = 'red'
    }else if (loveScore >= 30 && loveScore <= 70){
        res.innerHTML = `<p>${nome} e ${nome2} tem <strong>${loveScore}%</strong> de chances, da pra tentar eim bicho!</p>`
        res.style.color = 'white'
    }else if (loveScore >= 70 && loveScore <= 100){
        res.innerHTML = `<p>${nome} e ${nome2} tem <strong>${loveScore}%</strong> de chances. Krl mlk alma gêmeas!</p>`
        res.style.color = 'green'
    }
}