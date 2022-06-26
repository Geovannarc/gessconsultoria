const icone = document.getElementById('icone');
const conteudo = document.getElementById('conteudo');
const box = document.getElementById('box-faturamento');

const id1 = document.getElementById('1');
const id2 = document.getElementById('2');
const id3 = document.getElementById('3');
const id4 = document.getElementById('4');

function changeContent(id){
    switch (id){
        case 1:
        conteudo.innerHTML = "O diagnóstico é uma visita realizada na instituição com o objetivo de avaliar a situação da empresa naquele momento, com relação a gestão de processos, qualidade, segurança, dentre outros aspectos, de acordo com a demanda do cliente. A partir do diagnóstico é elaborado um relatório com pontos fortes, fracos e processos não implantados, além dos norteamentos necessários para implantação das ações, visando melhorias."
        icone.innerHTML = "<i class='fa-solid fa-bolt-lightning fa-4x mb-3 card-img-top text-center mt-3 i-card' style='color: rgba(97,228,167,1);'></i><h3 class='text-center font-weight-300'>Diagnóstico</h3>";
        box.style.display = 'none';
        id1.style.backgroundColor = "rgba(45, 111, 80, 0.053)"
        id2.style.backgroundColor = "white"
        id3.style.backgroundColor = "white"
        id4.style.backgroundColor = "white"
        break;
        case 2:
        conteudo.innerHTML = "A consultoria é destinada para instituições de saúde que buscam suporte no desenvolvimento e melhoria dos processos com foco na segurança do paciente e qualidade dos serviços, buscando o uso inteligente de recursos.  Todo o processo de consultoria é realizado com embasamento em metodologias científicas e ferramentas da qualidade e é focado em orientar as equipes da instituição sobre o que fazer e, principalmente, como executar as atividades propostas."
        icone.innerHTML = ' <i class="fa-solid fa-gears fa-4x mb-3 card-img-top text-center mt-3 i-card" style="color: #61E2BE;"></i><h3 class="text-center font-weight-300">Consultoria para Gestão</h3>'
        box.style.display = 'none';
        id2.style.backgroundColor = "rgba(45, 111, 80, 0.053)"
        id1.style.backgroundColor = "white"
        id3.style.backgroundColor = "white"
        id4.style.backgroundColor = "white"
        break;
        case 3:
        conteudo.innerHTML = "A consultoria é destinada para instituições de saúde que buscam otimizar os seus processos para a obtenção de certificações.  Todo o processo de consultoria é realizado com embasamento em metodologias científicas e ferramentas da qualidade e é focado em orientar as equipes da instituição sobre o que fazer e, principalmente, como executar as atividades propostas. Orientamos, apoiamos e desenvolvemos junto ao cliente todos os passos para obtenção da certificação."
        icone.innerHTML = ' <i class="fa-solid fa-certificate fa-4x mb-3 card-img-top text-center mt-3 i-card" style="color: rgba(97,224,228,1);"></i><h3 class="text-center font-weight-300">Consultoria para Certificações</h3>'
        box.style.display = 'none';
        id3.style.backgroundColor = "rgba(45, 111, 80, 0.053)"
        id1.style.backgroundColor = "white"
        id2.style.backgroundColor = "white"
        id4.style.backgroundColor = "white"
        break;
        case 4:
        conteudo.innerHTML = "Descubra como parar de receber as glosas e aumentar seu faturamento. Já pensou em fazer o ciclo da receita médica funcionar definitivamente? Receber mais rápido e perder menos das suas fontes pagadoras, a um menor custo. Nossa consultoria trabalha toda a cadeia de faturamento hospitalar e fornecemos através de nossos parceiros aplicações integradas ao seu ERP que digitizam processos-chaves do seu negócio para Médicos, Consultórios, Hospitais, Laboratórios e Clínicas. Atuamos em toda cadeia de faturamento, acompanhando o passo a passo do processo:"
        icone.innerHTML = '<i class="fa-solid fa-dollar-sign fa-4x mb-3 card-img-top text-center mt-3 i-card" style="color: rgba(97,224,228,1);"></i><h3 class="text-center font-weight-300">Faturamento Hospitalar</h3>'
        box.style.display = 'block';
        id4.style.backgroundColor = "rgba(45, 111, 80, 0.053)"
        id1.style.backgroundColor = "white"
        id3.style.backgroundColor = "white"
        id2.style.backgroundColor = "white"
        break;
    }
    if(screen.width < 575){
        window.location.href = "#icone"
    }
}

document.getElementById('contatoFormHome').addEventListener('submit', function () {
  var nome = this.querySelector('input[name=nome]'), nome = nome.value;
  var email = this.querySelector('input[name=email]'), email = email.value;
  var texto = this.querySelector('input[name=Body]');
  window.location.href = "mailto:contato@gessconsultoria.com.br?Subject=Contato%20pelo%20site&Body="+texto.value;
});

document.getElementById('contatoForm').addEventListener('submit', function () {
    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    var email = this.querySelector('input[name=email]'), email = email.value;
   var texto = this.querySelector('input[name=Body]');
     window.location.href = "mailto:contato@gessconsultoria.com.br?Subject=Contato%20pelo%20site&Body="+texto.value;
});
