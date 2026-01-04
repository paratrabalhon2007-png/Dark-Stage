
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
                Depois do seu perfil estruturado ele deve ficar mais ou menos dessa forma ↓
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
                  MINI AULA EM FORMATO DE VÍDEO ↓
                </p>
                <a href="https://youtube.com/shorts/Cu-TmIxFntM?si=VzZZQ-N75uxhy_Qp" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  [ MINI AULA DE COMO CRIAR UM PERFIL DO ZERO, CLICK AQUI ]
                </a>
              </div>

              <div class="space-y-2">
                <p class="font-black text-white uppercase text-xs tracking-widest flex items-center gap-2">
                  MINI AULA EM FORMATO DE VÍDEO ↓
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
                  MINI AULA EM FORMATO DE VÍDEO ↓
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
              OBS: ASSISTA A AULA DE COMO CRIAR UMA HOSPEDAGEM DE LINKS PARA SEU PERFIL ↓
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
              Click abaixo para ver postando o vídeo mostrado na aula de edição ↓
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

            <p class="text-gray-300 leading-relaxed border-l-2 border-white/10 pl-4">
              Um ponto importante a ser observado é que some nichos podem be combinados. Por exemplo, você pode combinar autoaperfeiçoamento e negócios, pois muitas pessoas em uma jornada de autoaperfeiçoamento podem estar interessadas em iniciar um negócio e aprender sobre ideias de negócios.
            </p>

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
                Escolher um bom nome de usuário é the primeiro passo para construir um bom perfil. Seu nome de usuário deve be muito simples e direto. Evite usar símbolos e outras coisas que façam seu nome parecer bagunçado.
              </p>
              <p class="text-white font-bold text-sm bg-white/5 p-3 rounded-lg border-l-2 border-white">
                Busque um nome que seja simples e fácil de ser lembrado/pronunciado.
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight">2. Palavras-chave</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                É importante entender a diferença entre um nome de usuário e the nome da conta...
              </p>
              
              <div class="max-w-md mx-auto my-6 rounded-xl overflow-hidden border border-white/10">
                <img src="https://i.imgur.com/pHKZEhZ.png" alt="Nome de Usuário vs Nome da Conta" class="w-full h-auto" />
              </div>

              <div class="space-y-3">
                <div class="p-4 bg-[#1a1a1a] rounded-xl border border-white/5">
                  <p class="text-xs font-bold text-white uppercase tracking-widest mb-1">Nome de Usuário:</p>
                  <p class="text-gray-300 text-sm">É the identificador único do perfil, usado com "@" (ex: @exemplo). Serve para buscas, marcações e não pode ser repetido.</p>
                </div>
                <div class="p-4 bg-[#1a1a1a] rounded-xl border border-white/5">
                  <p class="text-xs font-bold text-white uppercase tracking-widest mb-1">Nome da Conta:</p>
                  <p class="text-gray-300 text-sm">É the nome visível no topo do perfil. Pode ser personalizado com texto, emojis e não precisa ser único.</p>
                </div>
              </div>

              <p class="text-gray-300 text-sm leading-relaxed pt-4">
                Agora que você entendeu a diferença entre um nome de usuário e the nome da conta, é hora de otimizar seu nome para obter the máximo de alcance.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Inclua 1 a 3 palavras-chave relacionadas a nichos em seu perfil. Isso é muito útil para the <strong>SEO do Instagram</strong>, que é the mecanismo de busca. Isso faz com que quando os usuários pesquisarem determinadas palavras-chave do seu nicho, a sua possa ser uma das primeiras páginas a aparecer no feed de pesquisa.
              </p>
              <p class="text-white text-xs font-bold italic bg-white/5 p-3 rounded-lg border border-white/20">
                Certifique-se de otimizar seu perfil com pelo menos 1 palavras-chave. Exemplo: Nome | palavra-chave | palavra-chave.
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight">3. Foto de perfil</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                A foto do seu perfil dá the tom da sua página. Certifique-se de que expressa você e a ideia por trás da sua página.
              </p>
              <p class="text-gray-400 text-sm leading-relaxed">
                A foto do seu perfil é uma parte importante da imagem da sua marca, mas falaremos sobre sua marca um pouco mais tarde. A foto do seu perfil deve be clara e concisa. Certifique-se de exibir toda a ideologia da sua página.
              </p>
              <p class="text-gray-400 text-sm leading-relaxed">
                Se você for aparecer, busque uma foto sua com qualidade e que passe a imagem que você quer causar em seu conteúdo. Já imaginou um americano de negócios usando uma foto sem camisa?
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight">4. Biografia estratégica</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Isso não cria uma primeira impressão como a foto do seu perfil ou nem mesmo desempenha um papel importante no SEO como the seu nome, mas ainda é muito mais importante do que qualquer outra parte do seu perfil.
              </p>
              <p class="text-gray-400 text-sm leading-relaxed">
                Sua biografia tem que estar perfeitamente escrita porque é the principal elemento responsável por converter as visitas do seu perfil em seguidores. Sua biografia TEM que convencer seus seguidores e dizer por que eles devem te seguir.
              </p>

              <div class="max-w-md mx-auto my-6 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://i.imgur.com/lXTIvzj.jpeg" alt="Estrutura de Biografia" class="w-full h-auto" />
              </div>

              <div class="space-y-3">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">Um dos padrões mais usados atualmente (e the que eu recomendo) é uma biografia com 3 linhas, sendo:</p>
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
              <p class="text-gray-400 text-sm leading-relaxed">
                No entanto, adicionar vários links au seu perfil faz com que pareça que você está vendendo coisas e as pessoas não gostam disso.
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
                <span class="text-2xl">🔥</span>
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
              Sua marca ajuda the espectador/leads a reconhecer sua página. Quando sua página está percorrendo por milhares de pessoas, ele deve be capaz de dizer que the conteúdo é seu apenas pela marca.
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
                Seu esquema de cores desempenha the papel mais importante em sua marca. Seja você pretende aparecer ou não.
              </p>
              <p class="text-gray-400 text-sm leading-relaxed">
                Faça uma busca por criadores famosos que você gosta e através de seus feeds. Você irá perceber que, ao menos a maioria, costuma seguir uma certa estética nas cores de seus vídeos. Sejam tons mais quentes, frios, escuros, claros ou neutros. O ponto é que você precisa aos poucos criar uma identidade visual, mesmo que mude-a no futuro.
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
              <p class="text-gray-400 text-sm leading-relaxed">
                Observe que eu uso a cor preta com branco para destaques e foto de perfil. Esse uso consistente de cores faz com que meu perfil pareça elegante e se destaque.
              </p>
              <p class="text-white font-black text-sm uppercase tracking-widest bg-white/5 p-4 rounded-xl border border-white/10">
                O perfil parece profissional para qualquer público, por isso clicam no botão seguir. Use a marca para parecer profissional.
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-2xl font-black text-white tracking-tight">3. Marca de conteúdo</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Em todos os meus reels que deixo no feed principal, mantenho um esquema de cores consistente. Destaco minhas palavras-chave em negrito e mantenho the restante mais fino.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed border-l-4 border-white/10 pl-4 italic">
                Essa combinação de cores é the que funciona para mim e as pessoas reconhecem facilmente meu conteúdo, permitindo-me alcançar milhares de pessoas por semana.
              </p>
              <p class="text-gray-400 text-sm leading-relaxed">
                Você pode se inspirar nos seus criadores favoritos e criar the seu próprio estilo e marca pessoal.
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-2xl font-black text-white tracking-tight">4. Fontes</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Escolher e aderir a uma fonte específica torna sua marca ainda melhor e essa fonte é automaticamente associada au seu estilo de conteúdo ou estilo de vídeo.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Portanto, eu diria que se você tivesse que escolher uma fonte, use a mesma fonte em todos os reels para manter a consistência da marca. Não é uma virada de jogo, mas certamente ajuda.
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
              <h3 class="text-sm font-black text-white uppercase tracking-[0.2em]">MINI AULA EM FORMATO DE VÍDEO ↓</h3>
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">LINK:</p>
                <a href="https://youtu.be/J8IdI2W_-1k" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  MINI AULA EM FORMATO DE VÍDEO ↓
                </a>
              </div>
            </section>

            <section class="space-y-4 pt-6">
              <p class="text-gray-300 leading-relaxed font-medium">
                Aqui você vai ter acesso a minha estrutura pessoal de vendas / meu funil ↓
              </p>
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">LINK:</p>
                <a href="https://miro.com/app/board/uXjVL91drmc=/" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/20 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide text-center">
                  [ CLICK AQUI PARA ACESSAR O MATERIAL APRESENTADO NO VÍDEO ]
                </a>
              </div>
            </section>

            <section class="space-y-4 pt-6">
              <h3 class="text-gray-300 font-medium">Template da minha automação do manychat ↓</h3>
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
    ]
  },
  {
    id: 'captura',
    title: 'CAPTURA DE CONTEÚDO',
    description: 'Minerando conteúdos virais',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l8',
        title: 'CAPTURA DE CONTEÚDO',
        description: 'Minerando conteúdos virais',
        content: `
          <div class="space-y-8">
            <div class="p-6 bg-white/5 border-l-4 border-white rounded-r-xl">
              <p class="text-white font-black uppercase tracking-widest text-sm mb-4">Atenção, futuros criadores: esta parte é CRUCIAL.</p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Preste atenção. Começar no Instagram parece um bicho de 7 cabeças não é? É porque você ainda tá no escuro. <strong>Este módulo é a luz.</strong> Vou te entregar the essencial pra crescer no Instagram com inteligência, desde técnicas de edição a estratégias de conteúdo que <strong>realmente funcionam</strong>.
              </p>
            </div>

            <p class="text-gray-400 text-sm leading-relaxed">
              Começar no Instagram pode parecer assustador para muitos, mas não precisa ser assim... Neste módulo, vou simplificar os fundamentos do crescimento do Instagram, mapeando as estratégias-chave, desde tempos ideais de postagem até estratégias de conteúdo.
            </p>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight uppercase">Ferramenta Cirúrgica</h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Antes de pensar em tráfego ou escalar qualquer coisa, você precisa de uma base sólida. Por isso, preparei uma ferramenta cirúrgica pra te ajudar a elevar a <strong>QUALIDADE</strong> do seu conteúdo.
              </p>
              
              <div class="space-y-3 pt-2">
                <p class="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Logo abaixo, deixei the link de uma mini aula mostrando exatamente como usar isso do jeito certo ↓</p>
                <a href="https://youtu.be/fEM5fnn4O_Y" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  [ CLICK AQUI PARA ACESSAR A AULA ]
                </a>
                <a href="https://www.notion.so/Lista-de-refer-ncias-1563f99da39280488350d1f24c55086e?source=copy_link" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/20 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide text-center">
                  [ LINK DA FERRAMENTA USADA NA AULA, APENAS CLICK AQUI ]
                </a>
              </div>
            </section>

            <section class="space-y-6 pt-10 border-t border-white/5">
              <h3 class="text-2xl font-black text-white tracking-tighter uppercase italic">O Próximo Passo do Plano</h3>
              <p class="text-gray-300 text-sm leading-relaxed">
                Atualmente, the Instagram favorece vídeos curtos chamados <strong>'reels'</strong>, que acredito serem essenciais para the crescimento. Enquanto alguns nichos usam carrosséis de fotos, considero os reels os mais eficazes para um crescimento mais rápido.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p class="text-white font-bold text-xs uppercase mb-2">Reels</p>
                  <p class="text-gray-500 text-xs">Excelentes para crescimento e alcance orgânico explosivo.</p>
                </div>
                <div class="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p class="text-white font-bold text-xs uppercase mb-2">Fotos/Carrosséis</p>
                  <p class="text-gray-500 text-xs">Ajudam a manter the interesse e autoridade com seus seguidores.</p>
                </div>
              </div>
            </section>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight uppercase">Estratégia de Stories</h3>
              <p class="text-gray-400 text-sm leading-relaxed italic">
                Não há necessidade de postar 10 stories por dia. Mire em pelo menos <strong>uma story por dia</strong> e interaja com seus seguidores através de enquetes, perguntas ou brindes. Isso fornece dados valiosos para the algoritmo e aumenta a visibilidade dos seus reels.
              </p>
            </section>

            <section class="space-y-4">
              <h3 class="text-xl font-black text-white tracking-tight uppercase">Categorias de Conteúdo</h3>
              <p class="text-gray-400 text-sm">Foque em criar conteúdo nessas 5 categorias principais:</p>
              <ul class="flex flex-wrap gap-2">
                <li class="px-3 py-1.5 bg-white/5 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-widest border border-white/10">Educacional</li>
                <li class="px-3 py-1.5 bg-white/5 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-widest border border-white/10">Motivacional</li>
                <li class="px-3 py-1.5 bg-white/5 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-widest border border-white/10">Engraçado</li>
                <li class="px-3 py-1.5 bg-white/5 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-widest border border-white/10">Relacionável</li>
                <li class="px-3 py-1.5 bg-white/5 rounded-full text-[10px] font-bold text-gray-300 uppercase tracking-widest border border-white/10">Entretenimento</li>
              </ul>
            </section>

            <section class="space-y-10 pt-16 border-t border-white/5">
              <h3 class="text-3xl font-black text-white tracking-tighter uppercase italic text-center">A Estrutura do Reel Viral</h3>
              
              <div class="space-y-6">
                <div class="space-y-3">
                  <h4 class="text-lg font-black text-white uppercase flex items-center gap-2">
                    <span class="text-gray-500">1.</span> GANCHO (HOOK)
                  </h4>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    O gancho é the elemento mais importante. Se você errar the início, seu Reels já nasce morto. <strong>Gancho Forte:</strong> Capture a atenção nos primeiros segundos.
                  </p>
                  <div class="max-w-md mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src="https://i.imgur.com/0zLJnrk.png" alt="Gancho Forte" class="w-full h-auto" />
                  </div>
                </div>

                <div class="space-y-3">
                  <h4 class="text-lg font-black text-white uppercase flex items-center gap-2">
                    <span class="text-gray-500">2.</span> VALOR (A BASE)
                  </h4>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    Mantenha os espectadores engajados com informações úteis ou entretenimento. Certifique-se de fornecer valor genuíno para criar reputação.
                  </p>
                  <div class="max-w-md mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src="https://i.imgur.com/LO0O3HQ.png" alt="Valor e Base" class="w-full h-auto" />
                  </div>
                </div>

                <div class="space-y-3">
                  <h4 class="text-lg font-black text-white uppercase flex items-center gap-2">
                    <span class="text-gray-500">3.</span> CTA (CALL TO ACTION)
                  </h4>
                  <p class="text-gray-400 text-sm leading-relaxed">
                    O gatilho que move the espectador para a ação. Incentive a ler a legenda para aumentar the tempo de retenção enquanto the vídeo roda no fundo.
                  </p>
                  <div class="max-w-md mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src="https://i.imgur.com/LveqCsm.png" alt="CTA Estratégico" class="w-full h-auto" />
                  </div>
                </div>
              </div>

              <div class="p-8 bg-white/5 border border-white/10 rounded-2xl text-center space-y-4">
                <h4 class="text-xl font-black text-white uppercase">A Receita Viral: GANCHO + CTA + VALOR</h4>
                <p class="text-gray-400 text-sm leading-relaxed">
                  Esta é a estrutura exata que usei em todos os meus reels. Quanto au comprimento, recomendo de <strong>5 a 8 segundos</strong> para maximizar the loop.
                </p>
              </div>
            </section>

            <div class="mt-16 pt-8 border-t border-white/5">
              <div class="text-sm text-gray-400">
                Criado por <span class="text-white font-bold">@omentordigitalll</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'edicao',
    title: 'MINI AULA DE EDIÇÃO',
    description: 'Aulas de edição',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l9',
        title: 'Aulas de edição',
        description: 'Técnicas de edição de alto impacto.',
        content: `
          <div class="space-y-8">
            <p class="text-gray-300 leading-relaxed">
              Assista à mini aula de edição que eu preparei aqui no link abaixo. Se você não estiver <strong>DOMINANDO</strong> isso, está <strong>PERDENDO TEMPO</strong>. Não fique para trás aprenda a editar com the impacto que seu conteúdo precisa para vender.
            </p>

            <div class="p-4 bg-white/5 border border-dashed border-white/20 rounded-xl">
               <p class="text-gray-400 text-xs font-bold uppercase tracking-widest italic">
                 OBS: LEMBRE DE VER PRIMEIRO O MÓDULO ANTERIOR "CAPTURA DE CONTEÚDO" PARA APRENDER USAR A FERRAMENTA PARA MINERAR CONTEÚDO.
               </p>
            </div>

            <section class="space-y-4 pt-4">
              <h3 class="text-sm font-black text-white uppercase tracking-[0.2em]">LINK DA AULA 1 MEU ESTILO DE CONTEÚDO HOJE:</h3>
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">LINK:</p>
                <a href="https://youtu.be/VjIdKVdiEkE?si=F5WG1y34Pwjrw_sS" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  [ CLICK AQUI PARA ACESSAR A AULA ]
                </a>
              </div>
            </section>

            <section class="space-y-4 pt-4">
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">LINK DA FERRAMENTA:</p>
                <a href="https://outrageous-antler-30c.notion.site/CAPTURA-DE-CONTE-DO-13e3f99da39281299b36c3bb53030398?source=copy_link" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-4 bg-white/5 border border-white/20 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm">
                   <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                   [ LINK DO MÓDULO DA FERRAMENTA COMENTADA NA AULA, APENAS CLICK AQUI ]
                </a>
              </div>
            </section>

            <section class="space-y-4 pt-8 border-t border-white/5">
              <h3 class="text-sm font-black text-white uppercase tracking-[0.2em]">LINK DA AULA 2 MEU ESTILO DE CONTEÚDO ANTIGO:</h3>
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">LINK:</p>
                <a href="https://youtu.be/JEYVnMuOfe4?feature=shared" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  [ CLICK AQUI PARA ACESSAR A AULA ]
                </a>
              </div>
            </section>

            <div class="mt-16 pt-8">
              <div class="text-sm text-gray-400">
                Criado por <span class="text-white font-bold">@omentordigitalll</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'produto-zero',
    title: 'CRIAR UM PRODUTO DO ZERO',
    description: 'O poder da consistência',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l10',
        title: 'Criando um produto do zero',
        description: 'Passo a passo para criar e configurar seu produto.',
        content: `
          <div class="space-y-8">
            <p class="text-gray-300 leading-relaxed">
              Neste módulo, vamos focar em como você pode criar seu próprio produto digital do zero, definindo uma ideia sólida e estruturando-the para venda e revenda.
            </p>

            <section class="space-y-4">
              <h3 class="text-sm font-black text-white uppercase tracking-[0.2em]">MINI AULA DE COMO CRIAR UM PRODUTO DO ZERO IDEIA 💡 ↓</h3>
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">ASSISTA AQUI:</p>
                <a href="https://youtu.be/Ta2jp85eNfA?si=u44n1sujU1R9k6UT" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  [ CLICK AQUI PARA ACESSAR A AULA ]
                </a>
              </div>
            </section>

            <section class="space-y-4 pt-4">
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">MATERIAL DE APOIO:</p>
                <a href="https://outrageous-antler-30c.notion.site/Meu-Guia-Gratuito-11d3f99da39280eb92aad12479d20aaa?source=copy_link" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-4 bg-white/5 border border-white/20 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm">
                   <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                   [ LINK DO TEMPLATE DA AULA ACIMA CLICK AQUI ]
                </a>
              </div>
            </section>

            <section class="space-y-4 pt-8 border-t border-white/5">
              <h3 class="text-sm font-black text-white uppercase tracking-[0.2em]">AULA DE COMO CRIAR UM PRODUTO DO ZERO E SUBIR PARA REVENDA ↓</h3>
              <div class="space-y-2">
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">ASSISTA AQUI:</p>
                <a href="https://youtube.com/shorts/olE55yJn_E4?si=OCx5ZVVvznGIZszG" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide">
                  [ CLICK AQUI PARA ACESSAR A AULA ]
                </a>
              </div>
            </section>

            <div class="mt-16 pt-8">
              <div class="text-sm text-gray-400">
                Criado por <span class="text-white font-bold">@omentordigitalll</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'metodo',
    title: 'MÉTODO',
    description: 'Descrição completa da estratégia',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l11',
        title: 'MÉTODO',
        description: 'Descrição completa da estratégia de faturamento.',
        content: `
          <div class="space-y-8">
            <p class="text-gray-300 leading-relaxed">
              Aqui, você vai acessar a estratégia que realmente gera faturamento na internet. Não é teoria, é the que me faz vender de verdade. Se você está pronto para resultados, clica no link e veja como eu faço.
            </p>

            <section class="space-y-4">
              <p class="text-xs font-bold text-gray-500 uppercase tracking-widest">LINK:</p>
              <a href="https://heyzine.com/flip-book/41fc3076e1.html" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-xl text-center text-white font-black uppercase tracking-[0.1em] hover:bg-white/10 transition-all shadow-inner">
                [ APENAS CLICK AQUI PARA RECEBER O ACESSO DO MEU MÉTODO. ]
              </a>
            </section>

            <div class="p-6 bg-gray-600/10 border border-white/10 rounded-xl flex items-start gap-4">
               <div class="p-2 bg-white/10 rounded-lg">
                 <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
               </div>
               <p class="text-gray-300 text-sm font-medium leading-relaxed">
                 <strong class="text-white">IMPORTANTE:</strong> Se você adquiriu os direitos de revenda, poderá ter acesso au modelo editável no próximo capítulo deste módulo.
               </p>
            </div>

            <section class="pt-12 border-t border-white/5 space-y-6">
              <h3 class="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                PRÓXIMO CAPÍTULO 👇
              </h3>
              <p class="text-gray-400 text-sm leading-relaxed">
                Clique em <strong class="text-white">"Próximo Capítulo"</strong> abaixo para receber the <strong class="text-white">modelo editável do meu método</strong> e começar hoje mesmo a criar seu próprio produto com <strong class="text-white">100% de comissão</strong>.
              </p>
              
              <a href="https://outrageous-antler-30c.notion.site/PR-XIMO-CAP-TULO-1d33f99da39280fc8864ce4147b7dec4?source=copy_link" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl text-white font-black uppercase tracking-widest hover:bg-white/10 transition-all group">
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                PRÓXIMO CAPÍTULO
              </a>
            </section>

            <div class="mt-16 pt-8">
              <div class="text-sm text-gray-400">
                Criado por <span class="text-white font-bold">@omentordigitalll</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'guia-gratuito',
    title: 'GUIA GRATUITO 📄',
    description: 'Como criar um guia grátis',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l12',
        title: 'Como montar um Guia Gratuito',
        description: 'Estratégia de Lead Magnet e posicionamento.',
        content: `
          <div class="space-y-8">
            <div class="space-y-4">
              <p class="text-gray-300 leading-relaxed text-lg font-medium">
                Você realmente acha que precisa de 10 mil seguidores pra vender?
              </p>

              <div class="space-y-1">
                <h3 class="text-white font-black text-xl uppercase tracking-tighter">A verdade?</h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                  Você não tem um problema de alcance. Você tem um problema de falta de posicionamento e estrutura.
                </p>
              </div>

              <p class="text-gray-300 font-medium italic">E esse módulo resolve exatamente isso:</p>

              <p class="text-gray-400 text-sm leading-relaxed">
                Aqui, eu vou te mostrar the <strong class="text-white">Lead Magnet</strong> que uso dentro da <strong class="text-white">Kirvano</strong> e por que ele funciona como uma armadilha estratégica pra capturar atenção, gerar desejo e converter curiosos em compradores <strong class="text-white">mesmo em perfis pequenos.</strong>
              </p>
            </div>

            <section class="p-6 bg-[#111] border border-white/5 rounded-2xl space-y-4">
              <h4 class="text-white font-black uppercase tracking-tight italic">But afinal como criar um guia grátis mentor ?</h4>
              <p class="text-gray-400 text-sm leading-relaxed">
                Vá em no módulo chamado <button data-navigate-module="metodo" class="text-white font-black uppercase underline hover:opacity-70 transition-colors">“MÉTODO”</button> acesse the livro e vá até a página do capítulo 5. Lá, eu ensino como de fato montar um guia gratuito.
              </p>
            </section>

            <section class="space-y-6 pt-4">
              <h3 class="text-sm font-black text-white uppercase tracking-[0.2em] flex items-center gap-2">
                <span class="w-8 h-[1px] bg-white/20"></span>
                MINI AULA DE COMO MONTAR UM GUIA GRATUITO 🆓
              </h3>
              
              <div class="space-y-3">
                <a href="https://youtu.be/T8QXCbdXUM4" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide text-center">
                  [ CLICK AQUI PARA ACESSAR A AULA ]
                </a>

                <div class="p-4 bg-white/5 border border-white/10 rounded-xl flex items-start gap-3">
                  <div class="p-1 bg-white/10 rounded">
                    <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                    OBS: Se clicar no nome Método vai ser direcionado para the modelo de forma automática.
                  </p>
                </div>
              </div>
            </section>

            <div class="mt-16 pt-8">
              <div class="text-sm text-gray-400">
                Criado por <span class="text-white font-bold">@omentordigitalll</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'templates',
    title: 'TEMPLATES GUIAS',
    description: 'Aulas de como editar o guia grátis',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l13',
        title: 'Como usar e editar os Templates',
        description: 'Instruções para duplicar e personalizar seus materiais.',
        content: `
          <div class="space-y-8">
            <p class="text-gray-300 leading-relaxed">
              Aqui está um template pronto do Notion para você vender ou utilizar como Lead Magnet/Produto Grátis assim como eu. Essa estratégia de Produto Grátis + Upsell Pago foi the diferencial que me fez vender MUITO mesmo com pouca audiência. Espero que aproveite!
            </p>

            <section class="space-y-4 p-6 bg-[#111] border border-white/5 rounded-2xl">
              <h3 class="text-white font-black uppercase tracking-tight italic mb-4">Instruções de Uso:</h3>
              <ol class="space-y-3 text-gray-400 text-sm">
                <li class="flex gap-3"><span class="text-white font-bold">1.</span> Abra the link do template.</li>
                <li class="flex gap-3"><span class="text-white font-bold">2.</span> Acima no canto superior direito, clique em "duplicar" para criar uma versão para você.</li>
                <li class="flex gap-3"><span class="text-white font-bold">3.</span> Agora basta editar e adaptar au seu tipo de conteúdo/nicho.</li>
                <li class="flex gap-3"><span class="text-white font-bold">4.</span> Após finalizar the seu guia gratuito, clique acima em "COMPARTILHAR".</li>
                <li class="flex gap-3"><span class="text-white font-bold">5.</span> Depois selecione a opção "PUBLICAR" e "PUBLICAR SITE".</li>
                <li class="flex gap-3"><span class="text-white font-bold">6.</span> Dessa forma, você terá acesso au link do seu template no formato de site para entregar aos seus clientes.</li>
              </ol>
            </section>

            <div class="space-y-6 pt-4">
              <div class="space-y-3">
                <p class="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Template guia (caso quiser criar um específico para você de acordo a sua identidade) ↓</p>
                <a href="https://outrageous-antler-30c.notion.site/Template-de-Guia-1d33f99da39280409c25fb08640ca779?source=copy_link" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide text-center">
                  [ CLICK AQUI PARA TER ACESSO AO TEMPLATE ]
                </a>
              </div>

              <div class="space-y-3">
                <p class="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Template editável da lista de referência ↓</p>
                <a href="https://outrageous-antler-30c.notion.site/Template-da-Lista-de-refer-ncia-1573f99da39280a5a4c3c9bb6642256d?source=copy_link" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide text-center">
                  [ CLICK AQUI PARA TER ACESSO AO TEMPLATE ]
                </a>
              </div>
            </div>

            <section class="space-y-6 pt-10 border-t border-white/5">
              <div class="space-y-3">
                <h4 class="text-xs font-black text-white uppercase tracking-widest">[ MINI AULA DE COMO EDITAR O TEMPLATE GUIA PARA CRIAR UM CURSO, GUIA GRATUITO OU OQ VOCE QUISER, CLICK AQUI ]</h4>
                <a href="https://youtu.be/TV6PPvPb31I?si=dwa-k1_Mya-4Pf7j" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide text-center">
                  ASSISTIR AULA DE EDIÇÃO DE TEMPLATE
                </a>
              </div>

              <div class="space-y-3">
                <h4 class="text-xs font-black text-white uppercase tracking-widest">[ MINI AULA DE COMO EDITAR E ADICIONAR MAIS REFERÊNCIAS NA LISTA DE MINERAÇÃO DE CONTEÚDO ]</h4>
                <a href="https://youtu.be/xzea0oQiyk4?feature=shared" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all text-sm uppercase tracking-wide text-center">
                  ASSISTIR AULA DE MINERAÇÃO
                </a>
              </div>
            </section>

            <div class="mt-16 pt-8">
              <div class="text-sm text-gray-400">
                Criado por <span class="text-white font-bold">@omentordigitalll</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'consistencia',
    title: 'Consistência',
    description: 'O poder da consistência',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l14',
        title: 'O Poder da Consistência',
        description: 'A chave para the crescimento a longo prazo.',
        content: `
          <div class="space-y-8">
            <p class="text-gray-300 leading-relaxed">
              O sucesso no Instagram, assim como qualquer habilidade ou empreendimento, depende da <strong class="text-white">consistência</strong>. Diversos experimentos realizados por outros confirmaram que the Instagram favorece aqueles que mantêm uma presença consistente, e isso é verdade.
            </p>

            <p class="text-gray-300 leading-relaxed italic border-l-2 border-white/20 pl-4">
              Ao compartilhar conteúdo regularmente, você fornece au Instagram mais dados para entender seu público, permitindo que a plataforma the promova para um público mais amplo.
            </p>

            <section class="space-y-4">
              <p class="text-gray-400 text-sm leading-relaxed">
                A consistência vai além do seu cronograma de postagens; ela se estende au tipo de conteúdo que você compartilha. Como mencionado anteriormente, manter-se em um nicho é crucial. Postar conteúdo de dez nichos diferentes confunde the Instagram, dificultando a identificação do seu público-alvo.
              </p>
            </section>

            <div class="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
              <h4 class="text-white font-black uppercase tracking-tight italic">Sejamos realistas:</h4>
              <p class="text-gray-400 text-sm leading-relaxed">
                Alcançar 100k seguidores em alguns meses é uma ocorrência rara, a menos que você seja uma celebridade criando uma nova conta no Instagram. Para a maioria das pessoas, tais resultados não acontecem, a menos que tenham muita sorte.
              </p>
              <p class="text-gray-400 text-sm leading-relaxed">
                Muitas pessoas experimentam momentos de <strong class="text-white">estagnação</strong>. Por que estou mencionando isso? Porque quando você encontrar essas fases de baixo alcance e zero seguidores novos, que podem durar algumas semanas, é crucial adotar uma <strong>mentalidade de perseverança</strong>.
              </p>
            </div>

            <section class="space-y-4 pt-4">
              <p class="text-gray-300 text-sm leading-relaxed font-medium">
                Eu vi pelo menos 10 pessoas que inicialmente produziram um excelente conteúdo. Seus seguidores cresceram para 1k seguidores em poucos dias, para apenas passar por um período ruim de um mês sem novos seguidores.
              </p>
              
              <div class="p-4 bg-white/5 border border-white/10 rounded-xl">
                 <p class="text-white font-bold text-sm">
                   "A maioria deles desistiu, mas uma pessoa persistiu e agora tem 49k seguidores, com crescimento contínuo e rápido. Isso exemplifica a beleza da consistência."
                 </p>
              </div>
            </section>

            <div class="mt-16 pt-8">
              <div class="text-sm text-gray-400">
                Criado por <span class="text-white font-bold">@omentordigitalll</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas Essenciais',
    description: 'Ferramentas para criadores de conteúdo',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'l15',
        title: 'Ferramentas Essenciais',
        description: 'As ferramentas que utilizo e recomendo para aumentar sua produtividade.',
        content: `
          <div class="space-y-8">
            <p class="text-gray-300 leading-relaxed font-medium">
              Aqui estão as ferramentas que eu utilizo e recomendo que você use para que aumente a sua produtividade:
            </p>

            <div class="grid gap-4">
              <div class="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-white/30 transition-all">
                <h4 class="text-white font-black uppercase tracking-tight mb-2">1. Canva</h4>
                <p class="text-gray-400 text-sm leading-relaxed">Criar capas para reels, carrosséis atrativos e designs para meus produtos digitais.</p>
              </div>

              <div class="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-white/30 transition-all">
                <h4 class="text-white font-black uppercase tracking-tight mb-2">2. Kirvano</h4>
                <p class="text-gray-400 text-sm leading-relaxed">Plataforma que uso para hospedar meus produtos gratuitos e coletar emails.</p>
              </div>

              <div class="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-white/30 transition-all">
                <h4 class="text-white font-black uppercase tracking-tight mb-2">3. CapCut</h4>
                <p class="text-gray-400 text-sm leading-relaxed">Aplicativo que uso para editar meus vídeos e criar conteúdo.</p>
              </div>

              <div class="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-white/30 transition-all">
                <h4 class="text-white font-black uppercase tracking-tight mb-2">4. ManyChat</h4>
                <p class="text-gray-400 text-sm leading-relaxed">Um dos melhores bots para automatizar the seu perfil do Instagram e fazendo-the responder comentários, enviar mensagens prontas com the link do seu produto, etc.</p>
              </div>

              <div class="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-white/30 transition-all">
                <h4 class="text-white font-black uppercase tracking-tight mb-2">5. ChatGPT</h4>
                <p class="text-gray-400 text-sm leading-relaxed">IA pra ajudar você a escrever seu conteúdo, tirar ideias de ganchos, legendas, e muito mais! <strong class="text-white italic">(use muito)</strong></p>
              </div>

              <div class="p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-white/30 transition-all">
                <h4 class="text-white font-black uppercase tracking-tight mb-2">6. Notion</h4>
                <p class="text-gray-400 text-sm leading-relaxed">Ferramenta que você está usando agora. É uma das melhores ferramentas de anotações para se organizar em diversas áreas da sua vida e estruturar the seu calendário de posts semanais.</p>
              </div>
            </div>

            <div class="mt-16 pt-8">
              <div class="text-sm text-gray-400">
                Criado por <span class="text-white font-bold">@omentordigitalll</span>
              </div>
            </div>
          </div>
        `
      }
    ]
  }
];
