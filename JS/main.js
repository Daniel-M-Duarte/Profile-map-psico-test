const form = document.querySelector('.form');
const result = document.querySelector('.resultado');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const analiticores = analitico();
    const amigavelres = amigavel();
    const autoritariores = autoritario();
    const expressivores = expressivo();

    result.innerHTML = `Seu resultado foi: <br>
                        ${analiticores} - para perfil analítico; <br>
                        ${amigavelres} - para perfil amigável; <br>                
                        ${autoritariores} - para perfil autoritario; <br>                
                        ${expressivores} - para perfil expressivo; <br>`                

});

function calculaQuestão(questao){
    const lista = document.querySelectorAll('.'+questao);

    for(let item of lista){
        
        if(item.checked){
            return Number(item.value)*2;
        }
    }
}

function analitico(){
    return  Number(calculaQuestão('p1'))+
            Number(calculaQuestão('p2'))+
            Number(calculaQuestão('p3'))+
            Number(calculaQuestão('p4'))+
            Number(calculaQuestão('p5'));
}

function amigavel(){
    return  Number(calculaQuestão('p6'))+
            Number(calculaQuestão('p7'))+
            Number(calculaQuestão('p8'))+
            Number(calculaQuestão('p9'))+
            Number(calculaQuestão('p10'));
}

function autoritario(){
    return  Number(calculaQuestão('p11'))+
            Number(calculaQuestão('p12'))+
            Number(calculaQuestão('p13'))+
            Number(calculaQuestão('p14'))+
            Number(calculaQuestão('p15'));
}

function expressivo(){
    return  Number(calculaQuestão('p16'))+
            Number(calculaQuestão('p17'))+
            Number(calculaQuestão('p18'))+
            Number(calculaQuestão('p19'))+
            Number(calculaQuestão('p20'));
}


