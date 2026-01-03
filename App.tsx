
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ICONS } from './constants';
import { MODULES } from './data';
import { Module, Student } from './types';

// Padrão do Vite para ler variáveis da Vercel
const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || (process.env as any).VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || (process.env as any).VITE_SUPABASE_ANON_KEY || '';

const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

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

  const fetchStudents = async () => {
    if (!supabase) return;
    try {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('date_added', { ascending: false });

      if (!error && data) {
        setStudents(data.map((s: any) => ({
          id: s.id,
          name: s.name,
          email: s.email,
          password: s.password,
          dateAdded: new Date(s.date_added).toLocaleDateString()
        })));
      }
    } catch (err) {
      console.error("Erro Supabase:", err);
    }
  };

  useEffect(() => {
    const init = async () => {
      const session = localStorage.getItem('dark_stage_session');
      if (session) {
        setIsLoggedIn(true);
        setCurrentUser(session);
      }
      if (supabase) {
        await fetchStudents();
      }
      const saved = localStorage.getItem('dark_stage_read_lessons');
      if (saved) setReadLessons(JSON.parse(saved));
      setIsLoading(false);
    };
    init();
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!supabase) {
      alert("⚠️ ERRO: Chaves de conexão não encontradas. Verifique as variáveis de ambiente.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string).toLowerCase().trim();
    const password = formData.get('password') as string;
    
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .single();
    
    if (data) {
      setIsLoggedIn(true);
      setCurrentUser(email);
      localStorage.setItem('dark_stage_session', email);
    } else {
      alert("E-mail ou senha incorretos.");
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
      alert("Preencha todos os campos!");
      return;
    }
    const { error } = await supabase.from('students').insert([{ 
      name: newStudent.name, 
      email: newStudent.email.toLowerCase().trim(), 
      password: newStudent.password 
    }]);

    if (!error) {
      await fetchStudents();
      setNewStudent({ name: '', email: '', password: '' });
      setIsAddingStudent(false);
      alert("Aluno adicionado com sucesso!");
    } else {
      alert("Erro ao salvar: " + error.message);
    }
  };

  const removeStudent = async (id: string, name: string) => {
    if (!supabase || name === 'Admin Principal') return;
    if (confirm(`Remover acesso de ${name}?`)) {
      await supabase.from('students').delete().eq('id', id);
      await fetchStudents();
    }
  };

  const toggleRead = (lessonId: string) => {
    setReadLessons(prev => {
      const newState = prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId];
      localStorage.setItem('dark_stage_read_lessons', JSON.stringify(newState));
      return newState;
    });
  };

  if (isLoading) return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#ff5a00] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#050505]">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black font-black text-lg mx-auto mb-4">DS</div>
            <h1 className="text-xl font-black uppercase italic tracking-tighter">Dark Stage™</h1>
            <p className="text-[#ff5a00] text-[8px] font-black uppercase tracking-widest mt-1">Acesso restrito a alunos</p>
          </div>
          <div className="bg-[#111] p-8 rounded-2xl border border-white/5 shadow-2xl">
            <div className="mb-6 text-center">
               <p className="text-[#ff5a00] text-[10px] font-black uppercase tracking-tighter">Para continuar, faça login ou registre-se.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">E-mail</label>
                <input name="email" type="email" required placeholder="Seu e-mail cadastrado" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#ff5a00] transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Senha</label>
                <div className="relative">
                  <input name="password" type={showLoginPassword ? "text" : "password"} required placeholder="••••••••" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#ff5a00] transition-all" />
                  <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                    {showLoginPassword ? <ICONS.EyeOff className="w-5 h-5" /> : <ICONS.Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full bg-[#ff5a00] hover:bg-[#ff7a00] font-black py-4 rounded-xl uppercase tracking-widest text-[9px] transition-all">Entrar na plataforma</button>
              <div className="pt-4 text-center">
                <button type="button" className="text-[8px] font-black uppercase text-gray-600 hover:text-white transition-colors">Esqueceu sua senha? Clique aqui</button>
              </div>
            </form>
          </div>
          <p className="text-center mt-12 text-[8px] text-gray-700 font-black uppercase tracking-[0.4em]">Dark Stage Platform © 2026</p>
        </div>
      </div>
    );
  }

  const renderAdmin = () => (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-xl font-black uppercase italic tracking-widest">Alunos Ativos</h1>
        <button onClick={() => setIsAddingStudent(true)} className="bg-white text-black px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-200 transition-all"><ICONS.Plus className="w-3 h-3" /> Adicionar Aluno</button>
      </div>
      <div className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-[8px] font-black uppercase text-gray-500">
            <tr>
              <th className="px-6 py-4">Nome</th>
              <th className="px-6 py-4">E-mail</th>
              <th className="px-6 py-4">Senha</th>
              <th className="px-6 py-4 text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {students.map(s => (
              <tr key={s.id} className="hover:bg-white/[0.01]">
                <td className="px-6 py-4 text-sm font-bold">{s.name}</td>
                <td className="px-6 py-4 text-sm text-gray-400">{s.email}</td>
                <td className="px-6 py-4 text-sm font-mono text-gray-600">{s.password}</td>
                <td className="px-6 py-4 text-right">
                  {s.email !== 'admin@darkstage.com' && (
                    <button onClick={() => removeStudent(s.id, s.name)} className="text-gray-700 hover:text-red-500 p-1 transition-colors"><ICONS.Trash className="w-4 h-4" /></button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAddingStudent && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-[#111] border border-white/10 rounded-2xl p-8 animate-fadeIn">
            <h2 className="text-lg font-black uppercase mb-6">Novo Aluno</h2>
            <div className="space-y-4">
              <input type="text" placeholder="Nome" value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm" />
              <input type="email" placeholder="E-mail" value={newStudent.email} onChange={e => setNewStudent({...newStudent, email: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm" />
              <div className="relative">
                <input type={showNewStudentPassword ? "text" : "password"} placeholder="Senha" value={newStudent.password} onChange={e => setNewStudent({...newStudent, password: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm pr-12" />
                <button onClick={() => setNewStudent({...newStudent, password: Math.random().toString(36).slice(-8)})} className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] bg-white/10 px-2 py-1 rounded font-black">GERAR</button>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <button onClick={() => setIsAddingStudent(false)} className="flex-1 bg-white/5 py-3 rounded-lg text-[9px] font-black uppercase tracking-widest">Cancelar</button>
              <button onClick={addStudent} className="flex-1 bg-[#ff5a00] py-3 rounded-lg text-[9px] font-black uppercase tracking-widest">Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderHome = () => (
    <div className="max-w-xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="relative rounded-2xl overflow-hidden mb-8 border border-white/5 shadow-2xl">
        <img src="https://picsum.photos/seed/dark/1200/600?grayscale" className="w-full opacity-30 h-48 object-cover" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">DARK STAGE™</h1>
          <p className="text-[#ff5a00] text-[8px] font-black uppercase tracking-[0.4em] mt-1">Área VIP</p>
        </div>
      </div>
      <div className="space-y-2">
        {MODULES.map(m => (
          <button key={m.id} onClick={() => { setSelectedModule(m); window.scrollTo(0,0); }} className="w-full group flex items-center justify-between p-5 bg-[#111] hover:bg-[#161616] rounded-xl border border-white/5 transition-all active:scale-[0.99] text-left">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#ff5a00]/10 transition-all">
                <ICONS.PaperAirplane className="w-4 h-4 text-gray-500 group-hover:text-[#ff5a00] transition-all" />
              </div>
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-white">{m.title}</h3>
                <p className="text-[8px] text-gray-600 uppercase font-bold mt-0.5">{m.description}</p>
              </div>
            </div>
            {m.lessons.length > 0 && m.lessons.every(l => readLessons.includes(l.id)) && (
              <ICONS.Check className="w-3 h-3 text-green-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );

  const renderModule = (m: Module) => (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <button onClick={() => setSelectedModule(null)} className="text-gray-600 hover:text-white mb-8 text-[8px] font-black uppercase flex items-center gap-2 transition-colors">
        <ICONS.ArrowLeft className="w-3 h-3" /> Voltar ao início
      </button>
      <div className="mb-10">
        <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-2">{m.title}</h1>
        <div className="h-0.5 w-12 bg-[#ff5a00]"></div>
      </div>
      <div className="space-y-12">
        {m.lessons.filter(l => !!l.content).map(l => (
          <div key={l.id} className="relative">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h3 className="text-xl font-black uppercase tracking-tight text-white">{l.title}</h3>
              <button onClick={() => toggleRead(l.id)} className={`px-4 py-2 rounded-lg text-[7px] font-black uppercase border transition-all ${readLessons.includes(l.id) ? 'bg-green-600 text-white border-green-600' : 'bg-white/5 text-gray-500 border-white/10 hover:border-white/20'}`}>
                {readLessons.includes(l.id) ? 'Concluído' : 'Marcar Lido'}
              </button>
            </div>
            <div className="prose prose-invert max-w-none lesson-content" dangerouslySetInnerHTML={{ __html: l.content || '' }} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div onClick={() => { setSelectedModule(null); setIsAdminMode(false); }} className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black font-black text-[9px]">DS</div>
          <span className="font-black text-[9px] uppercase tracking-[0.2em] hidden md:block">Dark Stage</span>
        </div>
        <div className="flex items-center gap-4">
          {currentUser === 'admin@darkstage.com' && (
            <button onClick={() => setIsAdminMode(!isAdminMode)} className={`text-[8px] font-black uppercase transition-all ${isAdminMode ? 'text-[#ff5a00]' : 'text-gray-500 hover:text-white'}`}>
              {isAdminMode ? 'Sair do Admin' : 'Gestão Alunos'}
            </button>
          )}
          <button onClick={handleLogout} className="text-[8px] font-black uppercase text-red-900 hover:text-red-500 transition-colors">Sair</button>
        </div>
      </nav>
      <main className="pb-24">
        {isAdminMode ? renderAdmin() : (selectedModule ? renderModule(selectedModule) : renderHome())}
      </main>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .lesson-content { font-size: 13px; color: #a3a3a3; line-height: 1.6; }
        .lesson-content strong { color: #fff; font-weight: 800; }
        .lesson-content a { color: #ff5a00; text-decoration: underline; font-weight: 700; }
        .lesson-content p { margin-bottom: 1.2rem; }
      `}</style>
    </div>
  );
};

export default App;
