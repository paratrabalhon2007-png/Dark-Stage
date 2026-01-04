
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ICONS } from './constants';
import { MODULES } from './data';
import { Module, Student } from './types';

// Acessando as variáveis de forma compatível com Vite e Vercel
// Fix: Use type assertion for import.meta to access .env safely in TypeScript for Vite environment variables
const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || '';

// Inicialização segura
const supabase = (supabaseUrl && supabaseAnonKey) ? createClient(supabaseUrl, supabaseAnonKey) : null;

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

  // Verifica se o banco de dados está pronto
  const isSupabaseReady = !!supabase;

  useEffect(() => {
    const init = async () => {
      // Carrega sessão salva no navegador
      const session = localStorage.getItem('dark_stage_session');
      if (session) {
        setIsLoggedIn(true);
        setCurrentUser(session);
      }
      
      // Busca alunos se o Supabase estiver conectado
      if (isSupabaseReady) {
        await fetchStudents();
      }

      // Carrega progresso das aulas
      const savedRead = localStorage.getItem('dark_stage_read_lessons');
      if (savedRead) setReadLessons(JSON.parse(savedRead));

      setIsLoading(false);
    };
    init();
  }, [isSupabaseReady]);

  const fetchStudents = async () => {
    if (!supabase) return;
    try {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('id', { ascending: false });

      const defaultAdmin: Student = {
        id: 'admin-1',
        name: 'Admin Principal',
        email: 'admin@darkstage.com',
        password: 'admin123',
        dateAdded: 'Sempre'
      };

      if (data) {
        const mapped = data.map((s: any) => ({
          id: s.id.toString(),
          name: s.name,
          email: s.email,
          password: s.password,
          dateAdded: s.dateAdded || '---'
        }));
        setStudents([defaultAdmin, ...mapped]);
      } else {
        setStudents([defaultAdmin]);
      }
    } catch (err) {
      console.error("Erro ao buscar alunos:", err);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string).toLowerCase().trim();
    const password = formData.get('password') as string;

    // Login Admin Fixo (Sempre funciona)
    if (email === 'admin@darkstage.com' && password === 'admin123') {
      setIsLoggedIn(true);
      setCurrentUser(email);
      localStorage.setItem('dark_stage_session', email);
      return;
    }

    if (!supabase) {
      alert("Banco de dados não conectado. Verifique as chaves na Vercel.");
      return;
    }

    try {
      const { data } = await supabase
        .from('students')
        .select('*')
        .eq('email', email)
        .eq('password', password);

      if (data && data.length > 0) {
        setIsLoggedIn(true);
        setCurrentUser(email);
        localStorage.setItem('dark_stage_session', email);
      } else {
        alert("E-mail ou Senha incorretos.");
      }
    } catch (err) {
      alert("Erro na conexão com o banco.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setIsAdminMode(false);
    localStorage.removeItem('dark_stage_session');
  };

  const addStudent = async () => {
    if (!supabase) return;
    if (!newStudent.name || !newStudent.email || !newStudent.password) {
      alert("Preencha tudo!");
      return;
    }

    try {
      const { error } = await supabase
        .from('students')
        .insert([{ 
          name: newStudent.name, 
          email: newStudent.email.toLowerCase().trim(), 
          password: newStudent.password,
          dateAdded: new Date().toLocaleDateString('pt-BR')
        }]);

      if (error) throw error;

      alert("Aluno adicionado!");
      setIsAddingStudent(false);
      setNewStudent({ name: '', email: '', password: '' });
      fetchStudents();
    } catch (err: any) {
      alert("Erro ao salvar: " + err.message);
    }
  };

  const removeStudent = async (id: string, name: string) => {
    if (!supabase || id === 'admin-1') return;
    if (confirm(`Remover acesso de ${name}?`)) {
      await supabase.from('students').delete().eq('id', id);
      fetchStudents();
    }
  };

  const toggleRead = (lessonId: string) => {
    setReadLessons(prev => {
      const newState = prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId];
      localStorage.setItem('dark_stage_read_lessons', JSON.stringify(newState));
      return newState;
    });
  };

  // Se não houver chaves, mostra a tela de configuração (esperado no Preview)
  if (!isLoading && !isSupabaseReady) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border border-white/10">
          <ICONS.Lock className="text-white w-8 h-8 opacity-50" />
        </div>
        <h1 className="text-xl font-black text-white uppercase italic mb-2">Pronto para Publicar</h1>
        <p className="text-gray-500 max-w-xs text-[11px] leading-relaxed mb-8 uppercase tracking-widest">
          O sistema está aguardando a conexão com o Supabase. No seu site da Vercel isso já está configurado.
        </p>
        <div className="bg-[#141414] p-5 rounded-2xl border border-white/5 text-left w-full max-w-xs font-mono text-[10px] space-y-2">
          <p className="text-blue-500">VITE_SUPABASE_URL: OK na Vercel</p>
          <p className="text-green-500">VITE_SUPABASE_ANON_KEY: OK na Vercel</p>
        </div>
      </div>
    );
  }

  if (isLoading) return <div className="min-h-screen bg-[#0a0a0a]" />;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0a]">
        <div className="w-full max-w-md animate-fadeIn">
          <div className="text-center mb-10">
            <div className="w-32 h-32 bg-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(255,255,255,0.2)]">
              <img src="https://i.imgur.com/aQjlYHU.jpeg" className="w-28 h-28 object-contain scale-110" alt="Logo" />
            </div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white">Dark Stage™</h1>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Plataforma de Elite para Criadores</p>
          </div>
          <div className="bg-[#141414] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1">E-mail</label>
                <input name="email" type="email" required placeholder="seu@email.com" className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-white transition-all text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest ml-1">Senha</label>
                <div className="relative">
                  <input name="password" type={showLoginPassword ? "text" : "password"} required placeholder="••••••••" className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-sm outline-none focus:border-white transition-all text-white" />
                  <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors p-2">
                    {showLoginPassword ? <ICONS.EyeOff className="w-5 h-5" /> : <ICONS.Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full bg-white hover:bg-gray-200 text-black font-black py-5 rounded-2xl uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95 mt-4">Acessar Treinamento</button>
            </form>
          </div>
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
              <th className="px-6 py-5">Nome</th>
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
          <div className="w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-xl font-black uppercase text-white mb-8 italic">Cadastrar Aluno</h2>
            <div className="space-y-5">
              <input type="text" placeholder="Nome Completo" value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none focus:border-white transition-all" />
              <input type="email" placeholder="E-mail" value={newStudent.email} onChange={e => setNewStudent({...newStudent, email: e.target.value})} className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none focus:border-white transition-all" />
              <div className="relative">
                <input type={showNewStudentPassword ? "text" : "password"} placeholder="Senha" value={newStudent.password} onChange={e => setNewStudent({...newStudent, password: e.target.value})} className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none focus:border-white transition-all" />
                <button onClick={() => setShowNewStudentPassword(!showNewStudentPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  {showNewStudentPassword ? <ICONS.EyeOff className="w-5 h-5" /> : <ICONS.Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <button onClick={() => setIsAddingStudent(false)} className="flex-1 bg-white/5 text-gray-400 py-4 rounded-xl text-[10px] font-black uppercase">Cancelar</button>
              <button onClick={addStudent} className="flex-1 bg-white text-black py-4 rounded-xl text-[10px] font-black uppercase">Salvar Aluno</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderHome = () => (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="relative rounded-3xl overflow-hidden mb-10 border border-white/5 bg-[#0f0f0f] shadow-2xl">
        <img src="https://i.imgur.com/1BEvTCp.png" className="w-full h-auto object-cover" alt="Banner" />
      </div>
      <div className="mb-10 px-2">
        <h2 className="text-4xl font-black text-white italic tracking-tighter mb-4">Dark Stage™</h2>
        <div className="space-y-3">
          {MODULES.map(m => (
            <button key={m.id} onClick={() => { setSelectedModule(m); window.scrollTo(0,0); }} className="w-full group flex items-center justify-between p-6 bg-[#1a1a1a] hover:bg-[#222] rounded-2xl border border-white/5 transition-all text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10">
                  <ICONS.PaperAirplane className="w-5 h-5 text-gray-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-white">{m.title}</h3>
                  <p className="text-[9px] text-gray-600 uppercase font-bold mt-1">{m.description}</p>
                </div>
              </div>
              {m.lessons.every(l => readLessons.includes(l.id)) ? <ICONS.Check className="w-4 h-4 text-white" /> : <div className="w-5 h-5 rounded-full border-2 border-white/5"></div>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderModule = (m: Module) => (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <button onClick={() => setSelectedModule(null)} className="text-gray-500 hover:text-white mb-10 text-[10px] font-black uppercase flex items-center gap-2">
        <ICONS.ArrowLeft className="w-4 h-4" /> Voltar ao Início
      </button>
      <h1 className="text-4xl font-black italic uppercase text-white mb-12">{m.title}</h1>
      <div className="space-y-16">
        {m.lessons.filter(l => !!l.content).map(l => (
          <div key={l.id} className="relative bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 shadow-xl">
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <h3 className="text-2xl font-black uppercase text-white italic">{l.title}</h3>
              <button onClick={() => toggleRead(l.id)} className={`px-5 py-2.5 rounded-xl text-[8px] font-black uppercase border transition-all ${readLessons.includes(l.id) ? 'bg-white text-black' : 'bg-[#0f0f0f] text-gray-500 border-white/10'}`}>
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
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <nav className="sticky top-0 z-50 bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-white/5 px-6 py-5 flex items-center justify-between">
        <div onClick={() => { setSelectedModule(null); setIsAdminMode(false); }} className="flex items-center gap-4 cursor-pointer group">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center overflow-hidden transition-transform active:scale-95">
            <img src="https://i.imgur.com/aQjlYHU.jpeg" className="w-11 h-11 object-contain scale-110" alt="Logo" />
          </div>
          <span className="font-black text-[12px] uppercase italic tracking-[0.2em] hidden sm:block">Dark Stage™</span>
        </div>
        <div className="flex items-center gap-6">
          {currentUser === 'admin@darkstage.com' && (
            <button onClick={() => setIsAdminMode(!isAdminMode)} className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              <ICONS.Settings className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">{isAdminMode ? 'CONTEÚDO' : 'ALUNOS'}</span>
            </button>
          )}
          <button onClick={handleLogout} className="text-[10px] font-black uppercase text-gray-600 hover:text-white transition-colors">Sair</button>
        </div>
      </nav>
      <main className="pb-32">
        {isAdminMode ? renderAdmin() : (selectedModule ? renderModule(selectedModule) : renderHome())}
      </main>
      <footer className="fixed bottom-0 left-0 w-full p-6 text-center pointer-events-none z-10">
         <p className="text-[8px] text-gray-800 font-black uppercase tracking-[0.6em]">DARK STAGE © 2026</p>
      </footer>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .lesson-content { font-size: 14px; color: #b0b0b0; line-height: 1.8; }
        .lesson-content strong { color: #fff; font-weight: 800; }
        .lesson-content a { color: #fff !important; text-decoration: underline; font-weight: 700; }
        .lesson-content p { margin-bottom: 1.5rem; }
        .lesson-content ul { list-style: none; margin: 1.5rem 0; }
        .lesson-content li { position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem; }
        .lesson-content li::before { content: ""; position: absolute; left: 0; top: 0.6rem; width: 6px; height: 6px; background: #fff; border-radius: 50%; }
      `}</style>
    </div>
  );
};

export default App;
