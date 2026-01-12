
import React, { useState, useEffect } from 'react';
import { ICONS, SOCIAL_LINKS } from './constants';
import { MODULES } from './data';
import { Module, Student } from './types';

// WHITELIST DE ACESSO - CONTROLE TOTAL VIA CÓDIGO
// IMPORTANTE: Para remover um aluno definitivamente de todos os acessos, 
// você deve apagar a linha dele aqui no código.
const INITIAL_WHITELIST: Student[] = [
  { 
    id: 'admin-1', 
    name: 'Admin Superior', 
    email: 'admin@darkstage.com', 
    password: 'admin123', 
    dateAdded: 'Sempre' 
  },
  { 
    id: 'student-1', 
    name: 'Membro VIP', 
    email: 'romabeh05@gmail.com', 
    password: 'darkaccess2026', 
    dateAdded: '04/01/2026' 
  },
  { 
    id: 'student-2', 
    name: 'Daniel Viana', 
    email: 'danielvianadasilva2@gmail.com', 
    password: 'Dvs1964@', 
    dateAdded: '13/05/2024' 
  },
  { 
    id: 'student-3', 
    name: 'Jhon', 
    email: 'businessjovem40@gmail.com', 
    password: 'Jhon123@', 
    dateAdded: '13/05/2024' 
  },
  { 
    id: 'student-4', 
    name: 'Kaua Lucas', 
    email: 'kaualucasrodrigues440@gmail.com', 
    password: 'joaovictorgostoso999', 
    dateAdded: '13/05/2024' 
  }
];

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [readLessons, setReadLessons] = useState<string[]>([]);
  // Estado para gerenciar alunos dinamicamente na sessão atual
  const [students, setStudents] = useState<Student[]>(INITIAL_WHITELIST);

  useEffect(() => {
    const init = () => {
      const session = localStorage.getItem('dark_stage_session');
      if (session && INITIAL_WHITELIST.some(s => s.email === session)) {
        setIsLoggedIn(true);
        setCurrentUser(session);
      }
      const savedRead = localStorage.getItem('dark_stage_read_lessons');
      if (savedRead) setReadLessons(JSON.parse(savedRead));
      setIsLoading(false);
    };
    init();
  }, []);

  // Handler para navegação interna via botões no HTML das aulas
  useEffect(() => {
    const handleContentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const navigateId = target.getAttribute('data-navigate-module');
      if (navigateId) {
        const found = MODULES.find(m => m.id === navigateId);
        if (found) {
          setSelectedModule(found);
          window.scrollTo(0, 0);
        }
      }
    };
    document.addEventListener('click', handleContentClick);
    return () => document.removeEventListener('click', handleContentClick);
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string).toLowerCase().trim();
    const password = formData.get('password') as string;
    const user = INITIAL_WHITELIST.find(s => s.email === email && s.password === password);

    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(email);
      localStorage.setItem('dark_stage_session', email);
    } else {
      alert("Chave de acesso não autorizada.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setIsAdminMode(false);
    localStorage.removeItem('dark_stage_session');
  };

  const toggleRead = (lessonId: string) => {
    setReadLessons(prev => {
      const newState = prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId];
      localStorage.setItem('dark_stage_read_lessons', JSON.stringify(newState));
      return newState;
    });
  };

  const handleRemoveStudent = (id: string, name: string) => {
    if (id === 'admin-1') {
      alert("O Administrador Superior não pode ser removido.");
      return;
    }
    if (confirm(`Deseja realmente remover o acesso de ${name}? (Lembre-se: para remover permanentemente, você deve editar o código App.tsx)`)) {
      setStudents(prev => prev.filter(s => s.id !== id));
    }
  };

  if (isLoading) return <div className="min-h-screen bg-[#0a0a0a]" />;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0a]">
        <div className="w-full max-w-md animate-fadeIn">
          <div className="text-center mb-10">
            <div className="w-28 h-28 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl overflow-hidden">
              <img src="https://i.imgur.com/aQjlYHU.jpeg" className="w-24 h-24 object-contain" alt="Logo" />
            </div>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter text-white">Dark Stage™</h1>
            <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-[0.2em] mt-2">Área de Membros</p>
          </div>
          <div className="bg-[#141414] p-8 rounded-[2rem] border border-white/5 shadow-xl">
            <form onSubmit={handleLogin} className="space-y-6">
              <input name="email" type="email" required placeholder="E-mail" className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white outline-none focus:border-white transition-all" />
              <div className="relative">
                <input name="password" type={showLoginPassword ? "text" : "password"} required placeholder="Senha" className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white outline-none focus:border-white transition-all" />
                <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 p-2">
                  {showLoginPassword ? <ICONS.EyeOff className="w-5 h-5" /> : <ICONS.Eye className="w-5 h-5" />}
                </button>
              </div>
              <button type="submit" className="w-full bg-white text-black font-bold py-5 rounded-2xl uppercase tracking-widest text-xs hover:bg-gray-200 transition-all">Acessar Treinamento</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const renderAdmin = () => (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-fadeIn">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black uppercase italic text-white tracking-tighter">Gestão de Alunos</h1>
        <p className="text-[10px] text-gray-500 uppercase mt-2 font-semibold tracking-widest">Status: <span className="text-white">Sistema Local Ativo</span></p>
      </div>
      
      <div className="bg-[#141414] rounded-[1.5rem] border border-white/5 overflow-hidden shadow-2xl">
        <div className="p-6 bg-white/5 border-b border-white/5 flex justify-between items-center">
          <p className="text-[10px] font-bold uppercase text-gray-400">Lista de Acessos Autorizados</p>
          <p className="text-[10px] font-bold uppercase text-white">{students.length} Membros</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#0f0f0f] text-[9px] font-bold uppercase text-gray-600">
              <tr>
                <th className="px-8 py-4">Nome</th>
                <th className="px-8 py-4">E-mail</th>
                <th className="px-8 py-4">Senha</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {students.map(s => (
                <tr key={s.id} className="hover:bg-white/[0.01] transition-colors">
                  <td className="px-8 py-6">
                    <span className="text-sm font-semibold text-white uppercase italic">{s.name}</span>
                    {s.email === 'admin@darkstage.com' && <span className="ml-2 text-[7px] bg-white text-black px-1.5 py-0.5 rounded font-bold uppercase">Superior</span>}
                  </td>
                  <td className="px-8 py-6 text-sm text-gray-500">{s.email}</td>
                  <td className="px-8 py-6 text-sm text-gray-400 font-mono select-all" title="Clique para selecionar">{s.password}</td>
                  <td className="px-8 py-6">
                    <span className="text-[8px] font-bold uppercase text-white border border-white/20 px-2 py-1 rounded">Ativo</span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <button 
                      onClick={() => handleRemoveStudent(s.id, s.name)}
                      className={`p-2 rounded-lg transition-all ${s.id === 'admin-1' ? 'opacity-20 cursor-not-allowed' : 'text-gray-600 hover:text-red-500 hover:bg-red-500/10'}`}
                      disabled={s.id === 'admin-1'}
                    >
                      <ICONS.Trash className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-8 text-center text-[10px] text-gray-600 uppercase font-semibold italic tracking-widest">Acesso Restrito: Apenas o Admin Superior visualiza esta lista.</p>
    </div>
  );

  const renderHome = () => (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="relative rounded-[2rem] overflow-hidden mb-8 border border-white/5 bg-[#0f0f0f] shadow-2xl">
        <img src="https://i.imgur.com/1BEvTCp.png" className="w-full h-auto object-cover" alt="Banner" />
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-black italic uppercase text-white mb-2 tracking-tighter">Dark Stage™</h1>
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
          <span className="text-gray-500">|</span>
          <p>Por <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:text-white transition-colors">omentordigitalll</a></p>
        </div>
        <p className="text-gray-300 text-base leading-relaxed font-medium">
          Especialização em posicionamento de <strong>perfis Dark iniciantes</strong>, auxiliando na <u>estruturação</u> e no <u>impulsionamento</u> de vendas.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold text-white mb-5">Ferramentas</h2>
        <div className="space-y-3">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-[#141414] rounded-2xl border border-white/5 hover:bg-[#1a1a1a] transition-all group">
            <ICONS.Star className="w-5 h-5 text-gray-500 group-hover:text-white" />
            <p className="text-sm text-gray-400 group-hover:text-white"><span className="font-semibold text-white">Meu Instagram!</span> → Siga o cérebro que faz o jogo acontecer.</p>
          </a>
          <a href={SOCIAL_LINKS.support} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-[#141414] rounded-2xl border border-white/5 hover:bg-[#1a1a1a] transition-all group">
            <ICONS.Phone className="w-5 h-5 text-gray-500 group-hover:text-white" />
            <p className="text-sm text-gray-400 group-hover:text-white"><span className="font-semibold text-white">Suporte Direto</span> → Fale conosco agora pelo WhatsApp.</p>
          </a>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-6 italic">TREINAMENTO COMPLETO ↓</h2>
        <div className="space-y-4">
          {MODULES.map(m => (
            <button key={m.id} onClick={() => { setSelectedModule(m); window.scrollTo(0,0); }} className="w-full group flex items-center justify-between p-6 bg-[#141414] hover:bg-[#1a1a1a] rounded-[1.5rem] border border-white/5 transition-all text-left">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ICONS.PaperAirplane className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-[13px] font-black uppercase tracking-tight text-white italic">{m.title}</h3>
                  <p className="text-[9px] text-gray-600 uppercase font-semibold mt-1">{m.description}</p>
                </div>
              </div>
              {m.lessons.every(l => readLessons.includes(l.id)) ? <ICONS.Check className="w-5 h-5 text-white" /> : <div className="w-5 h-5 rounded-full border border-white/10"></div>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderModule = (m: Module) => (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <button onClick={() => setSelectedModule(null)} className="text-gray-500 hover:text-white mb-10 text-[10px] font-bold uppercase flex items-center gap-2 transition-colors">
        <ICONS.ArrowLeft className="w-4 h-4" /> Voltar ao Painel
      </button>
      <h1 className="text-5xl font-black italic uppercase text-white mb-12 tracking-tighter leading-none">{m.title}</h1>
      <div className="space-y-16">
        {m.lessons.map(l => (
          <div key={l.id} className="relative bg-[#141414] p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl">
            <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
              <h3 className="text-2xl font-black uppercase text-white italic tracking-tighter">{l.title}</h3>
              <button onClick={() => toggleRead(l.id)} className={`px-5 py-2.5 rounded-xl text-[9px] font-bold uppercase border transition-all ${readLessons.includes(l.id) ? 'bg-white text-black border-white' : 'bg-[#0f0f0f] text-gray-600 border-white/10'}`}>
                {readLessons.includes(l.id) ? 'CONCLUÍDO ✓' : 'MARCAR VISTO'}
              </button>
            </div>
            <div className="prose prose-invert max-w-none text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: l.content || '' }} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <nav className="sticky top-0 z-[60] bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 px-6 md:px-8 py-5 flex items-center justify-between">
        <div onClick={() => { setSelectedModule(null); setIsAdminMode(false); }} className="flex items-center gap-4 cursor-pointer">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
            <img src="https://i.imgur.com/aQjlYHU.jpeg" className="w-10 h-10 object-contain" alt="Logo" />
          </div>
          <span className="font-black text-[12px] uppercase italic tracking-[0.3em] hidden sm:block">Dark Stage™</span>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          {currentUser === 'admin@darkstage.com' && (
            <button onClick={() => setIsAdminMode(!isAdminMode)} className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              <ICONS.Settings className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{isAdminMode ? 'CONTEÚDOS' : 'GERIR ACESSOS'}</span>
            </button>
          )}
          <button onClick={handleLogout} className="text-[10px] font-bold uppercase text-gray-600 hover:text-white transition-colors">Sair</button>
        </div>
      </nav>
      <main className="pb-32">
        {isAdminMode ? renderAdmin() : (selectedModule ? renderModule(selectedModule) : renderHome())}
      </main>
      <footer className="fixed bottom-0 left-0 w-full p-8 text-center pointer-events-none z-0">
         <p className="text-[9px] text-gray-900 font-bold uppercase tracking-[0.8em]">DARK STAGE © 2026</p>
      </footer>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .prose strong { color: #fff; font-weight: 700; }
        .prose a { color: #fff; text-decoration: underline; font-weight: 600; }
        .prose u { text-decoration-color: rgba(255,255,255,0.4); text-underline-offset: 4px; }
      `}</style>
    </div>
  );
};

export default App;
