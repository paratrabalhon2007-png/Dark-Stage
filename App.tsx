
import React, { useState, useEffect } from 'react';
import { ICONS, SOCIAL_LINKS } from './constants';
import { MODULES } from './data';
import { Module, Student } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [students, setStudents] = useState<Student[]>([]);
  const [isAddingStudent, setIsAddingStudent] = useState<boolean>(false);
  const [newStudent, setNewStudent] = useState({ name: '', email: '', password: '' });
  const [showNewStudentPassword, setShowNewStudentPassword] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [readLessons, setReadLessons] = useState<string[]>([]);

  useEffect(() => {
    const init = () => {
      const session = localStorage.getItem('dark_stage_session');
      if (session) {
        setIsLoggedIn(true);
        setCurrentUser(session);
      }

      const savedStudents = localStorage.getItem('dark_stage_students');
      if (savedStudents) {
        setStudents(JSON.parse(savedStudents));
      } else {
        const defaultAdmin: Student = {
          id: 'admin-1',
          name: 'Admin Principal',
          email: 'admin@darkstage.com',
          password: 'admin123',
          dateAdded: new Date().toLocaleDateString()
        };
        setStudents([defaultAdmin]);
        localStorage.setItem('dark_stage_students', JSON.stringify([defaultAdmin]));
      }

      const savedRead = localStorage.getItem('dark_stage_read_lessons');
      if (savedRead) setReadLessons(JSON.parse(savedRead));

      setIsLoading(false);
    };
    init();
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string).toLowerCase().trim();
    const password = formData.get('password') as string;

    const user = students.find(s => s.email === email && s.password === password);

    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(email);
      localStorage.setItem('dark_stage_session', email);
    } else {
      alert("Acesso negado: E-mail ou senha incorretos.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setIsAdminMode(false);
    localStorage.removeItem('dark_stage_session');
  };

  const generateAutoPassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < 10; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setNewStudent({ ...newStudent, password });
    setShowNewStudentPassword(true);
  };

  const addStudent = () => {
    if (!newStudent.name || !newStudent.email || !newStudent.password) {
      alert("Preencha todos os campos!");
      return;
    }
    const newcomer: Student = {
      id: Date.now().toString(),
      name: newStudent.name,
      email: newStudent.email.toLowerCase().trim(),
      password: newStudent.password,
      dateAdded: new Date().toLocaleDateString()
    };
    const updated = [newcomer, ...students];
    setStudents(updated);
    localStorage.setItem('dark_stage_students', JSON.stringify(updated));
    setNewStudent({ name: '', email: '', password: '' });
    setIsAddingStudent(false);
  };

  const removeStudent = (id: string, name: string) => {
    if (name === 'Admin Principal') return;
    if (confirm(`Remover acesso de ${name}?`)) {
      const updated = students.filter(s => s.id !== id);
      setStudents(updated);
      localStorage.setItem('dark_stage_students', JSON.stringify(updated));
    }
  };

  const toggleRead = (lessonId: string) => {
    setReadLessons(prev => {
      const newState = prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId];
      localStorage.setItem('dark_stage_read_lessons', JSON.stringify(newState));
      return newState;
    });
  };

  if (isLoading) return null;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0a]">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            {/* Logo maior e com mais destaque na tela de Login */}
            <div className="w-32 h-32 bg-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-transform hover:scale-105 overflow-hidden">
              <img src="https://i.imgur.com/aQjlYHU.jpeg" className="w-28 h-28 object-contain scale-110" alt="Dark Stage Logo" />
            </div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white">Dark Stage™</h1>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Plataforma de Elite para Criadores</p>
          </div>
          <div className="bg-[#141414] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <div className="mb-10 text-center">
              <p className="text-white text-xs font-black uppercase tracking-widest opacity-80">LOGIN DE ACESSO</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1">E-mail</label>
                <input name="email" type="email" required placeholder="seu@email.com" className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-white transition-all text-white placeholder:text-gray-800" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1">Senha</label>
                <div className="relative">
                  <input name="password" type={showLoginPassword ? "text" : "password"} required placeholder="••••••••" className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-white transition-all text-white placeholder:text-gray-800" />
                  <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors p-2">
                    {showLoginPassword ? <ICONS.EyeOff className="w-5 h-5" /> : <ICONS.Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full bg-white hover:bg-gray-200 text-black font-black py-5 rounded-2xl uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 mt-4">Acessar Treinamento</button>
            </form>
          </div>
          <p className="text-center mt-12 text-[9px] text-gray-800 font-black uppercase tracking-[0.5em]">Dark Stage Platform © 2026</p>
        </div>
      </div>
    );
  }

  const renderAdmin = () => (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-xl font-black uppercase italic tracking-widest text-white">Gestão de Alunos</h1>
        <button onClick={() => setIsAddingStudent(true)} className="bg-white text-black px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-200 transition-all shadow-xl"><ICONS.Plus className="w-4 h-4" /> Novo Aluno</button>
      </div>
      <div className="bg-[#1a1a1a] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-[9px] font-black uppercase text-gray-500">
            <tr>
              <th className="px-6 py-5">Nome do Aluno</th>
              <th className="px-6 py-5">E-mail</th>
              <th className="px-6 py-5">Senha</th>
              <th className="px-6 py-5 text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {students.map(s => (
              <tr key={s.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-5 text-sm font-bold text-white">{s.name}</td>
                <td className="px-6 py-5 text-sm text-gray-400">{s.email}</td>
                <td className="px-6 py-5 text-sm font-mono text-gray-500">{s.password}</td>
                <td className="px-6 py-5 text-right">
                  {s.email !== 'admin@darkstage.com' && (
                    <button onClick={() => removeStudent(s.id, s.name)} className="text-gray-700 hover:text-red-500 p-2 transition-colors"><ICONS.Trash className="w-5 h-5" /></button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAddingStudent && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 animate-fadeIn shadow-2xl">
            <h2 className="text-xl font-black uppercase text-white mb-8 italic">Cadastrar Novo Aluno</h2>
            <div className="space-y-5">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-600 tracking-widest ml-1">Nome Completo</label>
                <input type="text" placeholder="Ex: João Silva" value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-white text-white" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-600 tracking-widest ml-1">E-mail de Login</label>
                <input type="email" placeholder="aluno@email.com" value={newStudent.email} onChange={e => setNewStudent({...newStudent, email: e.target.value})} className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-sm outline-none focus:border-white text-white" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] font-black uppercase text-gray-600 tracking-widest">Senha de Acesso</label>
                  <button onClick={generateAutoPassword} className="text-[9px] font-black uppercase text-white hover:underline">Gerar Automática</button>
                </div>
                <div className="relative">
                  <input type={showNewStudentPassword ? "text" : "password"} placeholder="••••••••" value={newStudent.password} onChange={e => setNewStudent({...newStudent, password: e.target.value})} className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-sm pr-12 outline-none focus:border-white text-white" />
                  <button type="button" onClick={() => setShowNewStudentPassword(!showNewStudentPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                    {showNewStudentPassword ? <ICONS.EyeOff className="w-5 h-5" /> : <ICONS.Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <button onClick={() => setIsAddingStudent(false)} className="flex-1 bg-white/5 text-gray-400 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Cancelar</button>
              <button onClick={addStudent} className="flex-1 bg-white text-black py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all shadow-lg shadow-white/5">Salvar Acesso</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderHome = () => (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      {/* Banner Personalizado */}
      <div className="relative rounded-3xl overflow-hidden mb-10 border border-white/5 shadow-2xl bg-[#0f0f0f]">
        <img 
          src="https://i.imgur.com/1BEvTCp.png" 
          className="w-full h-auto object-cover" 
          alt="Dark Stage Banner"
        />
      </div>

      {/* Info do Mentor */}
      <div className="mb-10 px-2">
        <h2 className="text-4xl font-black text-white italic tracking-tighter mb-4 flex items-center gap-2">Dark Stage™</h2>
        <div className="flex items-center gap-3 text-gray-500 text-sm font-medium mb-6">
          <span className="w-0.5 h-6 bg-white/20"></span>
          <p>Por <a href={SOCIAL_LINKS.instagram} target="_blank" className="text-gray-400 underline hover:text-white transition-colors">omentordigitalll</a> | <span className="text-gray-400">omentordigitalll</span></p>
        </div>
        <p className="text-gray-300 text-base font-medium leading-relaxed mb-10">
          <strong>Treinamento de especialização em posicionamento</strong> de <span className="italic text-white">perfis Dark iniciantes</span>, auxiliando na <span className="italic text-white">estruturação</span> e no <span className="underline decoration-white">impulsionamento de vendas.</span>
        </p>

        {/* Ferramentas Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-white italic tracking-tight">Ferramentas</h3>
          <div className="grid gap-3">
            <a href={SOCIAL_LINKS.instagram} target="_blank" className="group flex items-center gap-5 p-6 bg-[#1a1a1a] hover:bg-[#222] rounded-2xl border border-white/5 transition-all active:scale-[0.98]">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10">
                <ICONS.Star className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-200">Meu Instagram! → <span className="text-gray-500 font-medium group-hover:text-gray-300 transition-colors">Siga o cérebro que vai fazer você repensar seu jogo.</span></h4>
              </div>
            </a>
            <a href={SOCIAL_LINKS.support} target="_blank" className="group flex items-center gap-5 p-6 bg-[#1a1a1a] hover:bg-[#222] rounded-2xl border border-white/5 transition-all active:scale-[0.98]">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10">
                <ICONS.Phone className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-200">Contato para suporte → <span className="text-gray-500 font-medium group-hover:text-gray-300 transition-colors">tire todas suas dúvidas aqui</span></h4>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="my-16 flex items-center gap-4 text-gray-700">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">ELEVE-SE PARA O PRÓXIMO ESTÁGIO ↓</p>
        <div className="w-full h-[1px] bg-white/5"></div>
      </div>

      {/* Modules List */}
      <div className="space-y-3">
        {MODULES.map(m => (
          <button key={m.id} onClick={() => { setSelectedModule(m); window.scrollTo(0,0); }} className="w-full group flex items-center justify-between p-6 bg-[#1a1a1a] hover:bg-[#222] rounded-2xl border border-white/5 transition-all active:scale-[0.99] text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-all">
                <ICONS.PaperAirplane className="w-5 h-5 text-gray-500 group-hover:text-white transition-all" />
              </div>
              <div>
                <h3 className="text-[11px] font-black uppercase tracking-widest text-white group-hover:text-gray-300 transition-colors">{m.title}</h3>
                <p className="text-[9px] text-gray-600 uppercase font-bold mt-1 group-hover:text-gray-400">{m.description}</p>
              </div>
            </div>
            {m.lessons.length > 0 && m.lessons.every(l => readLessons.includes(l.id)) ? (
              <ICONS.Check className="w-4 h-4 text-white" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-white/5 group-hover:border-white/30 transition-all"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  const renderModule = (m: Module) => (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <button onClick={() => setSelectedModule(null)} className="text-gray-500 hover:text-white mb-10 text-[10px] font-black uppercase flex items-center gap-2 transition-colors">
        <ICONS.ArrowLeft className="w-4 h-4" /> Voltar ao Início
      </button>
      <div className="mb-12">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-4">{m.title}</h1>
        <div className="h-1 w-16 bg-white rounded-full"></div>
      </div>
      <div className="space-y-16">
        {m.lessons.filter(l => !!l.content).map(l => (
          <div key={l.id} className="relative bg-[#1a1a1a] p-8 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between gap-6 mb-8">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white italic">{l.title}</h3>
              <button onClick={() => toggleRead(l.id)} className={`px-5 py-2.5 rounded-xl text-[8px] font-black uppercase border transition-all ${readLessons.includes(l.id) ? 'bg-white text-black border-white' : 'bg-[#0f0f0f] text-gray-500 border-white/10 hover:border-white/50'}`}>
                {readLessons.includes(l.id) ? 'CONCLUÍDO' : 'MARCAR LIDO'}
              </button>
            </div>
            <div className="prose prose-invert max-w-none lesson-content" dangerouslySetInnerHTML={{ __html: l.content || '' }} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-white selection:text-black">
      <nav className="sticky top-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-white/5 px-6 py-5 flex items-center justify-between shadow-2xl">
        <div onClick={() => { setSelectedModule(null); setIsAdminMode(false); }} className="flex items-center gap-4 cursor-pointer group">
          {/* Logo maior e com destaque na Barra de Navegação */}
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden shadow-xl">
            <img src="https://i.imgur.com/aQjlYHU.jpeg" className="w-11 h-11 object-contain scale-110" alt="Logo" />
          </div>
          <span className="font-black text-[12px] uppercase italic tracking-[0.2em] text-white">Dark Stage™</span>
        </div>
        <div className="flex items-center gap-6">
          {currentUser === 'admin@darkstage.com' && (
            <button onClick={() => setIsAdminMode(!isAdminMode)} className={`flex items-center gap-2.5 transition-all ${isAdminMode ? 'text-white' : 'text-gray-500 hover:text-white'}`}>
              <ICONS.Settings className={`w-5 h-5 ${isAdminMode ? 'rotate-90' : ''} transition-transform text-white`} />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">ADMIN</span>
            </button>
          )}
          <button onClick={handleLogout} className="text-[10px] font-black uppercase text-gray-600 hover:text-white transition-colors">Sair</button>
        </div>
      </nav>
      <main className="pb-32">
        {isAdminMode ? renderAdmin() : (selectedModule ? renderModule(selectedModule) : renderHome())}
      </main>
      <footer className="fixed bottom-0 left-0 w-full p-6 text-center bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none">
         <p className="text-[8px] text-gray-800 font-black uppercase tracking-[0.6em]">DARK STAGE PLATFORM © 2026</p>
      </footer>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .lesson-content { font-size: 14px; color: #b0b0b0; line-height: 1.8; }
        .lesson-content strong { color: #fff; font-weight: 800; }
        .lesson-content a { color: #fff !important; text-decoration: underline; font-weight: 700; transition: opacity 0.2s; }
        .lesson-content a:hover { opacity: 0.8; }
        .lesson-content p { margin-bottom: 1.5rem; }
        .lesson-content ul { list-style-type: none; margin: 1.5rem 0; }
        .lesson-content li { position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem; }
        .lesson-content li::before { content: ""; position: absolute; left: 0; top: 0.6rem; width: 6px; height: 6px; background: #fff; border-radius: 50%; }
        input::placeholder { color: #404040; }
        /* Removidas todas as referências ao laranja residual */
        .lesson-content [data-navigate-module], 
        .lesson-content .bg-white/5,
        .lesson-content .bg-white/10 { 
          background: rgba(255,255,255,0.05) !important; 
          border-color: rgba(255,255,255,0.1) !important; 
          color: white !important;
        }
        .lesson-content .text-white { color: white !important; }
        .lesson-content .border-white { border-color: white !important; }
      `}</style>
    </div>
  );
};

export default App;
