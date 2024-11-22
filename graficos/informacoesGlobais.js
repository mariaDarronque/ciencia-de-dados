const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json&#39;


    async function vizualizarInformacoesGlobais()
{

    const res = await fetch(url)

    const dados = await res.json()

    const paragrafo = document.createElement('p')

    paragrafo.classList.add('graficos-container__texto')

    paragrafo.innerHTML =  `Você sabia que o total de pessoas no mundo é de <span>${pessoasMundo}</span> bilhões de pessoas e que o total de pessoas com acesso à educação é de <span>${pessoasComAcessoAEducacao}.</span> bilhões de pessoas. O tempo médio gasto por dia estudando é de <span>${horas}</span> horas e <span>${minutos} minutos</span> conectadas. O total de pessoas com educação superior é de <span>${pessoasComEducacaoSuperior} bilhoes.</span> Isso significa que aproximadamente <span>${percentual}%</span> de pessoas tem acesso à Educação. Será que esses dados apontam para uma realidade de um mundo esclarecido e com facilidade de acesso à Educação?`

    const container = document.getElementById('graficos-container')

    container.appendChild(paragrafo);

}


vizualizarInformacoesGlobais()