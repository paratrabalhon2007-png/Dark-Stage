
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { ICONS } from './constants';
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
  const [showNewStudentPassword, setShowNewStudentPassword] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [readLessons, setReadLessons] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedModules, setExpandedModules] = useState<string[]>([]);

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
      const { data } = await supabase.from('students').select('*').order('id', { ascending: false });
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
    if (!supabase) return alert("Erro: Banco de dados não conectado.");
    try {
      const { data } = await supabase.from('students').select('*').eq('email', email).eq('password', password);
      if (data && data.length > 0) {
        setIsLoggedIn(true);
        setCurrentUser(email);
        localStorage.setItem('dark_stage_session', email);
      } else { alert("E-mail ou Senha incorretos."); }
    } catch (err) { alert("Erro de conexão."); }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setIsAdminMode(false);
    localStorage.removeItem('dark_stage_session');
  };

  const addStudent = async () => {
    if (!supabase) return;
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
    } catch (err) { alert("Erro ao salvar aluno."); }
  };

  const removeStudent = async (id: string, name: string) => {
    if (!supabase) return;
    if (!window.confirm(`Excluir o aluno ${name}?`)) return;
    try {
      const { error } = await supabase.from('students').delete().eq('id', id);
      if (error) throw error;
      await fetchStudents();
    } catch (err) { alert("Erro ao excluir."); }
  };

  const toggleModuleExpansion = (id: string) => {
    setExpandedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const toggleRead = (lessonId: string) => {
    setReadLessons(prev => {
      const newState = prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId];
      localStorage.setItem('dark_stage_read_lessons', JSON.stringify(newState));
      return newState;
    });
  };

  const activeLesson = selectedModule?.lessons.find(l => l.id === selectedLessonId);

  const renderSidebarItem = (label: string, icon: React.ReactNode, active: boolean, onClick: () => void, chevron?: boolean, expanded?: boolean) => (
    <div 
      onClick={onClick}
      className={`group flex items-center gap-2 px-3 py-1.5 cursor-pointer rounded-md transition-colors text-[14px] ${active ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}`}
    >
      {chevron && (
        <span className={`transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
        </span>
      )}
      <span className="w-4 h-4 flex items-center justify-center">{icon}</span>
      <span className="truncate flex-1 font-medium">{label}</span>
    </div>
  );

  if (isLoading) return <div className="min-h-screen bg-[#191919]" />;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#191919]">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <img src="https://i.imgur.com/aQjlYHU.jpeg" className="w-16 h-16 object-contain" alt="Logo" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white mb-1">Dark Stage™</h1>
            <p className="text-gray-500 text-[12px] uppercase tracking-widest">Área de Membros</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input name="email" type="email" required placeholder="E-mail" className="w-full bg-[#202020] border border-white/5 rounded-lg px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-white/20 transition-all text-white placeholder:text-gray-600" />
            <div className="relative">
              <input name="password" type={showLoginPassword ? "text" : "password"} required placeholder="Senha" className="w-full bg-[#202020] border border-white/5 rounded-lg px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-white/20 transition-all text-white placeholder:text-gray-600" />
              <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white">
                {showLoginPassword ? <ICONS.EyeOff className="w-4 h-4" /> : <ICONS.Eye className="w-4 h-4" />}
              </button>
            </div>
            <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg text-sm transition-all hover:bg-gray-200">Entrar</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#191919] text-[#fbfbfa] overflow-hidden font-sans">
      <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-[#202020] flex flex-col transition-all duration-300 border-r border-white/5 relative`}>
        <div className="p-4 flex items-center gap-3 mb-2">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center overflow-hidden">
             <img src="https://i.imgur.com/aQjlYHU.jpeg" className="w-5 h-5 object-contain" alt="Logo" />
          </div>
          <span className="font-bold text-sm tracking-tight truncate">Dark Stage Workspace</span>
        </div>

        <div className="flex-1 overflow-y-auto px-2 space-y-0.5">
          {renderSidebarItem("Home", <ICONS.Star className="w-3.5 h-3.5" />, !selectedModule && !isAdminMode, () => { setSelectedModule(null); setIsAdminMode(false); })}
          
          <div className="mt-6 mb-2 px-3 text-[11px] font-bold text-gray-500 uppercase tracking-widest">Módulos</div>
          
          {MODULES.map(m => (
            <div key={m.id} className="space-y-0.5">
              {renderSidebarItem(
                m.title, 
                <ICONS.PaperAirplane className="w-3.5 h-3.5" />, 
                selectedModule?.id === m.id, 
                () => {
                  setSelectedModule(m);
                  setIsAdminMode(false);
                  toggleModuleExpansion(m.id);
                  if (m.lessons.length > 0) setSelectedLessonId(m.lessons[0].id);
                },
                true,
                expandedModules.includes(m.id)
              )}
              {expandedModules.includes(m.id) && (
                <div className="ml-4 border-l border-white/5 pl-2 space-y-0.5 mt-0.5 mb-2">
                  {m.lessons.map(l => (
                    <div 
                      key={l.id} 
                      onClick={() => { setSelectedModule(m); setSelectedLessonId(l.id); setIsAdminMode(false); }}
                      className={`px-3 py-1 rounded-md text-[13px] cursor-pointer transition-colors flex items-center justify-between ${selectedLessonId === l.id ? 'bg-white/5 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'}`}
                    >
                      <span className="truncate">{l.title}</span>
                      {readLessons.includes(l.id) && <ICONS.Check className="w-3 h-3 text-green-500 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {currentUser === 'admin@darkstage.com' && (
            <>
              <div className="mt-6 mb-2 px-3 text-[11px] font-bold text-gray-500 uppercase tracking-widest">Admin</div>
              {renderSidebarItem("Alunos", <ICONS.Users className="w-3.5 h-3.5" />, isAdminMode, () => { setIsAdminMode(true); setSelectedModule(null); })}
            </>
          )}
        </div>

        <div className="p-4 border-t border-white/5 mt-auto">
          {renderSidebarItem("Sair", <ICONS.ArrowLeft className="w-3.5 h-3.5" />, false, handleLogout)}
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-11 flex items-center justify-between px-4 border-b border-white/5 bg-[#191919]">
          <div className="flex items-center gap-2 text-[14px]">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-white/5 rounded text-gray-500">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </button>
            <div className="flex items-center gap-1.5 text-gray-400">
              <span className="hover:bg-white/5 px-1.5 py-0.5 rounded cursor-pointer transition-colors" onClick={() => { setSelectedModule(null); setIsAdminMode(false); }}>Dark Stage</span>
              {selectedModule && (
                <>
                  <span className="text-gray-600">/</span>
                  <span className="hover:bg-white/5 px-1.5 py-0.5 rounded cursor-pointer transition-colors" onClick={() => setSelectedModule(selectedModule)}>{selectedModule.title}</span>
                </>
              )}
              {activeLesson && (
                <>
                  <span className="text-gray-600">/</span>
                  <span className="text-[#fbfbfa] font-medium">{activeLesson.title}</span>
                </>
              )}
              {isAdminMode && (
                <>
                  <span className="text-gray-600">/</span>
                  <span className="text-[#fbfbfa] font-medium">Gestão de Alunos</span>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">{currentUser?.split('@')[0]}</span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[900px] mx-auto py-20 px-12 lg:px-24">
            {isAdminMode ? (
              <div className="animate-fadeIn">
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-4xl font-bold tracking-tight">Gestão de Alunos</h1>
                  <button onClick={() => setIsAddingStudent(true)} className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-200 transition-all">
                    <ICONS.Plus className="w-4 h-4" /> Adicionar
                  </button>
                </div>
                
                <div className="border border-white/5 rounded-xl overflow-hidden bg-[#202020]">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/[0.02] border-b border-white/5">
                      <tr className="text-gray-500 font-medium">
                        <th className="px-6 py-4">Nome</th>
                        <th className="px-6 py-4">E-mail</th>
                        <th className="px-6 py-4 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {students.map(s => (
                        <tr key={s.id} className="hover:bg-white/[0.01]">
                          <td className="px-6 py-4 font-medium">{s.name}</td>
                          <td className="px-6 py-4 text-gray-500">{s.email}</td>
                          <td className="px-6 py-4 text-right">
                            {s.email !== 'admin@darkstage.com' && (
                              <button onClick={() => removeStudent(s.id, s.name)} className="text-gray-700 hover:text-red-500 transition-colors">
                                <ICONS.Trash className="w-4 h-4" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {isAddingStudent && (
                  <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="w-full max-w-md bg-[#202020] border border-white/10 rounded-2xl p-8 shadow-2xl animate-fadeIn">
                      <h2 className="text-xl font-bold mb-6">Novo Aluno</h2>
                      <div className="space-y-4">
                        <input placeholder="Nome" value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} className="w-full bg-[#191919] border border-white/5 rounded-lg px-4 py-3 text-sm outline-none" />
                        <input placeholder="E-mail" value={newStudent.email} onChange={e => setNewStudent({...newStudent, email: e.target.value})} className="w-full bg-[#191919] border border-white/5 rounded-lg px-4 py-3 text-sm outline-none" />
                        <input placeholder="Senha" value={newStudent.password} onChange={e => setNewStudent({...newStudent, password: e.target.value})} className="w-full bg-[#191919] border border-white/5 rounded-lg px-4 py-3 text-sm outline-none" />
                      </div>
                      <div className="flex gap-3 mt-8">
                        <button onClick={() => setIsAddingStudent(false)} className="flex-1 px-4 py-2 border border-white/10 rounded-lg text-sm text-gray-400 hover:bg-white/5 transition-colors">Cancelar</button>
                        <button onClick={addStudent} className="flex-1 px-4 py-2 bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">Salvar</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : selectedModule && activeLesson ? (
              <div className="animate-fadeIn">
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <h1 className="text-4xl font-bold tracking-tight">{activeLesson.title}</h1>
                  </div>
                  <button 
                    onClick={() => toggleRead(activeLesson.id)} 
                    className={`px-4 py-1.5 rounded-lg text-[12px] font-bold border transition-all ${readLessons.includes(activeLesson.id) ? 'bg-green-500/20 border-green-500/30 text-green-400' : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'}`}
                  >
                    {readLessons.includes(activeLesson.id) ? 'CONCLUÍDO ✓' : 'MARCAR COMO LIDO'}
                  </button>
                </div>

                <div className="prose prose-invert max-w-none notion-style-content" 
                     dangerouslySetInnerHTML={{ __html: activeLesson.content || '' }} 
                />
                
                <div className="mt-24 pt-10 border-t border-white/5 flex items-center justify-between">
                   <div className="text-xs text-gray-600 font-medium">Dark Stage • {selectedModule.title}</div>
                   <div className="flex gap-4">
                      <button className="text-xs text-gray-500 hover:text-white transition-colors">Compartilhar</button>
                      <button className="text-xs text-gray-500 hover:text-white transition-colors">Comentar</button>
                   </div>
                </div>
              </div>
            ) : (
              <div className="animate-fadeIn">
                <div className="mb-12">
                   <h1 className="text-5xl font-bold tracking-tight mb-4">Dark Stage Platform</h1>
                   <p className="text-xl text-gray-500">Seu ambiente de trabalho para escalar operações Dark.</p>
                </div>

                <div className="relative rounded-3xl overflow-hidden mb-16 border border-white/5 shadow-2xl group cursor-pointer">
                  <img src="https://i.imgur.com/1BEvTCp.png" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700" alt="Cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MODULES.map(m => (
                    <div 
                      key={m.id} 
                      onClick={() => { setSelectedModule(m); if(m.lessons.length > 0) setSelectedLessonId(m.lessons[0].id); toggleModuleExpansion(m.id); }}
                      className="group p-6 bg-[#202020] border border-white/5 rounded-2xl hover:bg-[#252525] hover:border-white/10 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-4 mb-3">
                         <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                           <ICONS.PaperAirplane className="w-4 h-4 text-gray-400 group-hover:text-white" />
                         </div>
                         <h3 className="font-bold text-sm tracking-tight">{m.title}</h3>
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2">{m.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        
        .notion-style-content { font-size: 16px; color: #d3d3d3; line-height: 1.6; }
        .notion-style-content p { margin-bottom: 1.25em; margin-top: 1.25em; }
        .notion-style-content h1, .notion-style-content h2, .notion-style-content h3 { color: #ffffff; font-weight: 700; margin-top: 2em; margin-bottom: 0.5em; letter-spacing: -0.02em; }
        .notion-style-content h1 { font-size: 1.875em; }
        .notion-style-content h2 { font-size: 1.5em; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.3em; }
        .notion-style-content h3 { font-size: 1.25em; }
        .notion-style-content strong { color: #ffffff; font-weight: 800; }
        .notion-style-content a { color: inherit; text-decoration: underline; text-underline-offset: 4px; text-decoration-color: rgba(255,255,255,0.2); transition: all 0.2s; font-weight: 600; }
        .notion-style-content a:hover { text-decoration-color: #ffffff; }
        .notion-style-content ul, .notion-style-content ol { margin-left: 1.5em; margin-bottom: 1.25em; }
        .notion-style-content li { margin-bottom: 0.5em; position: relative; }
        
        .notion-style-content blockquote { border-left: 3px solid #ffffff; padding-left: 1.25em; font-style: italic; color: #a0a0a0; margin: 2em 0; }
        .notion-style-content img { border-radius: 8px; margin: 2em auto; display: block; box-shadow: 0 20px 50px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.05); }
        
        .notion-style-content button, .notion-style-content .block-button { 
          display: inline-block; padding: 12px 24px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); 
          border-radius: 8px; font-weight: 700; font-size: 14px; color: #fff; text-transform: uppercase; letter-spacing: 0.05em;
          margin: 1em 0; cursor: pointer; transition: all 0.2s;
        }
        .notion-style-content button:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); transform: translateY(-1px); }
        
        @media (max-width: 768px) {
          .w-64 { width: 100%; position: absolute; z-index: 100; height: 100%; }
          .max-w-[900px] { padding-left: 24px; padding-right: 24px; }
        }
      `}</style>
    </div>
  );
};

export default App;
