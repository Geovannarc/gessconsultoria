const icone = document.getElementById('icone');
const conteudo = document.getElementById('conteudo');
const box = document.getElementById('box-faturamento');

function changeContent(id){
    switch (id){
        case 1:
        conteudo.innerHTML = "O diagnóstico é uma visita realizada na instituição com o objetivo de avaliar a situação da empresa naquele momento, com relação a gestão de processos, qualidade, segurança, dentre outros aspectos, de acordo com a demanda do cliente. A partir do diagnóstico é elaborado um relatório com pontos fortes, fracos e processos não implantados, além dos norteamentos necessários para implantação das ações, visando melhorias."
        icone.innerHTML = "<i class='fa-solid fa-bolt-lightning fa-4x mb-3 card-img-top text-center mt-3 i-card' style='color: rgba(97,228,167,1);'></i><h3 class='text-center font-weight-300'>Diagnóstico</h3>";
        box.style.display = 'none';
        break;
        case 2:
        conteudo.innerHTML = "A consultoria é destinada para instituições de saúde que buscam suporte no desenvolvimento e melhoria dos processos com foco na segurança do paciente e qualidade dos serviços, buscando o uso inteligente de recursos.  Todo o processo de consultoria é realizado com embasamento em metodologias científicas e ferramentas da qualidade e é focado em orientar as equipes da instituição sobre o que fazer e, principalmente, como executar as atividades propostas."
        icone.innerHTML = ' <i class="fa-solid fa-gears fa-4x mb-3 card-img-top text-center mt-3 i-card" style="color: #61E2BE;"></i><h3 class="text-center font-weight-300">Consultoria para Gestão</h3>'
        box.style.display = 'none';
        break;
        case 3:
        conteudo.innerHTML = "A consultoria é destinada para instituições de saúde que buscam otimizar os seus processos para a obtenção de certificações.  Todo o processo de consultoria é realizado com embasamento em metodologias científicas e ferramentas da qualidade e é focado em orientar as equipes da instituição sobre o que fazer e, principalmente, como executar as atividades propostas. Orientamos, apoiamos e desenvolvemos junto ao cliente todos os passos para obtenção da certificação."
        icone.innerHTML = ' <i class="fa-solid fa-certificate fa-4x mb-3 card-img-top text-center mt-3 i-card" style="color: rgba(97,224,228,1);"></i><h3 class="text-center font-weight-300">Consultoria para Certificações</h3>'
        box.style.display = 'none';
        break;
        case 4:
        conteudo.innerHTML = "Descubra como parar de receber as glosas e aumentar seu faturamento. Já pensou em fazer o ciclo da receita médica funcionar definitivamente? Receber mais rápido e perder menos das suas fontes pagadoras, a um menor custo. Nossa consultoria trabalha toda a cadeia de faturamento hospitalar e fornecemos através de nossos parceiros aplicações integradas ao seu ERP que digitizam processos-chaves do seu negócio para Médicos, Consultórios, Hospitais, Laboratórios e Clínicas. Atuamos em toda cadeia de faturamento, acompanhando o passo a passo do processo:"
        icone.innerHTML = '<i class="fa-solid fa-dollar-sign fa-4x mb-3 card-img-top text-center mt-3 i-card" style="color: rgba(97,224,228,1);"></i><h3 class="text-center font-weight-300">Faturamento Hospitalar</h3>'
        box.style.display = 'block';
        break;
    }
    if(screen.width < 575){
        window.location.href = "#icone"
    }
}