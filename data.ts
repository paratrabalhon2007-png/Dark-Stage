
import { Module } from './types';

export const MODULES: Module[] = [
  {
    id: 'intro',
    title: 'INTRODUÇÃO',
    description: 'Comece Aqui',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l1', 
        title: 'Boas vindas ao Dark Stage', 
        description: 'Assista esse vídeo primeiro',
        content: `
          <div class="space-y-6">
            <p class="text-gray-300 leading-relaxed">
              Agora está na hora de você criar sua conta! E eu recomendo que você crie uma do <strong>ZERO</strong> para começar do jeito certo. Abaixo você terá acesso a uma estrutura completa que eu utilizo em <strong>TODOS</strong> os meus perfis além de um passo a passo completo onde te ensino a aquecer da forma correta para evitar que seu conteúdo não seja entregue no início.
            </p>

            <div class="space-y-2">
               <a href="https://youtu.be/7B_1ATnnmww" target="_blank" rel="noopener noreferrer" class="block w-full">
                <div class="my-4 p-6 bg-white/5 border border-white/10 rounded-xl text-center font-bold tracking-[0.2em] uppercase text-white shadow-inner hover:bg-white/10 hover:border-white/30 transition-all group">
                  <div class="flex items-center justify-center gap-3">
                    <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    [ AULA INTRODUTÓRIA COMECE AQUI ]
                  </div>
                </div>
              </a>
            </div>

            <div class="space-y-2">
              <p class="font-bold text-white uppercase text-xs tracking-widest">Link:</p>
              <a href="https://miro.com/app/board/uXjVLSWuwQM=/" target="_blank" rel="noopener noreferrer" class="group block p-4 bg-white/5 border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all">
                <span class="font-bold">[ CLICK AQUI PARA VIZUALIZAR NOSSA ESTRUTURA BASE ]</span>
                <p class="text-xs text-gray-500 mt-1 opacity-100 transition-opacity italic">Clique para abrir o quadro no Miro</p>
              </a>
            </div>

            <p class="text-sm text-gray-500 italic">
              Click no "criando um perfil do zero" para assistir as aulas básicas onde vou ensinar o passo a passo de como criar e crescer um perfil na prática.
            </p>

            <button data-navigate-module="perfil-zero" class="w-full my-8 p-6 bg-white/5 border border-white/10 rounded-xl text-center font-bold tracking-[0.2em] uppercase text-white hover:bg-white/10 hover:border-white/30 transition-all active:scale-[0.98] shadow-lg">
              [ Criando um perfil do zero ]
            </button>

            <p class="text-gray-300 leading-relaxed">
              Leia este mapa mental aos poucos e vá seguindo todos os passos necessários para criar uma conta bem estruturada e mantê-la aquecida antes de postar seu primeiro vídeo. Eu recomendo que você aqueça-a por no mínimo <strong>7 DIAS</strong> antes de começar a postar.
            </p>

            <div class="pt-8">
              <p class="font-bold text-lg text-white mb-4 flex items-center gap-2">
                Depois do seu perfil estruturado ele deve ficar mais ou menos dessa forma
              </p>
              <div class="max-w-[320px] mx-auto bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl group hover:border-white/30 transition-all">
                <img src="https://i.imgur.com/aWRzXH2.jpeg" alt="Perfil Estruturado" class="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'perfil-zero',
    title: 'Criando um perfil do zero',
    description: 'Criando um perfil com vocês',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l3', 
        title: 'Criando um perfil do zero', 
        description: 'Criando um perfil com vocês',
        content: `
          <div class="space-y-6">
            <p class="text-gray-300 leading-relaxed">
              Agora está na hora de você criar sua conta! E eu recomendo que você crie uma do <strong>ZERO</strong> para começar do jeito certo. Abaixo você terá acesso a uma estrutura completa que eu utilizo em <strong>TODOS</strong> os meus perfis além de um passo a passo completo onde te ensino a aquecer da forma correta para evitar que seu conteúdo não seja entregue no início:
            </p>

            <div class="space-y-4">
              <div class="space-y-2">
                <p class="font-black text-white uppercase text-xs tracking-widest flex items-center gap-2">
                  MINI AULA EM FORMATO DE VÍDEO
                </p>
                <a href="https://youtube.com/shorts/Cu-TmIxFntM?si=VzZZQ-N75uxhy_Qp" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  [ MINI AULA DE COMO CRIAR UM PERFIL DO ZERO, CLICK AQUI ]
                </a>
              </div>

              <div class="space-y-2">
                <p class="font-black text-white uppercase text-xs tracking-widest flex items-center gap-2">
                  MINI AULA EM FORMATO DE VÍDEO
                </p>
                <a href="https://youtube.com/shorts/UaaR7xNsMdA?si=bJ4-Oye7686p9w7n" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  [ MINI AULA DE COMO ESCOLHER UMA FOTO DE PERFIL E MONTAR BIOGRAFIA ATRATIVA, CLICK AQUI ]
                </a>
              </div>

              <button data-navigate-module="estruturando" class="w-full flex items-center gap-3 p-4 bg-[#262626] border border-white/5 rounded-xl text-gray-300 hover:text-white hover:bg-[#333] transition-all text-sm font-bold text-left">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                [ CLICK AQUI PARA SER DIRECIONADO PARA O MÓDULO DE ESTRUTURAÇÃO DE PERFIL ]
              </button>

              <div class="space-y-2">
                <p class="font-black text-white uppercase text-xs tracking-widest flex items-center gap-2">
                  MINI AULA EM FORMATO DE VÍDEO
                </p>
                <a href="https://youtu.be/HvVyu71E7tc?si=CoPPLKCNB3bgcxgk" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  [ MINI AULA DE COMO FAZER O AQUECIMENTO DE PERFIL DA FORMA CORRETA, CLICK AQUI ]
                </a>
              </div>

              <button data-navigate-module="produto-zero" class="w-full flex items-center gap-3 p-4 bg-[#262626] border border-white/5 rounded-xl text-gray-300 hover:text-white hover:bg-[#333] transition-all text-sm font-bold text-left">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                [ CLICK AQUI PARA SER DIRECIONADO PARA O MÓDULO DE COMO CRIAR UM PRODUTO DO ZERO. ]
              </button>
            </div>

            <div class="my-6 p-4 bg-white/5 border-l-4 border-white text-white text-xs font-bold uppercase tracking-widest">
              OBS: ASSISTA A AULA DE COMO CRIAR UMA HOSPEDAGEM DE LINKS PARA SEU PERFIL
            </div>

            <div class="space-y-4">
              <a href="https://youtu.be/qyymeepdKV8?si=IaOtA-msb2GqfedT" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                [ MINI AULA DE COMO CRIAR UM PRODUTO DO ZERO NA BENTO E MONTAR O DESING DAS CAPAS DO LINKS, CLICK AQUI ]
              </a>

              <div class="text-xs text-gray-500 font-black uppercase tracking-widest mt-2">
                SITE USADO NA AULA PARA A HOSPEDAGEM DE LINKS -> <a href="https://bento.me" target="_blank" class="text-white underline">BENTO.ME</a>
              </div>

              <a href="https://www.canva.com/design/DAGwD9L3QaE/NYY64ZWCNYa7iAgCPdmuUw/view?utm_content=DAGwD9L3QaE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                [ CLICK AQUI PARA ACESSAR O MODELO DAS CAPAS DA BENTO EDITÁVEL PARA DEIXAR DO SEU JEITO. ]
              </a>
            </div>

            <p class="text-gray-300 leading-relaxed mt-10">
              APÓS TODOS OS PASSOS E TERMINAR O AQUECIMENTO, CHEGOU A HORA DE POSTAR SEU CONTEÚDO. ABAIXO VOU DEIXAR UM MÓDULO ONDE ENSINO EDIÇÃO NA PRÁTICA E A QUE VOU USAR NESSE NOSSO PERFIL QUE CRIAMOS PARA PROVAR PARA VOCÊS QUE NOSSO MÉTODO FUNCIONA.
            </p>

            <button data-navigate-module="captura" class="w-full flex items-center gap-3 p-4 bg-[#262626] border border-white/5 rounded-xl text-gray-300 hover:text-white hover:bg-[#333] transition-all text-sm font-bold text-left">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              [ CLICK AQUI PARA SER DIRECIONADO PARA O MÓDULO DE COMO CRIAR UM VÍDEO VIRAL DO ZERO. ]
            </button>

            <div class="text-sm text-gray-500 italic mt-6">
              Click abaixo para ver postando o vídeo mostrado na aula de edição
            </div>

            <div class="space-y-3">
              <a href="https://youtube.com/shorts/4tK_58SJPio?si=l1ycHEXfUD5zclic" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                [ POSTANDO O VÍDEO APÓS O AQUECIMENTO DE PERFIL ]
              </a>
              <a href="https://youtube.com/shorts/K49DO-plSXc?si=1Xn2atpTpPClSZoe" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                [ RESULTADO FINAL VÍDEO DO MÓDULO CRIANDO UM PERFIL DO ZERO. ]
              </a>
            </div>

            <div class="mt-16 pt-8 border-t border-white/5 space-y-4">
              <div class="text-sm text-gray-400">
                Criado por <span class="text-white font-bold">@omentordigitalll</span>
              </div>
              <p class="text-gray-500 text-sm italic">
                Muito obrigado por acompanhar nosso módulo até o final. Boa sorte e ótimos resultados! Assinado: Seu Mentor.
              </p>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'nicho',
    title: 'Encontrando seu Nicho',
    description: 'Dicas para escolher o seu nicho',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l4',
        title: 'Encontrando seu Nicho',
        description: 'Dicas para escolher o seu nicho',
        content: `
          <div class="space-y-6">
            <p class="text-gray-300 leading-relaxed">
              Definir seu nicho é crucial, pois você não pode ficar trocando de foco constantemente, como ir de conteúdo sobre carros clássicos para receitas de sobremesas.
            </p>

            <p class="text-gray-300 leading-relaxed">
              É fundamental selecionar um nicho e mantê-lo consistentemente. Caso contrário, o algoritmo pode ficar confuso sobre se deve promover seu conteúdo para amantes de gatos ou entusiastas de academia. Consegue entender?
            </p>

            <p class="text-gray-300 leading-relaxed">
              A chave é descobrir um nicho considerando sobre o que você se sente confortável em discutir, pelo que você é apaixonado e onde possui conhecimento para compartilhar.
            </p>

            <p class="text-gray-300 leading-relaxed italic">
              Embora alguns se preocupem que certos nichos possam ser menos lucrativos, até certo ponto, isso é verdade. No entanto, é essencial lembrar que onde o dinheiro flui, as pessoas seguem. Isso implica que nichos lucrativos geralmente vêm com maior competição.
            </p>

            <p class="text-gray-300 leading-relaxed">
              Em vez de optar por um nicho extremamente restrito, como uma página dedicada apenas a pneus de carro, considere uma abordagem mais ampla, como carros. Essa abordagem proporcionará um alcance mais amplo, atraindo ainda assim uma audiência interessada em pneus.
            </p>

            <div class="space-y-3">
              <p class="font-bold text-white uppercase text-xs tracking-widest">Aqui estão algumas ideias de nicho para você:</p>
              <ul class="list-disc list-inside space-y-1 text-gray-400 text-sm ml-2">
                <li>Negócios</li>
                <li>Alimentação e Culinária</li>
                <li>Cuidados com a Pele</li>
                <li>Marketing Digital</li>
                <li>Autoaperfeiçoamento</li>
              </ul>
            </div>

            <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
              <span class="text-sm font-bold text-gray-400">Meu nicho é:</span>
              <span class="text-sm font-black text-white ml-2">Negócios e Desenvolvimento Pessoal</span>
            </div>

            <div class="pt-8">
              <p class="font-bold text-lg text-white mb-6">Aqui estão alguns exemplos de outras páginas que me inspiram:</p>
              <div class="max-w-4xl mx-auto bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img src="https://i.imgur.com/4rXUrl2.png" alt="Exemplos de Perfis Inspiradores" class="w-full h-auto object-cover opacity-90" />
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'estruturando',
    title: 'Estruturando o seu Perfil',
    description: 'Criando um perfil de sucesso',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l5',
        title: 'Estruturando o seu Perfil',
        description: 'Criando um perfil de sucesso',
        content: `
          <div class="space-y-8">
            <p class="text-gray-300 leading-relaxed">
              Esta é a base de qualquer perfil do Instagram. Esta seção envolve configurar seu perfil e tornar sua conta apresentável para o mundo. Seus visualizadores e visitantes de perfil julgarão sua página com base na aparência de seu perfil. Certifique-se de que eles criem uma boa impressão.
            </p>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight">1. Escolhendo um bom nome</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Escolher um bom nome de usuário é o primeiro passo para construir um bom perfil. Seu nome de usuário deve ser muito simples e direto. Evite usar símbolos e outras coisas que façam seu nome parecer bagunçado.
              </p>
              <p class="text-white font-bold text-sm bg-white/5 p-3 rounded-lg border-l-2 border-white">
                Busque um nome que seja simples e fácil de ser lembrado/pronunciado.
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight">2. Palavras-chave</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                É importante entender a diferença entre um nome de usuário e o nome da conta...
              </p>
              
              <div class="max-w-md mx-auto my-6 rounded-xl overflow-hidden border border-white/10">
                <img src="https://i.imgur.com/pHKZEhZ.png" alt="Nome de Usuário vs Nome da Conta" class="w-full h-auto" />
              </div>

              <div class="space-y-3">
                <div class="p-4 bg-[#1a1a1a] rounded-xl border border-white/5">
                  <p class="text-xs font-bold text-white uppercase tracking-widest mb-1">Nome de Usuário:</p>
                  <p class="text-gray-300 text-sm">É o identificador único do perfil, usado com "@" (ex: @exemplo). Serve para buscas, marcações e não pode ser repetido.</p>
                </div>
                <div class="p-4 bg-[#1a1a1a] rounded-xl border border-white/5">
                  <p class="text-xs font-bold text-white uppercase tracking-widest mb-1">Nome da Conta:</p>
                  <p class="text-gray-300 text-sm">É o nome visível no topo do perfil. Pode ser personalizado com texto e não precisa ser único.</p>
                </div>
              </div>

              <p class="text-gray-300 text-sm leading-relaxed pt-4">
                Agora que você entendeu a diferença entre um nome de usuário e o nome da conta, é hora de otimizar seu nome para obter o máximo de alcance.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Inclua 1 a 3 palavras-chave relacionadas a nichos em seu perfil. Isso é muito útil para o <strong>SEO do Instagram</strong>, que é o mecanismo de busca. Isso faz com que quando os usuários pesquisarem determinadas palavras-chave do seu nicho, a sua possa ser uma das primeiras páginas a aparecer no feed de pesquisa.
              </p>
              <p class="text-white text-xs font-bold italic bg-white/5 p-3 rounded-lg border border-white/20">
                Certifique-se de otimizar seu perfil com pelo menos 1 palavras-chave. Exemplo: Nome | palavra-chave | palavra-chave.
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight">3. Foto de perfil</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                A foto do seu perfil dá o tom da sua página. Certifique-se de que expressa você e a ideia por trás da sua página.
              </p>
              <p class="text-gray-400 text-sm leading-relaxed">
                A foto do seu perfil é uma parte importante da imagem da sua marca, mas falaremos sobre sua marca um pouco mais tarde. A foto do seu perfil deve ser clara e concisa. Certifique-se de exibir toda a ideologia da sua página.
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight">4. Biografia estratégica</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Sua biografia tem que estar perfeitamente escrita porque é o principal elemento responsável por converter as visitas do seu perfil em seguidores. Sua biografia TEM que convencer seus seguidores e dizer por que eles devem te seguir.
              </p>

              <div class="max-w-md mx-auto my-6 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://i.imgur.com/lXTIvzj.jpeg" alt="Estrutura de Biografia" class="w-full h-auto" />
              </div>

              <div class="space-y-3">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">Um dos padrões mais usados atualmente (e o que eu recomendo) é uma biografia com 3 linhas, sendo:</p>
                <ul class="space-y-2 text-white font-bold text-sm ml-4">
                  <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> O QUE VOCÊ É</li>
                  <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> O QUE VOCÊ FAZ</li>
                  <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> INFORMAÇÃO ADICIONAL OU CTA</li>
                </ul>
              </div>
            </section>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight">5. Links</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Os links são obviamente muito importantes e fazem com que sua página pareça profissional.
              </p>
              <div class="p-4 bg-white/5 border border-dashed border-white/10 rounded-xl">
                <p class="text-white font-bold text-sm italic">"Mas e se eu precisar adicionar mais links?"</p>
                <p class="text-gray-400 text-sm mt-2">Você pode simplesmente usar uma ferramenta como Linktree ou Beacons. Isso criará uma landing page e exibirá todos os seus links de maneira organizada.</p>
              </div>
            </section>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight">6. Destaques</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Os destaques dos storys adicionam um pouco mais de profissionalismo à sua página se você usá-los corretamente. Você pode usá-los para comercializar seus produtos, pois eles permanecerão em seu perfil para sempre.
              </p>
              <p class="text-white font-bold text-sm">
                Agora é a sua vez! Após cumprir todos esses passos, seu perfil irá se parecer por vindo ou menos assim:
              </p>
              
              <div class="max-w-md mx-auto my-6 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://i.imgur.com/GdbrnbA.jpeg" alt="Exemplo de Perfil Finalizado" class="w-full h-auto" />
              </div>
            </section>

            <div class="mt-12 p-8 bg-white/5 border border-white/20 rounded-2xl">
              <h4 class="text-lg font-black text-white mb-4 uppercase tracking-tighter">Parabéns, Se você fez tudo corretamente, você já:</h4>
              <ul class="space-y-2 text-gray-300 text-sm">
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg> Escolheu um nicho que você se identifique.</li>
                <li class="flex items-center gap-2"><svg class="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg> Criou um perfil atraente e estruturado.</li>
              </ul>
              <div class="mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
                <p class="text-white font-black uppercase tracking-widest text-sm">Agora, você está pronto para começar a aquecer!</p>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'identidade',
    title: 'SUA IDENTIDADE',
    description: 'Dicas para construir uma presença forte',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l6',
        title: 'SUA IDENTIDADE',
        description: 'Dicas para construir uma presença forte',
        content: `
          <div class="space-y-8">
            <p class="text-gray-300 leading-relaxed">
              A sua marca é uma das partes mais importantes na criação de uma imagem de perfil que transmita impacto. Existem alguns elementos fundamentais que desempenham um papel importante na marca da sua conta.
            </p>

            <p class="text-gray-300 leading-relaxed italic border-l-2 border-white/20 pl-4">
              Sua marca ajuda o espectador/leads a reconhecer sua página. Quando sua página está percorrendo por milhares de pessoas, ele deve ser capaz de dizer que o conteúdo é seu apenas pela marca.
            </p>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white uppercase tracking-tighter">Elements de uma boa marca:</h3>
              <ul class="grid grid-cols-2 gap-3">
                <li class="p-3 bg-white/5 border border-white/10 rounded-xl text-center text-xs font-bold uppercase tracking-widest">Esquema de cores</li>
                <li class="p-3 bg-white/5 border border-white/10 rounded-xl text-center text-xs font-bold uppercase tracking-widest">Seleção de fonte</li>
                <li class="p-3 bg-white/5 border border-white/10 rounded-xl text-center text-xs font-bold uppercase tracking-widest">Estilo de vídeo</li>
                <li class="p-3 bg-white/5 border border-white/10 rounded-xl text-center text-xs font-bold uppercase tracking-widest">Estilo de conteúdo</li>
              </ul>
            </section>

            <p class="text-gray-300 text-sm">
              Você tem que cumprir todos esses requisitos para que sua Marca se destaque em seu perfil no Instagram. Agora, vamos tratar cada um destes pontos no detalhe.
            </p>

            <section class="space-y-4">
              <h3 class="text-2xl font-black text-white tracking-tight">1. Esquema de cores</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Seu esquema de cores desempenha o papel mais importante em sua marca. Seja você pretende aparecer ou não.
              </p>
              <div class="p-6 bg-[#111] border border-white/10 rounded-2xl space-y-4">
                <p class="text-white font-bold text-sm">
                  Seu público pode reconhecer imediatamente sua página e seu conteúdo se você acertar nesta parte. Deixe-me explicar como eu uso isso por exemplo:
                </p>
                <p class="text-gray-300 text-sm italic">
                  Eu uso preto e branco em tudo. É brutal, direto, minimalista. Reflete minha linguagem, meu tom e minha entrega.
                </p>
                <p class="text-gray-300 text-sm">
                  Quando a estética conversa com a mensagem, você vira referência - não mais um perfil genérico gritando no vazio. <strong>Acerte nisso, e sua marca vai IMPACTAR antes mesmo de abrir a boca.</strong>
                </p>
              </div>
            </section>

            <section class="space-y-4">
              <h3 class="text-2xl font-black text-white tracking-tight">2. Marca do perfil</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Seu perfil é sua identidade digital. Lembre-se disso.
              </p>
              <p class="text-white font-black text-sm uppercase tracking-widest bg-white/5 p-4 rounded-xl border border-white/10">
                O perfil parece profissional para qualquer público, por isso clicam no botão seguir. Use a marca para parecer profissional.
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-2xl font-black text-white tracking-tight">3. Marca de conteúdo</h3>
              <p class="text-gray-300 text-sm leading-relaxed border-l-4 border-white/10 pl-4 italic">
                Essa combinação de cores é o que funciona para mim e as pessoas reconhecem facilmente meu conteúdo, permitindo-me alcançar milhares de pessoas por semana.
              </p>
              <p class="text-gray-400 text-sm leading-relaxed">
                Você pode se inspirar nos seus criadores favoritos e criar o seu próprio estilo e marca pessoal.
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-2xl font-black text-white tracking-tight">4. Fontes</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Escolher e aderir a uma fonte específica torna sua marca ainda melhor e essa fonte é automaticamente associada ao seu estilo de conteúdo ou estilo de vídeo.
              </p>
              <div class="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <p class="text-white font-bold text-sm mb-4">Eu uso a <span class="text-white">Unbounded</span> e <span class="text-white">Montserrat</span>.</p>
                <div class="space-y-2">
                  <p class="text-xs font-black text-gray-500 uppercase tracking-widest">Algumas fontes que eu acho interessantes para se usar:</p>
                  <ul class="grid grid-cols-2 gap-2 text-white font-bold text-sm italic">
                    <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> Unbounded</li>
                    <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> Montserrat</li>
                    <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> Reveltica</li>
                    <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-white rounded-full"></div> Inter</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        `
      }
    ]
  },
  {
    id: 'funil',
    title: 'AULA DE FUNIL DE VENDAS + ESTRUTURA',
    description: 'Minha estrutura de vendas + funil de vendas',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l7',
        title: 'AULA DE FUNIL DE VENDAS + ESTRUTURA',
        description: 'Minha estrutura de vendas + funil de vendas.',
        content: `
          <div class="space-y-8">
            <section class="space-y-4">
              <h3 class="text-sm font-black text-white uppercase tracking-[0.2em]">MINI AULA EM FORMATO DE VÍDEO</h3>
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">LINK:</p>
                <a href="https://youtu.be/J8IdI2W_-1k" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  MINI AULA EM FORMATO DE VÍDEO
                </a>
              </div>
            </section>

            <section class="space-y-4 pt-6">
              <p class="text-gray-300 leading-relaxed font-medium">
                Aqui você vai ter acesso a minha estrutura pessoal de vendas / meu funil
              </p>
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">LINK:</p>
                <a href="https://miro.com/app/board/uXjVL91drmc=/" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/20 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide text-center">
                  [ CLICK AQUI PARA ACESSAR O MATERIAL APRESENTADO NO VÍDEO ]
                </a>
              </div>
            </section>

            <section class="space-y-4 pt-6">
              <h3 class="text-gray-300 font-medium">Template da minha automação do manychat</h3>
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">LINK:</p>
                <a href="https://app.manychat.com/flowPlayerPage?share_hash=2132611_f88c0b9532b9129c2b583d84f4bffb04e24955ea" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  [ CLICK AQUI PARA ACESSAR O LINK DO TEMPLATE DA MINHA AUTOMAÇÃO PESSOAL DE MANYCHAT ( AUTOMAÇÃO PRONTA ). ]
                </a>
              </div>
            </section>

            <div class="mt-12 pt-8 border-t border-white/5">
              <div class="text-sm text-gray-400">
                Criado por <span class="text-white font-bold">@omentordigitalll</span>
              </div>
            </div>
          </div>
        `
      }
