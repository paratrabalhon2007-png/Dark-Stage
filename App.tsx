
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ICONS, SOCIAL_LINKS } from './constants';
import { MODULES } from './data';
import { Module, Student } from './types';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || '';

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
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [readLessons, setReadLessons] = useState<string[]>([]);

  const isSupabaseReady = !!supabase;

  useEffect(() => {
    const init = async () => {
      const session = localStorage.getItem('dark_stage_session');
      if (session) {
        setIsLoggedIn(true);
        setCurrentUser(session);
      }
      if (isSupabaseReady) await fetchStudents();
      const savedRead = localStorage.getItem('dark_stage_read_lessons');
      if (savedRead) setReadLessons(JSON.parse(savedRead));
      setIsLoading(false);
    };
    init();
  }, [isSupabaseReady]);

  const fetchStudents = async () => {
    if (!supabase) return;
    try {
      const { data, error } = await supabase.from('students').select('*').order('id', { ascending: false });
      if (error) throw error;
      const defaultAdmin: Student = { id: 'admin-1', name: 'Admin Principal', email: 'admin@darkstage.com', password: 'admin123', dateAdded: 'Sempre' };
      if (data) {
        const mapped = data.map((s: any) => ({
          id: s.id.toString(), name: s.name, email: s.email, password: s.password, dateAdded: s.dateAdded || '---'
        }));
        setStudents([defaultAdmin, ...mapped]);
      } else {
        setStudents([defaultAdmin]);
      }
    } catch (err) { console.error("Erro Supabase:", err); }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string).toLowerCase().trim();
    const password = formData.get('password') as string;

    if (email === 'admin@darkstage.com' && password === 'admin123') {
      setIsLoggedIn(true);
      setCurrentUser(email);
      localStorage.setItem('dark_stage_session', email);
      return;
    }
    if (!supabase) return alert("Erro: Banco de dados nao configurado.");
    try {
      const { data, error } = await supabase.from('students').select('*').eq('email', email).eq('password', password);
      if (error) throw error;
      if (data && data.length > 0) {
        setIsLoggedIn(true);
        setCurrentUser(email);
        localStorage.setItem('dark_stage_session', email);
      } else { alert("Acesso negado. Verifique email e senha."); }
    } catch (err) { alert("Erro de conexao com o banco."); }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setIsAdminMode(false);
    localStorage.removeItem('dark_stage_session');
  };

  const addStudent = async () => {
    if (!supabase) return alert("Erro: Supabase nao pronto.");
    if (!newStudent.name || !newStudent.email || !newStudent.password) return alert("Preencha todos os campos.");
    
    try {
      const { error } = await supabase.from('students').insert([{ 
        name: newStudent.name, 
        email: newStudent.email.toLowerCase().trim(), 
        password: newStudent.password,
        dateAdded: new Date().toLocaleDateString('pt-BR')
      }]);
      
      if (error) throw error;
      
      setIsAddingStudent(false);
      setNewStudent({ name: '', email: '', password: '' });
      await fetchStudents();
      alert("Aluno adicionado com sucesso.");
    } catch (err: any) { 
      console.error(err);
      alert("Erro ao salvar aluno no banco de dados."); 
    }
  };

  const removeStudent = async (id: string, name: string) => {
    if (!supabase || id === 'admin-1') return;
    if (confirm(`Remover ${name}?`)) {
      try {
        const { error } = await supabase.from('students').delete().eq('id', id);
        if (error) throw error;
        await fetchStudents();
      } catch (err) {
        alert("Erro ao excluir aluno.");
      }
    }
  };

  const toggleRead = (lessonId: string) => {
    setReadLessons(prev => {
      const newState = prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId];
      localStorage.setItem('dark_stage_read_lessons', JSON.stringify(newState));
      return newState;
    });
  };

  if (isLoading) return <div className="min-h-screen bg-[#0a0a0a]" />;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0a]">
        <div className="w-full max-w-md animate-fadeIn">
          <div className="text-center mb-10">
            <div className="w-32 h-32 bg-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-2xl overflow-hidden">
              <img src="https://i.imgur.com/aQjlYHU.jpeg" className="w-28 h-28 object-contain" alt="Logo" />
            </div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter text-white">Dark Stage™</h1>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Plataforma de Elite</p>
          </div>
          <div className="bg-[#141414] p-8 rounded-[2.5rem] border border-white/5">
            <form onSubmit={handleLogin} className="space-y-6">
              <input name="email" type="email" required placeholder="E-mail" className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white outline-none focus:border-white transition-all" />
              <div className="relative">
                <input name="password" type={showLoginPassword ? "text" : "password"} required placeholder="Senha" className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-5 py-4 text-sm text-white outline-none focus:border-white transition-all" />
                <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 p-2">
                  {showLoginPassword ? <ICONS.EyeOff className="w-5 h-5" /> : <ICONS.Eye className="w-5 h-5" />}
                </button>
              </div>
              <button type="submit" className="w-full bg-white text-black font-black py-5 rounded-2xl uppercase tracking-widest text-xs hover:bg-gray-200 transition-all">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const renderAdmin = () => (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-xl font-black uppercase italic text-white">Gestao de Alunos</h1>
        <button onClick={() => setIsAddingStudent(true)} className="bg-white text-black px-5 py-2.5 rounded-xl text-[10px] font-black uppercase flex items-center gap-2 shadow-xl"><ICONS.Plus className="w-4 h-4" /> Novo Aluno</button>
      </div>
      <div className="bg-[#1a1a1a] rounded-3xl border border-white/5 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-[9px] font-black uppercase text-gray-500">
            <tr><th className="px-6 py-5">Nome</th><th className="px-6 py-5">E-mail</th><th className="px-6 py-5 text-right">Acao</th></tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {students.map(s => (
              <tr key={s.id} className="hover:bg-white/[0.02]">
                <td className="px-6 py-5 text-sm font-bold text-white">{s.name}</td>
                <td className="px-6 py-5 text-sm text-gray-400">{s.email}</td>
                <td className="px-6 py-5 text-right">
                  {s.email !== 'admin@darkstage.com' && (
                    <button onClick={() => removeStudent(s.id, s.name)} className="text-gray-700 hover:text-red-500 p-2"><ICONS.Trash className="w-5 h-5" /></button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAddingStudent && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 shadow-2xl animate-fadeIn">
            <h2 className="text-xl font-black uppercase text-white mb-8 italic">Cadastrar Aluno</h2>
            <div className="space-y-5">
              <input type="text" placeholder="Nome" value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none focus:border-white transition-colors" />
              <input type="email" placeholder="E-mail" value={newStudent.email} onChange={e => setNewStudent({...newStudent, email: e.target.value})} className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none focus:border-white transition-colors" />
              <input type="password" placeholder="Senha" value={newStudent.password} onChange={e => setNewStudent({...newStudent, password: e.target.value})} className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none focus:border-white transition-colors" />
            </div>
            <div className="mt-10 flex gap-4">
              <button onClick={() => setIsAddingStudent(false)} className="flex-1 bg-white/5 text-gray-400 py-4 rounded-xl text-[10px] font-black uppercase">Cancelar</button>
              <button onClick={addStudent} className="flex-1 bg-white text-black py-4 rounded-xl text-[10px] font-black uppercase hover:bg-gray-200 transition-colors">Salvar</button>
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

      {/* Social and Support Links under the Banner */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:bg-[#222] transition-all">
          <ICONS.Instagram className="w-4 h-4 text-gray-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">Instagram</span>
        </a>
        <a href={SOCIAL_LINKS.support} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 bg-[#1a1a1a] rounded-2xl border border-white/5 hover:bg-[#222] transition-all">
          <ICONS.Phone className="w-4 h-4 text-gray-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">Suporte</span>
        </a>
      </div>

      <div className="text-center mb-10 p-4 border-t border-b border-white/5">
        <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">Criado por <span className="text-white">@omentordigitalll</span></p>
      </div>

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
  );

  const renderModule = (m: Module) => (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <button onClick={() => setSelectedModule(null)} className="text-gray-500 hover:text-white mb-10 text-[10px] font-black uppercase flex items-center gap-2">
        <ICONS.ArrowLeft className="w-4 h-4" /> Voltar ao Inicio
      </button>
      <h1 className="text-4xl font-black italic uppercase text-white mb-12">{m.title}</h1>
      <div className="space-y-16">
        {m.lessons.map(l => (
          <div key={l.id} className="relative bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 shadow-xl">
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <h3 className="text-2xl font-black uppercase text-white italic">{l.title}</h3>
              <button onClick={() => toggleRead(l.id)} className={`px-5 py-2.5 rounded-xl text-[8px] font-black uppercase border transition-all ${readLessons.includes(l.id) ? 'bg-white text-black' : 'bg-[#0f0f0f] text-gray-500 border-white/10'}`}>
                {readLessons.includes(l.id) ? 'CONCLUIDO ✓' : 'MARCAR LIDO'}
              </button>
            </div>
            <div className="prose prose-invert max-w-none text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: l.content || '' }} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      <nav className="sticky top-0 z-[60] bg-[#0f0f0f]/90 backdrop-blur-xl border-b border-white/5 px-6 py-5 flex items-center justify-between">
        <div onClick={() => { setSelectedModule(null); setIsAdminMode(false); }} className="flex items-center gap-4 cursor-pointer">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
            <img src="https://i.imgur.com/aQjlYHU.jpeg" className="w-11 h-11 object-contain" alt="Logo" />
          </div>
          <span className="font-black text-[12px] uppercase italic tracking-[0.2em] hidden sm:block">Dark Stage™</span>
        </div>
        <div className="flex items-center gap-6">
          {currentUser === 'admin@darkstage.com' && (
            <button onClick={() => setIsAdminMode(!isAdminMode)} className="flex items-center gap-2 text-white bg-white/5 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <ICONS.Settings className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">{isAdminMode ? 'CONTEUDO' : 'ALUNOS'}</span>
            </button>
          )}
          <button onClick={handleLogout} className="text-[10px] font-black uppercase text-gray-600 hover:text-white transition-colors">Sair</button>
        </div>
      </nav>
      <main className="pb-32">
        {isAdminMode ? renderAdmin() : (selectedModule ? renderModule(selectedModule) : renderHome())}
      </main>
      <footer className="fixed bottom-0 left-0 w-full p-6 text-center pointer-events-none z-0">
         <p className="text-[8px] text-gray-800 font-black uppercase tracking-[0.6em]">DARK STAGE © 2026</p>
      </footer>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .prose strong { color: #fff; font-weight: 800; }
        .prose a { color: #fff; text-decoration: underline; }
      `}</style>
    </div>
  );
};

export default App;
