
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
          <div class="space-y-8">
            <p class="text-gray-300 leading-relaxed text-base">
              Agora está na hora de você criar sua conta! E eu recomendo que você crie uma do <strong>ZERO</strong> para começar do jeito certo. Abaixo você terá acesso a uma estrutura completa que eu utilizo em <strong>TODOS</strong> os meus perfis além de um passo a passo completo onde te ensino a aquecer da forma correta para evitar que seu conteúdo não seja entregue no início.
            </p>

            <div class="space-y-4">
               <a href="https://youtu.be/7B_1ATnnmww" target="_blank" rel="noopener noreferrer" class="block w-full">
                <div class="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[1.5rem] text-center font-bold tracking-[0.2em] uppercase text-white shadow-2xl hover:bg-white/10 hover:border-white/30 transition-all group active:scale-[0.98]">
                  <div class="flex items-center justify-center gap-4">
                    <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    [ AULA INTRODUTÓRIA - COMECE AQUI ]
                  </div>
                </div>
              </a>
            </div>

            <div class="space-y-4">
              <p class="font-bold text-white uppercase text-[10px] tracking-[0.3em]">LINK:</p>
              <a href="https://miro.com/app/board/uXjVLSWuwQM=/" target="_blank" rel="noopener noreferrer" class="group block p-5 bg-white/[0.03] border border-white/10 rounded-[1rem] text-white hover:bg-white/5 transition-all">
                <span class="font-bold text-white text-sm block uppercase tracking-tighter">[ CLICK AQUI PARA VIZUALIZAR NOSSA ESTRUTURA BASE ]</span>
                <p class="text-[9px] text-gray-500 mt-2 uppercase font-medium tracking-[0.1em]">Acesse o mapa mental detalhado da operation</p>
              </a>
            </div>

            <div class="space-y-6 pt-4">
              <p class="text-gray-300 text-sm leading-relaxed">
                Click no "criando um perfil do zero" para assistir as aulas básicas onde vou ensinar o passo a passo de como criar e crescer um perfil na prática.
              </p>
              
              <button data-navigate-module="perfil-zero" class="w-full p-6 md:p-8 bg-white/5 border border-white/10 rounded-[1.5rem] text-center font-bold tracking-[0.1em] uppercase text-white hover:bg-white/10 hover:border-white/40 transition-all shadow-inner">
                [ Criando um perfil do zero ]
              </button>
            </div>

            <div class="space-y-4 pt-6 border-t border-white/5">
              <p class="text-gray-400 text-sm leading-relaxed">
                Leia este mapa mental aos poucos e vá seguindo todos os passos necessários para criar uma conta bem estruturada e mantê-la aquecida antes de postar o seu primeiro vídeo. 
                <strong>Eu recomendo que você aqueça-a por no mínimo 7 DIAS antes de começar a postar.</strong>
              </p>
            </div>

            <div class="pt-8 space-y-6">
              <p class="text-gray-300 font-medium text-sm">Depois do seu perfil estruturado ele deve ficar mais ou menos dessa forma ↓</p>
              <div class="max-w-[320px] mx-auto bg-[#0f0f0f] rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
                <img src="https://i.imgur.com/aWRzXH2.jpeg" alt="Perfil Estruturado" class="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'levantando-caixa',
    title: 'LEVANTANDO CAIXA RÁPIDO NO TRÁFEGO ORGÂNICO',
    description: 'FUNDAMENTOS DO CAIXA RÁPIDO',
    icon: 'PaperAirplane',
    lessons: [
      {
        id: 'lc-aula-1',
        title: 'Aula 1: Estratégia de Venda Rápida',
        description: 'Levantando caixa no orgânico',
        content: `
          <div class="space-y-10">
            <p class="text-gray-300 text-base leading-relaxed">
              Assista à aula abaixo onde eu te mostro a estratégia cirúrgica para levantar caixa rápido no tráfego orgânico. Essa é a base para quem quer começar a faturar sem investir em anúncios logo de cara.
            </p>

            <div class="space-y-6">
               <a href="https://youtu.be/zPfaqFwTOAY?si=FfCaiehKkmAScfG7" target="_blank" rel="noopener noreferrer" class="block w-full">
                <div class="p-6 md:p-8 bg-white/5 border border-white/10 rounded-[1.5rem] text-center font-bold tracking-[0.2em] uppercase text-white shadow-2xl hover:bg-white/10 hover:border-white/30 transition-all group active:scale-[0.98]">
                  <div class="flex items-center justify-center gap-4">
                    <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    [ ASSISTIR AULA 1 - CLICK AQUI ]
                  </div>
                </div>
              </a>
            </div>

            <div class="p-6 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-white">
              <p class="text-white font-bold text-[10px] uppercase tracking-widest mb-2 italic">DICA DE OURO:</p>
              <p class="text-gray-400 text-xs italic leading-relaxed">
                Aplique cada passo demonstrado no vídeo simultaneamente com a criação do seu conteúdo. O tráfego orgânico premia a consistência e a qualidade do gancho.
              </p>
            </div>

            <div class="pt-6 border-t border-white/5 text-center">
              <p class="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em]">Dark Stage™ - Operação Orgânica</p>
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
        title: 'Estruturação Prática', 
        description: 'Criando e configurando the perfil',
        content: `
          <div class="space-y-10">
            <p class="text-gray-300 text-base leading-relaxed">
              Agora está na hora de você criar sua conta! E eu recomendo que você crie uma do <strong>ZERO</strong> para começar do jeito certo. Abaixo você terá acesso a uma estrutura completa que eu utilizo em <strong>TODOS</strong> os meus perfis, além de um passo a passo completo onde te ensino a aquecer da forma correta para evitar que seu conteúdo não seja entregue no início.
            </p>

            <div class="space-y-4">
              <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">MINI AULA EM FORMATO DE VÍDEO ↓</p>
              <a href="https://www.youtube.com/shorts/Cu-TmIxFntM" target="_blank" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                [ MINI AULA DE COMO CRIAR UM PERFIL DO ZERO, CLICK AQUI ]
              </a>
            </div>

            <div class="space-y-4">
              <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">MINI AULA EM FORMATO DE VÍDEO ↓</p>
              <a href="https://youtube.com/shorts/UaaR7xNsMdA?si=bJ4-Oye7686p9w7n" target="_blank" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                [ MINI AULA DE COMO ESCOLHER UMA FOTO DE PERFIL E MONTAR BIOGRAFIA ATRATIVA, CLICK AQUI ]
              </a>
              <button data-navigate-module="estruturando" class="w-full p-5 bg-white/[0.03] border border-white/5 rounded-2xl text-gray-400 font-bold uppercase text-[9px] tracking-tighter hover:text-white transition-colors">
                [ CLICK AQUI PARA SER DIRECIONADO PARA O MÓDULO DE ESTRUTURAÇÃO DE PERFIL. ]
              </button>
            </div>

            <div class="space-y-4">
              <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">MINI AULA EM FORMATO DE VÍDEO ↓</p>
              <a href="https://youtu.be/HvVyu71E7tc?si=CoPPLKCNB3bgcxgk" target="_blank" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                [ MINI AULA DE COMO FAZER O AQUECIMENTO DE PERFIL DA FORMA CORRETA, CLICK AQUI ]
              </a>
            </div>

            <div class="space-y-4 pt-4 border-t border-white/5">
              <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">OBS: ASSISTA A AULA DE COMO CRIAR UMA HOSPEDAGEM DE LINKS PARA SEU PERFIL ↓</p>
              <a href="https://youtu.be/qyymeepdKV8?si=IaOtA-msb2GqfedT" target="_blank" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                [ MINI AULA DE COMO CRIAR UM CURADOR DE LINKS NA BENTO E MONTAR O DESING DAS CAPAS DOS LINKS, CLICK AQUI ]
              </a>
              <div class="flex items-center justify-between p-4 bg-white/[0.02] rounded-xl border border-white/5">
                <span class="text-[9px] text-gray-500 font-bold uppercase">SITE USADO NA AULA PARA A HOSPEDAGEM DE LINKS</span>
                <a href="https://bento.me" target="_blank" class="text-[9px] text-white font-black underline">BENTO.ME</a>
              </div>
            </div>

            <div class="space-y-4">
              <p class="text-gray-400 text-[10px] font-medium italic">Click abaixo para vê postando o vídeo mostrado na aula de edição ↓</p>
              <a href="https://youtube.com/shorts/4tK_58SJPio?si=l1ycHEXfUD5zclic" target="_blank" class="block p-5 bg-white/[0.03] border border-white/5 rounded-xl text-white font-bold text-center uppercase text-[10px] tracking-widest">
                [ POSTANDO O VÍDEO APÓS O AQUECIMENTO DE PERFIL ]
              </a>
              <a href="https://youtube.com/shorts/K49DO-plSXc?si=1Xn2atpTpPClSZoe" target="_blank" class="block p-5 bg-white/[0.03] border border-white/5 rounded-xl text-white font-bold text-center uppercase text-[10px] tracking-widest">
                [ RESULTADO FINAL VÍDEO DO MÓDULO CRIANDO UM PERFIL DO ZERO. ]
              </a>
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
        description: 'Estratégia de posicionamento',
        content: `
          <div class="space-y-8">
            <div class="space-y-6">
              <p class="text-gray-300 text-base leading-relaxed">
                Definir seu nicho é crucial, pois você não pode ficar trocando de foco constantemente. Caso contrário, o algoritmo pode ficar confuso sobre se deve promover seu conteúdo para amantes de gatos ou entusiastas de academia. Consegue entender?
              </p>
              <p class="text-gray-300 text-base leading-relaxed">
                É fundamental selecionar um nicho e mantê-lo consistentemente. Em vez de optar por um nicho extremamente restrito, como uma página dedicada apenas a pneus de carro, considere uma abordagem mais ampla, como carros. Essa abordagem proporcionará um alcance mais amplo, atraindo ainda assim uma audiência interessada em pneus.
              </p>
              <p class="text-gray-300 text-base leading-relaxed">
                A chave é descobrir um nicho considerando sobre o que você se sente confortável em discutir, pelo que você é apaixonado e onde possui conhecimento para compartilhar.
              </p>
              <p class="text-gray-300 text-base leading-relaxed">
                Embora alguns se preocupem que certos nichos possam ser menos lucrativos, até certo ponto, isso é verdade. No entanto, é essencial lembrar que onde o dinheiro flui, as pessoas seguem. Isso implica que nichos lucrativos geralmente vêm com maior competição.
              </p>
            </div>

            <div class="p-8 bg-white/[0.03] border border-white/5 rounded-[1.5rem] space-y-4">
              <p class="text-white font-bold uppercase text-[10px] tracking-widest italic">Aqui estão algumas ideias de nicho para você:</p>
              <ul class="space-y-2 text-gray-400 text-sm font-medium">
                <li>• Negócios</li>
                <li>• Alimentação e Culinária</li>
                <li>• Cuidados com a Pele</li>
                <li>• Marketing Digital</li>
                <li>• Autoaperfeiçoamento</li>
              </ul>
            </div>

            <div class="space-y-6">
              <p class="text-gray-300 text-base leading-relaxed">
                Um ponto importante a ser observado é que some nichos podem ser combinados. Por exemplo, você pode combinar autoaperfeiçoamento e negócios, pois muitas pessoas em uma jornada de autoaperfeiçoamento podem estar interessadas em iniciar um negócio e aprender sobre ideias de negócios.
              </p>
              <p class="text-white font-bold text-sm italic">Meu nicho é: Negócios e Desenvolvimento Pessoal</p>
            </div>

            <div class="space-y-6">
              <p class="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Aqui estão alguns exemplos de outras páginas que me inspiram:</p>
              <div class="rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f0f0f]">
                <img src="https://i.imgur.com/4rXUrl2.png" alt="Exemplos de Nichos" class="w-full h-auto object-cover" />
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
        title: 'Estruturação de Perfil', 
        description: 'Tudo sobre design e autoridade',
        content: `
          <div class="space-y-12">
            <p class="text-gray-300 text-base leading-relaxed">
              Esta é a base de qualquer perfil do Instagram. Esta seção envolve configurar seu perfil e tornar sua conta apresentável para o mundo. Seus visualizadores e visitantes de perfil julgarão sua página com base na aparência de seu perfil. Certifique-se de que eles criem uma boa impressão.
            </p>

            <div class="space-y-6">
              <h2 class="text-2xl font-bold italic text-white tracking-tighter">1. Escolhendo um bom nome</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                Escolher um bom nome de usuário é the primeiro passo para construir um bom perfil. Seu nome de usuário deve ser muito simples e direto. Evite usar símbolos e outras coisas que façam seu nome parecer bagunçado.
              </p>
              <p class="text-white font-bold text-sm">Busque um nome que seja simples e fácil de ser lembrado/pronunciado.</p>
            </div>

            <div class="space-y-6">
              <h2 class="text-2xl font-bold italic text-white tracking-tighter">2. Palavras-chave</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                É importante entender a diferença entre um nome de usuário e o nome da conta...
              </p>
              <div class="rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f0f] max-sm mx-auto shadow-2xl">
                <img src="https://i.imgur.com/fLCZk2G.png" alt="Diferença entre nome de usuário e conta" class="w-full h-auto" />
              </div>
              <p class="text-gray-300 text-sm leading-relaxed italic border-l-2 border-white/20 pl-4">
                <strong>Nome de Usuário:</strong> É o identificador único do perfil, usado com "@" (ex: @exemplo). Serve para buscas, marcações e não pode ser repetido.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed italic border-l-2 border-white/20 pl-4">
                <strong>Nome da Conta:</strong> É o nome visível no topo do perfil. Pode ser personalizado com texto, emojis e não precisa ser único.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Agora que você entendeu a diferença, é hora de otimizar seu nome para obter o máximo de alcance. Inclua 1 a 3 palavras-chave relacionadas a nichos em seu perfil. Isso é muito útil para o <strong>SEO do Instagram</strong>, que é the mecanismo de busca.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Isso faz com que quando os usuários pesquisarem determinadas palavras-chave do seu nicho, a sua possa ser uma das primeiras páginas a aparecer no feed de pesquisa.
              </p>
              <div class="bg-white/5 p-4 rounded-xl border border-white/10 text-[10px] font-bold uppercase">
                CERTIFIQUE-SE DE OTIMIZAR SEU PERFIL COM PELO MENOS 1 PALAVRA-CHAVE. EXEMPLO:<br/>
                <span class="text-white">Nome | palavra-chave | palavra-chave...</span>
              </div>
            </div>

            <div class="space-y-6">
              <h2 class="text-2xl font-bold italic text-white tracking-tighter">3. Foto de perfil</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                A foto do seu perfil dá o tom da sua página. Certifique-se de que ela expressa você e a ideia por trás da sua página. Ela é uma parte importante da imagem da sua marca, mas falaremos sobre sua marca um pouco mais tarde.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                A foto do seu perfil deve ser clara e concisa. Certifique-se de exibir toda a ideologia da sua página. Se você for aparecer, busque uma foto sua com quality e que passe a imagem que você quer causar em seu conteúdo.
              </p>
              <p class="text-gray-400 text-xs italic">Já imaginou um empresário que dá dicas de investimentos e empreendedorismo usando uma foto de perfil sem camisa no seu perfil profissional?</p>
            </div>

            <div class="space-y-6">
              <h2 class="text-2xl font-bold italic text-white tracking-tighter">4. Biografia estratégica</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                Isso não cria uma primeira impressão como a foto do seu perfil ou nem mesmo desempenha um papel importante no SEO como o seu nome, mas ainda é muito mais importante do que qualquer outra parte do seu perfil.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed italic border-l-2 border-white/20 pl-4">
                Sua biografia tem que estar perfeitamente escrita porque é o principal elemento responsável por converter as visitas do seu perfil em seguidores. Ela TEM que convencer seus seguidores e dizer por que eles devem te seguir.
              </p>
              <div class="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                <p class="text-white font-bold text-xs uppercase">Um dos padrões mais usados atualmente (e o que eu recoendo) é uma biografia com 3 linhas, sendo:</p>
                <ul class="space-y-2 text-gray-400 text-[11px] font-bold uppercase">
                  <li>— O QUE VOCÊ É</li>
                  <li>— O QUE VOCÊ FAZ</li>
                  <li>— INFORMAÇÃO ADICIONAL OU CTA</li>
                </ul>
              </div>
              <div class="rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl">
                <img src="https://i.imgur.com/0TzaKz4.jpeg" alt="Exemplo de Biografia" class="w-full h-auto" />
              </div>
            </div>

            <div class="space-y-6">
              <h2 class="text-2xl font-bold italic text-white tracking-tighter">5. Links</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                Os links são obviamente muito importantes e fazem com que sua página pareça profissional. No entanto, adicionar vários links ao seu perfil faz com que pareça que você está vendendo coisas e as pessoas não gostam disso.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                "Mas e se eu precisar adicionar mais links?" Você pode simplesmente usar uma ferramenta como Linktree ou Beacons. Isso criará uma landing page e exibirá todos os seus links de maneira organizada.
              </p>
            </div>

            <div class="space-y-6">
              <h2 class="text-2xl font-bold italic text-white tracking-tighter">6. Destaques</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                Os destaques dos storys adicionam um pouco mais de profissionalismo à sua página se você usá-los corretamente. Você pode usá-los para comercializar seus produtos, pois eles permanecerão em seu perfil para sempre.
              </p>
              <div class="rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl">
                <img src="https://i.imgur.com/TPbMtoK.jpeg" alt="Exemplo de Destaques" class="w-full h-auto" />
              </div>
            </div>

            <div class="pt-10 border-t border-white/5 space-y-6">
              <p class="text-white font-bold text-lg italic tracking-tighter text-center">Parabéns, Se você fez tudo corretamente, você já:</p>
              <ul class="space-y-3 max-w-sm mx-auto">
                <li class="flex items-center gap-3 text-sm text-gray-300"><span class="text-green-500">✓</span> Escolheu um nicho que você se identifique.</li>
                <li class="flex items-center gap-3 text-sm text-gray-300"><span class="text-green-500">✓</span> Criou um perfil atraente e estruturado.</li>
              </ul>
              <div class="p-8 bg-white text-black rounded-[2rem] text-center font-bold uppercase tracking-tighter">
                Agora, você 🔥 está pronto para começar a aquecer!
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
        id: 'l8', 
        title: 'Branding e Presença', 
        description: 'Construindo sua marca dark',
        content: `
          <div class="space-y-12">
            <div class="space-y-6">
              <p class="text-gray-300 text-base leading-relaxed">
                A sua marca é uma das partes mais importantes na criação de uma imagem de perfil que transmita impacto.
              </p>
              <p class="text-gray-300 text-base leading-relaxed">
                Existem alguns elementos fundamentais que desempenham um papel importante na marca da sua conta.
              </p>
              <p class="text-gray-300 text-base leading-relaxed">
                Sua marca ajuda o espectador/leads a reconhecer sua página. Quando o está sua página está percorrendo por milhares de pessoas, ele deve ser capaz de dizer que o conteúdo é seu apenas pela marca.
              </p>
              <p class="text-gray-300 text-base leading-relaxed">
                Agora vamos conhecer detalhadamente os elementos que compõem uma boa marca:
              </p>
              <ul class="space-y-2 text-gray-400 text-sm font-medium list-disc pl-5">
                <li>Esquema de cores</li>
                <li>Seleção de fonte</li>
                <li>Estilo de vídeo</li>
                <li>Estilo de conteúdo</li>
              </ul>
              <p class="text-gray-400 text-sm italic">
                Você tem que cumprir todos esses requisitos para que sua Marca se destaque em seu perfil no Instagram.
              </p>
              <p class="text-gray-300 text-base leading-relaxed">
                Agora, vamos tratar cada um destes pontos no detalhe.
              </p>
            </div>

            <!-- 1. Esquema de cores -->
            <div class="space-y-6 border-t border-white/5 pt-8">
              <h2 class="text-3xl font-bold italic text-white tracking-tighter">1. Esquema de cores</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                Seu esquema de cores desempenha o papel mais importante em sua marca. Seja se você pretende aparecer ou não.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Faça uma busca por criadores famosos que você gosta e através de seus feeds. Você irá perceber que, ao menos a maioria, costuma seguir uma certa estética nas cores de seus vídeos.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed italic border-l-2 border-white/20 pl-4">
                Sejam tons mais quentes, frios, escuros, claros ou neutros. O ponto é que você precisa aos poucos criar uma identidade visual, mesmo que mude-a no futuro.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Seu público pode reconhecer imediatamente sua página e seu conteúdo se você acertar nesta parte. Deixe-me explicar como eu uso isso por exemplo. Eu uso preto e branco em tudo. É brutal, direto, minimalista. Reflete minha linguagem, meu tom e minha entrega.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Quando a estética conversa com a mensagem, você vira referência — não mais um perfil genérico gritando no vazio.
              </p>
              <p class="text-white font-bold text-lg italic tracking-tighter">
                Acerte nisso, e sua marca vai IMPACTAR antes mesmo de abrir a boca.
              </p>
            </div>

            <!-- 2. Marca do perfil -->
            <div class="space-y-4 border-t border-white/5 pt-8">
              <h2 class="text-3xl font-bold italic text-white tracking-tighter">2. Marca do perfil</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                Seu perfil é sua identidade digital. Lembre-se disso.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Observe que eu uso a cor preta com branco para destaques e foto de perfil. Esse uso consistente de cores faz com que meu perfil pareça elegante e se destaque.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                O perfil parece profissional para qualquer público, por isso clicam no botão seguir. Use a marca para parecer profissional.
              </p>
            </div>

            <!-- 3. Marca de conteúdo -->
            <div class="space-y-4 border-t border-white/5 pt-8">
              <h2 class="text-3xl font-bold italic text-white tracking-tighter">3. Marca de conteúdo</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                Em todos os meus reels que deixo no feed principal, mantenho um esquema de cores consistente.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Destaco minhas palavras-chave em negrito e mantenho o restante mais fino.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Essa combinação de cores é o que funciona para mim e as pessoas reconhecem facilmente meu conteúdo, permitindo-me alcançar milhares de pessoas por semana.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Você pode se inspirar nos seus criadores favoritos e criar o seu próprio estilo e marca pessoal.
              </p>
            </div>

            <!-- 4. Fontes -->
            <div class="space-y-6 border-t border-white/5 pt-8">
              <h2 class="text-3xl font-bold italic text-white tracking-tighter">4. Fontes</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                Escolher e aderir a uma fonte específica torna sua marca ainda melhor e essa fonte é automaticamente associada ao seu estilo de conteúdo ou estilo de vídeo.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed italic border-l-2 border-white/20 pl-4">
                Portanto, eu diria que se você tivesse que escolher uma fonte, use a mesma fonte em todos os reels para manter a consistência da marca.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed">
                Não é uma virada de jogo, mas certamente ajuda.
              </p>
              <div class="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                <p class="text-white font-bold text-sm uppercase italic tracking-widest">Eu uso a Unbounded e Montserrat</p>
                <p class="text-gray-400 text-[11px] font-bold uppercase tracking-widest">Algumas fontes que eu acho interessantes para se usar:</p>
                <ul class="space-y-1 text-gray-400 text-sm">
                  <li>• Unbounded</li>
                  <li>• Montserrat</li>
                  <li>• Revelitica</li>
                  <li>• Inter</li>
                </ul>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'funil',
    title: 'AULA DE FUNIL DE VENDAS + ESTRUTURA',
    description: 'Minha estrutura de vendas + funil de vendas.',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l7', 
        title: 'Minha Estrutura Diária', 
        description: 'Vendas no automático',
        content: `
          <div class="space-y-10">
            <div class="space-y-4">
              <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">MINI AULA EM FORMATO DE VÍDEO ↓</p>
              <p class="text-gray-400 text-[10px] uppercase font-bold tracking-widest">LINK:</p>
              <a href="https://youtu.be/J8IdI2W_-1k" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                [ MINI AULA EM FORMATO DE VÍDEO, CLICK AQUI ]
              </a>
            </div>

            <div class="space-y-4">
              <p class="text-gray-300 text-sm leading-relaxed">
                Aqui você vai ter acesso a minha estrutura pessoal de vendas / meu funil ↓
              </p>
              <p class="text-gray-400 text-[10px] uppercase font-bold tracking-widest">LINK:</p>
              <a href="https://miro.com/app/board/uXjVL91drmc=/" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/5 transition-all">
                [ CLICK AQUI PARA ACESSAR O MATERIAL APRESENTADO NO VIDEO ]
              </a>
            </div>

            <div class="space-y-4 border-t border-white/5 pt-8">
              <p class="text-gray-300 text-sm leading-relaxed">
                Template da minha automação do manychat ↓
              </p>
              <p class="text-gray-400 text-[10px] uppercase font-bold tracking-widest">LINK:</p>
              <a href="https://app.manychat.com/flowPlayerPage?share_hash=2132611_f88c0b95329129c2b583d84f4bffb04e24955ea" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                [ CLICK AQUI PARA ACESSAR O LINK DO TEMPLATE DA MINHA AUTOMAÇÃO PESSOAL DE MANYCHAT ( AUTOMAÇÃO PRONTA). ]
              </a>
            </div>
            
            <div class="pt-6">
              <p class="text-gray-500 text-[10px] italic">
                O segredo de vender todos os dias sem aparecer está na <strong>AUTOMAÇÃO</strong>. Utilize esses modelos como base para sua própria operação.
              </p>
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
        id: 'l9', 
        title: 'Estratégias de Conteúdo', 
        description: 'A luz para o seu crescimento', 
        content: `
          <div class="space-y-10">
            <div class="space-y-4">
              <p class="text-white font-bold text-sm uppercase italic tracking-tighter border-l-4 border-white pl-4">Atenção, futuros criadores: essa parte é CRUCIAL.</p>
              <p class="text-gray-300 text-base leading-relaxed">
                Preste atenção. Começar no Instagram parece um bicho de 7 cabeças não é? É porque você ainda tá no escuro. <strong>Esse módulo é a luz.</strong> Vou te entregar o essencial pra crescer no Instagram com inteligência. Desde técnicas de edição a estratégias de conteúdo que realmente funcionam.
              </p>
            </div>

            <div class="space-y-4">
              <p class="text-gray-300 text-base leading-relaxed">
                Começar no Instagram pode parecer assustador para muitos, mas não precisa ser assim... Neste módulo, vou simplificar os fundamentos do crescimento do Instagram, mapeando as estratégias-chave, desde tempos ideais de postagem até estratégias de conteúdo.
              </p>
              <p class="text-gray-300 text-base leading-relaxed italic border-l-2 border-white/20 pl-4">
                Antes de pensar em tráfego ou escalar qualquer coisa, você precisa de uma base sólida. Por isso, preparei uma ferramenta cirúrgica pra te ajudar a elevar a <strong>QUALIDADE</strong> do seu conteúdo.
              </p>
            </div>

            <div class="space-y-4">
              <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">MINI AULA EM FORMATO DE VÍDEO ↓</p>
              <a href="https://youtu.be/fEM5fnn4O_Y" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                [ CLICK AQUI PARA ACESSAR A AULA ]
              </a>
              <a href="https://www.notion.so/Lista-de-refer-ncias-1563f99da39280488350d1f24c55086e?pvs=21" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/5 transition-all">
                [ LINK DA FERRAMENTA USADA NA AULA, APENAS CLICK AQUI ]
              </a>
            </div>

            <div class="space-y-8 border-t border-white/5 pt-10">
              <h2 class="text-3xl font-bold italic text-white tracking-tighter">Passando para o próximo passo do plano.</h2>
              <p class="text-gray-300 text-base leading-relaxed">
                Vamos discutir o formato. Atualmente, o Instagram favorece vídeos curtos chamados 'reels', que acredito serem essenciais para o crescimento no Instagram. Enquanto alguns nichos usam carrosséis de fotos, considero os reels os mais eficazes para um crescimento mais rápido.
              </p>
              <p class="text-gray-300 text-base leading-relaxed italic border-l-2 border-white/20 pl-4">
                Quanto às stories, não há necessidade de postar 10 stories por dia. Em vez disso, mire em pelo menos uma story por dia e interaja com seus seguidores através de enquetes, perguntas ou brindes. Isso fornece dados valiosos para o algoritmo e aumenta a visibilidade dos seus reels.
              </p>
              <p class="text-gray-300 text-base leading-relaxed">
                Agora, considere seu conteúdo. Que tipo de posts você assiste até o fim e interage? Seja educacional, motivacional, engraçado, relacionável ou entretenimento, foque em criar conteúdo nessas categorias.
              </p>
            </div>

            <div class="space-y-10 border-t border-white/5 pt-10">
              <h2 class="text-3xl font-bold italic text-white tracking-tighter">Finalmente, a estrutura do reel.</h2>
              <p class="text-gray-300 text-sm italic">Seu reel deve ter:</p>
              
              <div class="space-y-12">
                <div class="space-y-4">
                  <h3 class="text-xl font-bold text-white uppercase italic">1. GANCHO</h3>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    O gancho é o elemento mais importante do seu carrossel. Se você errar o início, seu Reels já nasce morto. Ninguém vai pescar atenção com um gancho fraco.
                  </p>
                  <div class="rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl">
                    <img src="https://i.imgur.com/TPbMtoK.jpeg" alt="Gancho Forte" class="w-full h-auto" />
                  </div>
                  <p class="text-[10px] text-gray-500 font-bold uppercase italic mt-2">Gancho Forte: Capture a atenção nos primeiros segundos.</p>
                </div>

                <div class="space-y-4">
                  <h3 class="text-xl font-bold text-white uppercase italic">2. A BASE (VALOR)</h3>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    Certifique-se de fornecer valor genuíno ao seu público, porque ao fazê-lo, você cria a reputação de uma pessoa que é útil ou valiosa para as pessoas.
                  </p>
                  <div class="rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl">
                    <img src="https://i.imgur.com/2KRy2hP.png" alt="A Base / Valor" class="w-full h-auto" />
                  </div>
                  <p class="text-[10px] text-gray-500 font-bold uppercase italic mt-2">A Base: Mantenha os espectadores engajados com informações úteis.</p>
                </div>

                <div class="space-y-4">
                  <h3 class="text-xl font-bold text-white uppercase italic">3. CTA (CHAMADA PARA AÇÃO)</h3>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    CTA (call to action) é the gatilho. Sem ele, seu vídeo é só barulho vazio. É o que move o espectador da curiosidade pra ação. Isso incentiva seus espectadores a ler as legendas.
                  </p>
                  <div class="rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl">
                    <img src="https://i.imgur.com/tSyvOHA.png" alt="CTA" class="w-full h-auto" />
                  </div>
                  <p class="text-[10px] text-gray-500 font-bold uppercase italic mt-2">O Fim e Chamada para Ação (CTA): Termine com comando.</p>
                </div>
              </div>

              <div class="p-8 bg-white text-black rounded-[2rem] text-center font-bold uppercase tracking-tighter mt-10">
                GANCHO + CTA + VALOR = RECEITA VIRAL 🔥
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
        id: 'l10', 
        title: 'Técnicas de Edição Viral', 
        description: 'Domine a edição que vende', 
        content: `
          <div class="space-y-10">
            <div class="space-y-6">
              <p class="text-gray-300 text-base leading-relaxed">
                Assista à mini aula de edição que eu preparei aqui no link abaixo. Se você não estiver dominando isso, está perdendo tempo. Não fique para trás aprenda a editar com o impacto que seu conteúdo precisa para vender.
              </p>
              <div class="p-5 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-white">
                <p class="text-white font-bold text-[10px] uppercase tracking-widest mb-2">OBSERVAÇÃO CRUCIAL:</p>
                <p class="text-gray-400 text-xs italic leading-relaxed">
                  LEMBRE DE VER PRIMEIRO O MÓDULO ANTERIOR <button data-navigate-module="captura" class="text-white underline font-bold">"CAPTURA DE CONTEÚDO"</button> PARA APRENDER USAR A FERRAMENTA PARA MINERAR CONTEÚDO.
                </p>
              </div>
            </div>

            <div class="space-y-6 border-t border-white/5 pt-8">
              <div class="space-y-4">
                <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">LINK DA AULA 1 MEU ESTILO DE CONTEÚDO HOJE ↓</p>
                <a href="https://youtu.be/VjIdKVdiEkE?si=F5WG1y34Pwjrw_sS" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                  [ CLICK AQUI PARA ACESSAR A AULA ]
                </a>
              </div>

              <div class="space-y-4">
                <p class="text-gray-400 text-[10px] uppercase font-bold tracking-widest">REFERÊNCIA COMENTADA NA AULA:</p>
                <button data-navigate-module="captura" class="w-full p-4 bg-white/[0.03] border border-white/10 rounded-xl text-gray-400 font-bold text-center uppercase text-[9px] tracking-widest hover:text-white transition-all">
                  [ LINK DO MÓDULO DA FERRAMENTA COMENTADA NA AULA ]
                </button>
              </div>
            </div>

            <div class="space-y-4 border-t border-white/5 pt-8">
              <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">LINK DA AULA 2 MEU ESTILO DE CONTEÚDO ANTIGO ↓</p>
              <a href="https://youtu.be/JEYVnMuOfe4?feature=shared" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                [ CLICK AQUI PARA ACESSAR A AULA ]
              </a>
            </div>

            <div class="pt-6">
              <p class="text-gray-500 text-[10px] italic">
                A edição não é apenas estética, é retenção. Domine as ferramentas e aplique os ganchos que aprendemos anteriormente.
              </p>
            </div>
          </div>
        ` 
      }
    ]
  },
  {
    id: 'produto-zero',
    title: 'CRIAR UM PRODUTO DO ZERO',
    description: 'Do zero ao lançamento',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l11', 
        title: 'Criando seu Produto Digital', 
        description: 'Transformando ideias em lucro', 
        content: `
          <div class="space-y-12">
            <div class="space-y-6">
              <h2 class="text-3xl font-bold italic text-white tracking-tighter uppercase">Ideação de Produto</h2>
              <p class="text-gray-300 text-base leading-relaxed">
                Nesta aula, vamos explorar como identificar oportunidades de mercado e criar um produto que resolva dores reais da sua audiência. O segredo não é apenas o que você vende, mas como você o apresenta.
              </p>
              <div class="space-y-4">
                <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">MINI AULA DE COMO CRIAR UM PRODUTO DO ZERO IDEIA 💡 ↓</p>
                <a href="https://youtu.be/Ta2jp85eNfA?si=u44n1sujU1R9k6UT" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                  [ CLICK AQUI PARA ACESSAR A AULA ]
                </a>
              </div>
              <div class="space-y-2">
                <p class="text-gray-400 text-[10px] uppercase font-bold tracking-widest">TEMPLATE DO NOTION:</p>
                <a href="https://www.notion.so/Meu-Guia-Gratuito-11d3f99da39280eb92aad12479d20aaa?pvs=21" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/[0.03] border border-white/10 rounded-xl text-gray-400 font-bold text-center uppercase text-[9px] tracking-widest hover:text-white transition-all">
                  [ LINK DO TEMPLATE DA AULA ACIMA CLICK AQUI ]
                </a>
              </div>
            </div>

            <div class="space-y-6 border-t border-white/5 pt-10">
              <h2 class="text-3xl font-bold italic text-white tracking-tighter uppercase">Execução e Revenda</h2>
              <p class="text-gray-300 text-base leading-relaxed">
                Aprenda o processo técnico para hospedar seu produto e configurar o funil de revenda. Vou te mostrar como duplicar modelos de sucesso para acelerar seu faturamento.
              </p>
              <div class="space-y-4">
                <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">AULA DE COMO CRIAR UM PRODUTO DO ZERO E SUBIR PARA REVENDA ↓</p>
                <a href="https://youtube.com/shorts/olE55yJn_E4?si=OCx5ZVVvznGIZszG" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                  [ CLICK AQUI PARA ACESSAR A AULA ]
                </a>
              </div>
              <div class="space-y-2">
                <p class="text-gray-400 text-[10px] uppercase font-bold tracking-widest">MATERIAL PARA REVENDA:</p>
                <a href="https://www.notion.so/Pack-de-V-deo-21f3f99da3928021b741dd45b7b6047c?pvs=21" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white/[0.03] border border-white/10 rounded-xl text-gray-400 font-bold text-center uppercase text-[9px] tracking-widest hover:text-white transition-all">
                  [ LINK DO PRODUTO PARA DUPLICAR E PEGAR O LINK PARA REVENDER ]
                </a>
              </div>
            </div>

            <div class="pt-6 text-center">
              <p class="text-gray-500 text-[10px] italic">
                O poder da consistência aliado a um produto bem estruturado é a chave para a liberdade geográfica e financeira no digital.
              </p>
            </div>
          </div>
        ` 
      }
    ]
  },
  {
    id: 'metodo',
    title: 'MÉTODO',
    description: 'A estratégia que gera faturamento real',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l12', 
        title: 'Meu Método Exclusivo', 
        description: 'Acesso ao guia completo', 
        content: `
          <div class="space-y-12">
            <div class="space-y-6">
              <p class="text-gray-300 text-base leading-relaxed">
                Aqui, você vai acessar a estratégia que realmente gera faturamento na internet. Não é teoria, é o que me faz vender de verdade. Se você está pronto para resultados, clica no link e veja como eu faço.
              </p>
              
              <div class="space-y-6">
                <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">LINK:</p>
                <a href="https://heyzine.com/flip-book/41fc3076e1.html" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                  [ APENAS CLICK AQUI PARA RECEBER O ACESSO DO MEU MÉTODO. ]
                </a>
              </div>

              <div class="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 shadow-inner">
                <div class="mt-1">
                  <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                </div>
                <p class="text-gray-300 text-xs font-bold uppercase leading-relaxed italic tracking-tighter">
                  IMPORTANTE: Se você adquiriu os direitos de revenda, poderá ter acesso ao modelo editável no próximo capítulo deste módulo.
                </p>
              </div>
            </div>

            <div class="space-y-8 border-t border-white/5 pt-10">
              <h2 class="text-3xl font-bold italic text-white tracking-tighter uppercase">PRÓXIMO CAPÍTULO 👇</h2>
              <p class="text-gray-300 text-base leading-relaxed">
                Clique em <strong>"Próximo Capítulo"</strong> abaixo para receber o <u>modelo editável do meu método</u> e começar hoje mesmo a criar seu próprio produto com <strong>100% de comissão</strong>.
              </p>
              
              <a href="https://www.notion.so/PR-XIMO-CAP-TULO-1d33f99da39280fc8864ce4147b7dec4?source=copy_link" target="_blank" rel="noopener noreferrer" class="block w-full">
                <div class="p-6 bg-white/5 border border-white/10 rounded-[1.5rem] flex items-center justify-center gap-4 text-white font-bold tracking-widest uppercase hover:bg-white/10 transition-all active:scale-[0.98]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>
                  [ PRÓXIMO CAPÍTULO ]
                </div>
              </a>
            </div>

            <div class="pt-6 text-center">
              <p class="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em]">Exclusividade Dark Stage™</p>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'guia-gratuito',
    title: 'GUIA GRATUITO 📖',
    description: 'Como criar um guia grátis',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l13', 
        title: 'Lead Magnets Estratégicos', 
        description: 'Capture atenção e gere desejo', 
        content: `
          <div class="space-y-12">
            <div class="space-y-6">
              <p class="text-white font-bold text-lg italic tracking-tighter uppercase">Você realmente acha que precisa de 10 mil seguidores pra vender?</p>
              <div class="space-y-4">
                <p class="text-gray-300 text-base leading-relaxed">
                  <strong>A verdade?</strong> Você não tem um problema de alcance. Você tem um problema de falta de posicionamento e estrutura.
                </p>
                <p class="text-gray-300 text-base leading-relaxed italic border-l-2 border-white/20 pl-4">
                  E este módulo resolve exatamente isso:
                </p>
                <p class="text-gray-300 text-base leading-relaxed">
                  Aqui, eu vou te mostrar o <strong>Lead Magnet</strong> que uso dentro da Kirvano e por que ele funciona como uma armadilha estratégica pra capturar atenção, gerar desejo e converter curiosos em compradores <strong>mesmo em perfis pequenos</strong>.
                </p>
              </div>
            </div>

            <div class="space-y-6 border-t border-white/5 pt-10">
              <h2 class="text-3xl font-bold italic text-white tracking-tighter uppercase">Mas afinal como criar um guia grátis mentor?</h2>
              <p class="text-gray-300 text-base leading-relaxed">
                Vá em no módulo chamado <button data-navigate-module="metodo" class="text-white underline font-bold">"MÉTODO"</button> acesse o livro e vá até a página do capítulo 5. Lá, eu ensino como de fato montar um guia gratuito.
              </p>
              
              <div class="space-y-6 pt-6">
                 <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">MINI AULA DE COMO MONTAR UM GUIA GRATUITO 📖 ↓</p>
                 <a href="https://youtu.be/T8QXCbdXUM4" target="_blank" rel="noopener noreferrer" class="block p-8 bg-white/5 border border-white/10 rounded-[2rem] text-white font-bold text-center uppercase text-sm tracking-[0.2em] hover:bg-white/10 transition-all shadow-2xl group active:scale-[0.98]">
                    <div class="flex items-center justify-center gap-4">
                      <svg class="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                      [ ASSISTIR AULA AGORA ]
                    </div>
                 </a>
              </div>

              <div class="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 shadow-inner">
                <div class="mt-1">
                  <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                </div>
                <p class="text-gray-400 text-[10px] font-bold uppercase leading-relaxed italic tracking-tighter">
                  OBS: Se clicar no nome <button data-navigate-module="metodo" class="text-white underline">Método</button> acima, você será direcionado para o módulo de forma automática.
                </p>
              </div>
            </div>

            <div class="pt-6 text-center">
              <p class="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em]">Estratégia de Captura Dark Stage™</p>
            </div>
          </div>
        ` 
      }
    ]
  },
  {
    id: 'templates',
    title: 'TEMPLETES GUIAS',
    description: 'Recursos para Lead Magnets e Referências',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l14', 
        title: 'Templates e Aulas de Edição', 
        description: 'Domine a personalização dos seus ativos', 
        content: `
          <div class="space-y-12">
            <div class="space-y-6">
              <p class="text-gray-300 text-base leading-relaxed">
                Aqui está um template pronto do Notion para você vender ou utilizar como Lead Magnet/Produto Grátis assim como eu. Essa estratégia de Produto Grátis + Upsell Pago foi o diferencial que me fez vender <strong>MUITO</strong> mesmo com pouca audiência. Espero que aproveite!
              </p>
              
              <div class="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                <h3 class="text-white font-bold text-xs uppercase tracking-widest italic">Instruções de Uso:</h3>
                <ol class="space-y-3 text-gray-400 text-[11px] font-bold uppercase tracking-tight list-decimal pl-5">
                  <li>Abra o link do template.</li>
                  <li>Acima no canto superior direito, clique em "duplicar" para criar uma versão para você.</li>
                  <li>Agora basta editar e adaptar ao seu tipo de conteúdo/nicho.</li>
                  <li>Após finalizar o seu guia gratuito, clique acima em "COMPARTILHAR".</li>
                  <li>Depois selecione a opção "PUBLICAR" e "PUBLICAR SITE".</li>
                  <li>Dessa forma, você terá acesso ao link do seu template no formato de site para entregar aos seus clientes.</li>
                </ol>
              </div>
            </div>

            <div class="space-y-8 border-t border-white/5 pt-10">
              <div class="space-y-6">
                <div>
                  <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-3 italic">Template guia (caso quiser criar um específico para você de acordo a sua identidade):</p>
                  <p class="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">LINK:</p>
                  <a href="https://www.notion.so/Template-de-Guia-1d33f99da39280409c25fb08640ca779?pvs=21" target="_blank" rel="noopener noreferrer" class="block p-5 bg-white/[0.03] border border-white/10 rounded-xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/5 transition-all">
                    [ CLICK AQUI PARA TER ACESSO AO TEMPLATE ]
                  </a>
                </div>

                <div>
                  <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-3 italic">Template editável da lista de referência:</p>
                  <p class="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">LINK:</p>
                  <a href="https://www.notion.so/Template-da-Lista-de-refer-ncia-1573f99da39280a5a4c3c9bb6642256d?pvs=21" target="_blank" rel="noopener noreferrer" class="block p-5 bg-white/[0.03] border border-white/10 rounded-xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/5 transition-all">
                    [ CLICK AQUI PARA TER ACESSO AO TEMPLATE ]
                  </a>
                </div>
              </div>
            </div>

            <div class="space-y-6 border-t border-white/5 pt-10">
              <p class="text-white font-bold text-[10px] uppercase tracking-[0.2em] italic">AULAS DE EDIÇÃO DOS TEMPLATES ↓</p>
              
              <a href="https://youtu.be/TV6PPvPb31I?si=dwa-k1_Mya-4Pf7j" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                [ MINI AULA DE COMO EDITAR O TEMPLATE GUIA PARA CRIAR UM CURSO, GUIA GRATUITO OU OQ VOCE QUISER, CLICK AQUI ]
              </a>

              <a href="https://youtu.be/xzea0oQiyk4?feature=shared" target="_blank" rel="noopener noreferrer" class="block p-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-center uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                [ MINI AULA DE COMO EDITAR E ADICIONAR MAIS REFERÊNCIAS NA LISTA DE MINERAÇÃO DE CONTEÚDO ]
              </a>
            </div>

            <div class="pt-6 text-center">
              <p class="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em]">Ativos Digitais Dark Stage™</p>
            </div>
          </div>
        ` 
      }
    ]
  },
  {
    id: 'consistencia',
    title: 'Consistência',
    description: 'O segredo dos grandes perfis',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l15', 
        title: 'O Poder da Consistência', 
        description: 'Mentalidade de longo prazo', 
        content: `
          <div class="space-y-10">
            <div class="space-y-6">
              <p class="text-gray-300 text-base leading-relaxed">
                O sucesso no Instagram, assim como qualquer habilidade ou empreendimento, depende da <strong>consistência</strong>. Diversos experimentos realizados por outros confirmaram que o Instagram favorece aqueles que mantêm uma presença constante, e isso é verdade.
              </p>
              <p class="text-gray-300 text-base leading-relaxed italic border-l-2 border-white/20 pl-4">
                Ao compartilhar conteúdo regularmente, você fornece ao Instagram mais dados para entender seu público, permitindo que a plataforma o promova para um público mais amplo.
              </p>
            </div>

            <div class="space-y-6 border-t border-white/5 pt-8">
              <h2 class="text-2xl font-bold italic text-white tracking-tighter uppercase">Nicho e Identidade</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                A consistência vai além do seu cronograma de postagens; ela se extende ao tipo de conteúdo que você compartilha. Como mencionado anteriormente, manter-se em um nicho é crucial. Postar conteúdo de dez nichos diferentes confunde o Instagram, dificultando a identificação do seu público-alvo.
              </p>
            </div>

            <div class="space-y-6 border-t border-white/5 pt-8">
              <h2 class="text-2xl font-bold italic text-white tracking-tighter uppercase">Seja Realista</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                Agora, sejamos realistas — alcançar 100k seguidores em alguns meses é uma ocorrência rara, a menos que você seja uma celebridade criando uma nova conta no Instagram. Para a maioria das pessoas, tais resultados não acontecem, a menos que tenham muita sorte.
              </p>
              <div class="p-6 bg-white/5 border border-white/10 rounded-2xl border-l-4 border-l-white">
                <p class="text-white font-bold text-[10px] uppercase tracking-widest mb-2 italic">A Fase da Estagnação:</p>
                <p class="text-gray-400 text-xs italic leading-relaxed">
                  Muitas pessoas experimentam momentos de estagnação. Quando você encontrar essas fases de baixo alcance e zero seguidores novos, que podem durar algumas semanas, é <strong>CRUCIAL</strong> adotar uma mentalidade de perseverança.
                </p>
              </div>
            </div>

            <div class="space-y-6 border-t border-white/5 pt-8">
              <h2 class="text-2xl font-bold italic text-white tracking-tighter uppercase">Um Exemplo Real</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                Eu vi pelo menos 10 pessoas que inicialmente produziram um excelente conteúdo. Seus seguidores cresceram para 1k seguidores em poucos dias, para logo depois passarem por um período ruim de um mês sem novos seguidores.
              </p>
              <p class="text-gray-300 text-sm leading-relaxed font-bold italic text-white">
                A maioria deles desistiu, mas uma pessoa persistiu e agora tem 49k seguidores, com crescimento contínuo e rápido. Isso exemplifica a beleza da consistência.
              </p>
            </div>

            <div class="pt-6 text-center">
               <p class="text-gray-600 text-[9px] font-bold uppercase tracking-[0.2em]">Mindset Dark Stage™</p>
            </div>
          </div>
        ` 
      }
    ]
  },
  {
    id: 'ferramentas',
    title: 'Ferramentas Essenciais',
    description: 'Aumente sua produtividade',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l16', 
        title: 'Arsenal de Ferramentas', 
        description: 'Tudo o que eu utilizo diariamente', 
        content: `
          <div class="space-y-12">
            <div class="space-y-6">
              <p class="text-gray-300 text-base leading-relaxed">
                Aqui estão as ferramentas que eu utilizo e recomendo que você use para que aumente a sua produtividade no jogo digital:
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Canva -->
              <div class="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all">
                <h3 class="text-white font-bold text-sm uppercase italic mb-2 tracking-tighter">1. Canva</h3>
                <p class="text-gray-400 text-xs leading-relaxed">Criar capas para reels, carrosséis atrativos e designs para meus produtos digitais.</p>
              </div>

              <!-- Kirvano -->
              <div class="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all">
                <h3 class="text-white font-bold text-sm uppercase italic mb-2 tracking-tighter">2. Kirvano</h3>
                <p class="text-gray-400 text-xs leading-relaxed">Plataforma que uso para hospedar meus produtos gratuitos e coletar emails.</p>
              </div>

              <!-- CapCut -->
              <div class="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all">
                <h3 class="text-white font-bold text-sm uppercase italic mb-2 tracking-tighter">3. CapCut</h3>
                <p class="text-gray-400 text-xs leading-relaxed">Aplicativo que uso para editar meus vídeos e criar conteúdo viral com facilidade.</p>
              </div>

              <!-- ManyChat -->
              <div class="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all">
                <h3 class="text-white font-bold text-sm uppercase italic mb-2 tracking-tighter">4. ManyChat</h3>
                <p class="text-gray-400 text-xs leading-relaxed">Um dos melhores bots para automatizar o seu perfil, responder comentários e enviar links.</p>
              </div>

              <!-- ChatGPT -->
              <div class="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all">
                <h3 class="text-white font-bold text-sm uppercase italic mb-2 tracking-tighter">5. ChatGPT</h3>
                <p class="text-gray-400 text-xs leading-relaxed">IA pra ajudar você a escrever seu conteúdo, tirar ideias de ganchos, legendas e muito mais! (use muito)</p>
              </div>

              <!-- Notion -->
              <div class="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all">
                <h3 class="text-white font-bold text-sm uppercase italic mb-2 tracking-tighter">6. Notion</h3>
                <p class="text-gray-400 text-xs leading-relaxed">A ferramenta que você está usando agora. É uma das melhores para organizar anotações e calendários.</p>
              </div>
            </div>

            <div class="pt-8 border-t border-white/5 text-center">
              <p class="text-gray-500 text-[10px] italic">
                Domine estas ferramentas e você terá 80% do trabalho operacional automatizado ou facilitado.
              </p>
            </div>
          </div>
        ` 
      }
    ]
  }
];
