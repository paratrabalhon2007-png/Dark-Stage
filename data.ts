
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
                <div class="p-8 bg-white/5 border border-white/10 rounded-[2rem] text-center font-black tracking-[0.3em] uppercase text-white shadow-2xl hover:bg-white/10 hover:border-white/30 transition-all group active:scale-[0.98]">
                  <div class="flex items-center justify-center gap-4">
                    <svg class="w-7 h-7 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    [ AULA DE BOAS VINDAS ]
                  </div>
                </div>
              </a>
            </div>
            <div class="space-y-4">
              <p class="font-black text-white uppercase text-[10px] tracking-[0.3em]">Recurso Estratégico:</p>
              <a href="https://miro.com/app/board/uXjVLSWuwQM=/" target="_blank" rel="noopener noreferrer" class="group block p-6 bg-white/[0.03] border border-white/10 rounded-[1.5rem] text-white hover:bg-white/5 transition-all">
                <span class="font-black text-white text-sm block uppercase tracking-tighter">[ CLIQUE AQUI PARA VISUALIZAR NOSSA ESTRUTURA BASE NO MIRO ]</span>
                <p class="text-[9px] text-gray-600 mt-2 uppercase font-bold tracking-[0.2em]">Mapa mental detalhado da operação Dark Stage</p>
              </a>
            </div>
            <div class="py-4">
              <button data-navigate-module="perfil-zero" class="w-full p-8 bg-white/5 border border-white/10 rounded-[2rem] text-center font-black tracking-[0.2em] uppercase text-white hover:bg-white/10 hover:border-white/40 transition-all shadow-inner">
                [ PRÓXIMO: CRIANDO UM PERFIL DO ZERO ]
              </button>
            </div>
            <div class="pt-8 border-t border-white/5">
              <p class="font-black text-xl text-white mb-6 uppercase italic tracking-tighter">Referência de Estrutura</p>
              <div class="max-w-[340px] mx-auto bg-[#0f0f0f] rounded-[2.5rem] border border-white/10 overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)]">
                <img src="https://i.imgur.com/aWRzXH2.jpeg" alt="Perfil Estruturado" class="w-full h-auto object-cover" />
              </div>
              <p class="text-center text-[9px] text-gray-600 mt-6 uppercase font-black italic tracking-widest">Exemplo de perfil otimizado para conversão</p>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'perfil-zero',
    title: 'CRIANDO PERFIL DO ZERO',
    description: 'Passo a passo da criação',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l3', 
        title: 'Aquecimento e Configuração', 
        description: 'Tudo sobre aquecimento de conta',
        content: `
          <div class="space-y-8">
            <p class="text-gray-300 text-base leading-relaxed">Nesta aula técnica, você aprenderá o protocolo exato de <strong>aquecimento</strong>. Isso é o que separa perfis que batem milhões de visualizações dos que ficam travados no zero.</p>
            <a href="https://youtu.be/HvVyu71E7tc" target="_blank" class="block p-8 bg-white/5 rounded-[2rem] border border-white/10 text-white font-black text-center uppercase tracking-[0.3em] hover:bg-white/10 transition-all shadow-2xl">
              [ ACESSAR AULA DE AQUECIMENTO ]
            </a>
            <div class="bg-white/[0.02] border border-white/5 p-6 rounded-[1.5rem]">
              <p class="text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-white"></span> Checklist de Configuração:
              </p>
              <ul class="text-gray-500 text-xs mt-4 space-y-2 uppercase font-bold italic tracking-tighter">
                <li>• Nome de usuário sem caracteres especiais</li>
                <li>• Bio limpa e direta</li>
                <li>• Conversão para conta de criador</li>
                <li>• Interação mínima de 24h antes do primeiro post</li>
              </ul>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'nicho',
    title: 'ENCONTRANDO SEU NICHO',
    description: 'Escolha o tema certo',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l4', 
        title: 'Estratégia de Nicho', 
        description: 'Mercados lucrativos',
        content: `
          <div class="space-y-6">
            <p class="text-gray-300 text-base">A escolha do seu nicho dita o quanto você vai faturar. Não escolha por gosto, escolha por <strong>demanda</strong>.</p>
            <div class="grid grid-cols-1 gap-4">
              <div class="p-6 bg-white/5 border border-white/5 rounded-2xl">
                <p class="text-white font-black uppercase text-xs italic">O que vamos analisar:</p>
                <p class="text-gray-500 text-xs mt-2 uppercase font-bold tracking-tighter leading-loose">
                  Volume de buscas + Concorrência + Facilidade de edição + Potencial de monetização direta.
                </p>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'estruturando',
    title: 'ESTRUTURANDO O PERFIL',
    description: 'Design e Autoridade',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l5', 
        title: 'Bio e Visual de Impacto', 
        description: 'Design que converte',
        content: `
          <div class="space-y-6">
            <p class="text-gray-300 text-base">Seu perfil é sua vitrine. Se estiver bagunçado, ninguém compra. Aprenda a usar a psicologia das cores e fontes no Dark.</p>
            <p class="text-gray-500 text-xs uppercase font-black italic tracking-widest border-l-2 border-white pl-4">"A simplicidade é o último grau da sofisticação."</p>
          </div>
        `
      }
    ]
  },
  {
    id: 'funil',
    title: 'FUNIL DE VENDAS',
    description: 'Máquina de Faturamento',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l7', 
        title: 'Minha Estrutura Diária', 
        description: 'Vendas no automático',
        content: `
          <div class="space-y-8">
            <p class="text-gray-300 text-base">O segredo de vender todos os dias sem aparecer está na <strong>AUTOMAÇÃO</strong>. Aqui te mostro como conecto as ferramentas para faturar dormindo.</p>
            <div class="p-8 bg-white/5 border border-white/5 rounded-[2rem] text-center">
              <p class="text-white font-black text-xl uppercase italic tracking-tighter">Em breve: Aulas de escala avançada</p>
            </div>
          </div>
        `
      }
    ]
  }
];
