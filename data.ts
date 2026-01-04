
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
            <button data-navigate-module="perfil-zero" class="w-full my-8 p-6 bg-white/5 border border-white/10 rounded-xl text-center font-bold tracking-[0.2em] uppercase text-white hover:bg-white/10 hover:border-white/30 transition-all active:scale-[0.98] shadow-lg">
              [ Criando um perfil do zero ]
            </button>
            <div class="pt-8">
              <p class="font-bold text-lg text-white mb-4">Depois do seu perfil estruturado ele deve ficar assim</p>
              <div class="max-w-[320px] mx-auto bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img src="https://i.imgur.com/aWRzXH2.jpeg" alt="Perfil Estruturado" class="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: 'perfil-zero',
    title: 'CRIANDO UM PERFIL DO ZERO',
    description: 'Aulas práticas de criação',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l3', 
        title: 'Criando um perfil do zero', 
        description: 'Passo a passo inicial',
        content: `<div class="space-y-6"><p class="text-gray-300">Estrutura completa e aquecimento de perfil.</p><a href="https://youtu.be/HvVyu71E7tc" target="_blank" class="block p-4 bg-white/5 rounded-xl border border-white/10 text-white font-bold">[ ASSISTIR AULA DE AQUECIMENTO ]</a></div>`
      }
    ]
  },
  {
    id: 'nicho',
    title: 'ENCONTRANDO SEU NICHO',
    description: 'Como escolher o tema ideal',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l4', 
        title: 'Estratégia de Nicho', 
        description: 'Definição de mercado',
        content: `<div class="space-y-4"><p class="text-gray-300">Escolha um nicho com demanda e mantenha a consistência.</p></div>`
      }
    ]
  },
  {
    id: 'estruturando',
    title: 'ESTRUTURANDO O PERFIL',
    description: 'Bio, Foto e Nome',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l5', 
        title: 'Bio e Visual', 
        description: 'Primeira impressão',
        content: `<div class="space-y-4"><p class="text-gray-300">Sua bio é o seu cartão de visitas.</p></div>`
      }
    ]
  },
  {
    id: 'identidade',
    title: 'SUA IDENTIDADE',
    description: 'Branding e Cores',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l6', 
        title: 'Cores e Fontes', 
        description: 'Reconhecimento de marca',
        content: `<div class="space-y-4"><p class="text-gray-300">Crie um padrão visual para ser lembrado.</p></div>`
      }
    ]
  },
  {
    id: 'funil',
    title: 'FUNIL DE VENDAS',
    description: 'Estratégia de faturamento',
    icon: 'PaperAirplane',
    lessons: [
      { 
        id: 'l7', 
        title: 'Minha Estrutura', 
        description: 'Como eu vendo todos os dias',
        content: `<div class="space-y-4"><p class="text-gray-300">O funil é o caminho do seu cliente até a compra.</p></div>`
      }
    ]
  },
  {
    id: 'captura',
    title: 'CAPTURA DE CONTEÚDO',
    description: 'Minerando vídeos virais',
    icon: 'PaperAirplane',
    lessons: [
      { id: 'l8', title: 'Mineração Prática', description: 'Onde encontrar vídeos', content: `<p class="text-gray-300">Aprenda a encontrar o que já está funcionando.</p>` }
    ]
  },
  {
    id: 'edicao',
    title: 'MINI AULA DE EDIÇÃO',
    description: 'CapCut e Estilos',
    icon: 'PaperAirplane',
    lessons: [
      { id: 'l9', title: 'Edição de Alto Impacto', description: 'Tutorial prático', content: `<p class="text-gray-300">Domine as ferramentas de edição para reter o público.</p>` }
    ]
  },
  {
    id: 'produto-zero',
    title: 'CRIAR PRODUTO DO ZERO',
    description: 'Infoproduto e Revenda',
    icon: 'PaperAirplane',
    lessons: [
      { id: 'l10', title: 'Ideia e Execução', description: 'Criando sua oferta', content: `<p class="text-gray-300">Transforme conhecimento em produto digital.</p>` }
    ]
  },
  {
    id: 'metodo',
    title: 'MÉTODO DARK',
    description: 'Estratégia Completa',
    icon: 'PaperAirplane',
    lessons: [
      { id: 'l11', title: 'Acesso ao Método', description: 'Passo a passo final', content: `<p class="text-gray-300">O guia definitivo para escalar seus perfis.</p>` }
    ]
  },
  {
    id: 'guia-gratuito',
    title: 'GUIA GRATUITO',
    description: 'Lead Magnet',
    icon: 'PaperAirplane',
    lessons: [
      { id: 'l12', title: 'Montando seu Guia', description: 'Isca digital', content: `<p class="text-gray-300">Como atrair clientes sem gastar um centavo.</p>` }
    ]
  },
  {
    id: 'templates',
    title: 'TEMPLATES GUIAS',
    description: 'Modelos Editáveis',
    icon: 'PaperAirplane',
    lessons: [
      { id: 'l13', title: 'Edição de Templates', description: 'Personalizando seus materiais', content: `<p class="text-gray-300">Modelos prontos para você adaptar ao seu nicho.</p>` }
    ]
  },
  {
    id: 'consistencia',
    title: 'CONSISTÊNCIA',
    description: 'O segredo do algoritmo',
    icon: 'PaperAirplane',
    lessons: [
      { id: 'l14', title: 'Disciplina Diária', description: 'Mantendo o ritmo', content: `<p class="text-gray-300">O algoritmo recompensa quem não para.</p>` }
    ]
  },
  {
    id: 'ferramentas',
    title: 'FERRAMENTAS',
    description: 'Softwares e IAs',
    icon: 'PaperAirplane',
    lessons: [
      { id: 'l15', title: 'Kit do Criador', description: 'O que eu uso', content: `<p class="text-gray-300">As ferramentas essenciais para sua operação.</p>` }
    ]
  }
];
