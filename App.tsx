
import React, { useState, useEffect, useRef } from 'react';
import { ICONS, SOCIAL_LINKS } from './constants';
import { MODULES } from './data';
import { Module, Student } from './types';

const App: React.FC = () => {
  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);
  
  // Student Management State
  const [students, setStudents] = useState<Student[]>([]);
  const [isAddingStudent, setIsAddingStudent] = useState<boolean>(false);
  const [newStudent, setNewStudent] = useState({ name: '', email: '', password: '' });
  const [showNewStudentPassword, setShowNewStudentPassword] = useState<boolean>(false);

  // App Navigation State
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [readLessons, setReadLessons] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Persistence Logic
  useEffect(() => {
    // Load Students
    const savedStudents = localStorage.getItem('dark_stage_students');
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    } else {
      // Default Admin
      const initialAdmin: Student[] = [{ 
        id: '1', 
        name: 'Admin Principal', 
        email: 'admin@darkstage.com', 
        password: 'admin123', 
        dateAdded: new Date().toLocaleDateString() 
      }];
      setStudents(initialAdmin);
      localStorage.setItem('dark_stage_students', JSON.stringify(initialAdmin));
    }

    // Load Login Session
    const session = localStorage.getItem('dark_stage_session');
    if (session) {
      setIsLoggedIn(true);
      setCurrentUser(session);
    }

    // Load Progress
    const savedProgress = localStorage.getItem('dark_stage_read_lessons');
    if (savedProgress) {
      setReadLessons(JSON.parse(savedProgress));
    }
  }, []);

  // Login Handler
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    // Validate email and password
    const allowed = students.find(s => 
      s.email.toLowerCase() === email.toLowerCase() && 
      s.password === password
    );
    
    if (allowed) {
      setIsLoggedIn(true);
      setCurrentUser(email);
      localStorage.setItem('dark_stage_session', email);
    } else {
      alert("Acesso negado. E-mail ou senha incorretos.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setIsAdminMode(false);
    localStorage.removeItem('dark_stage_session');
  };

  // Helper to generate a random password
  const generateRandomPassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let pass = "";
    for (let i = 0; i < 8; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setNewStudent(prev => ({ ...prev, password: pass }));
  };

  // Student Management Functions
  const addStudent = () => {
    if (!newStudent.name || !newStudent.email || !newStudent.password) {
      alert("Preencha todos os campos, incluindo a senha do aluno.");
      return;
    }
    
    const studentToAdd: Student = {
      id: Math.random().toString(36).substr(2, 9),
      name: newStudent.name,
      email: newStudent.email,
      password: newStudent.password,
      dateAdded: new Date().toLocaleDateString()
    };

    const updatedStudents = [...students, studentToAdd];
    setStudents(updatedStudents);
    localStorage.setItem('dark_stage_students', JSON.stringify(updatedStudents));
    
    setNewStudent({ name: '', email: '', password: '' });
    setIsAddingStudent(false);
    alert(`Aluno ${studentToAdd.name} adicionado com sucesso!`);
  };

  const removeStudent = (id: string) => {
    if (id === '1') {
      alert("O administrador principal não pode ser removido.");
      return;
    }
    if (confirm('Deseja realmente remover este aluno? Ele perderá o acesso imediato.')) {
      const updated = students.filter(s => s.id !== id);
      setStudents(updated);
      localStorage.setItem('dark_stage_students', JSON.stringify(updated));
    }
  };

  // Handle in-app navigation
  useEffect(() => {
    const handleInAppNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const moduleToNavigate = target.closest('[data-navigate-module]')?.getAttribute('data-navigate-module');
      
      if (moduleToNavigate) {
        const module = MODULES.find(m => m.id === moduleToNavigate);
        if (module) {
          setSelectedModule(module);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('click', handleInAppNavigation);
    }
    return () => {
      if (container) {
        container.removeEventListener('click', handleInAppNavigation);
      }
    };
  }, [selectedModule]);

  const toggleRead = (lessonId: string) => {
    setReadLessons(prev => {
      const newState = prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId) 
        : [...prev, lessonId];
      localStorage.setItem('dark_stage_read_lessons', JSON.stringify(newState));
      return newState;
    });
  };

  const handleModuleClick = (module: Module) => {
    setSelectedModule(module);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- VIEWS ---

  const renderLogin = () => (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-md animate-fadeIn z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black font-black text-2xl shadow-2xl mx-auto mb-4">DS</div>
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">Dark Stage™</h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Acesso Restrito a Alunos</p>
        </div>

        <div className="bg-[#111] p-8 rounded-2xl border border-white/5 shadow-2xl">
          <p className="text-orange-500 text-sm font-bold text-center mb-6 uppercase tracking-tight">Para continuar, faça login ou registre-se.</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">E-mail</label>
              <input 
                name="email"
                type="email" 
                required
                placeholder="Seu e-mail cadastrado"
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Senha</label>
              <div className="relative">
                <input 
                  name="password"
                  type={showLoginPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors pr-12"
                />
                <button 
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                >
                  {showLoginPassword ? <ICONS.EyeOff className="w-5 h-5" /> : <ICONS.Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-4 rounded-xl transition-all shadow-lg active:scale-95 uppercase tracking-widest text-xs"
            >
              Entrar na Plataforma
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors uppercase font-bold tracking-widest">Esqueceu sua senha? Clique aqui</a>
          </div>
        </div>
        
        <p className="text-center mt-10 text-[10px] text-gray-700 font-bold uppercase tracking-[0.4em]">DARK STAGE PLATFORM © 2026</p>
      </div>
    </div>
  );

  const renderAdmin = () => (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl font-black uppercase italic tracking-tighter">Gestão de Alunos</h1>
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Controle de acesso à plataforma</p>
        </div>
        <button 
          onClick={() => setIsAddingStudent(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
        >
          <ICONS.Plus className="w-4 h-4" />
          Adicionar Aluno
        </button>
      </div>

      <div className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <th className="px-6 py-4">Nome do Aluno</th>
                <th className="px-6 py-4">E-mail</th>
                <th className="px-6 py-4">Senha</th>
                <th className="px-6 py-4">Início</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {students.map(student => (
                <tr key={student.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-black text-[10px]">{student.name.charAt(0)}</div>
                      <span className="text-sm font-bold text-gray-200">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400">{student.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-mono tracking-widest">
                    {currentUser === 'admin@darkstage.com' ? student.password : '••••••'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{student.dateAdded}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => removeStudent(student.id)}
                      className="p-2 text-gray-600 hover:text-red-500 transition-colors"
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

      {isAddingStudent && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-end">
          <div className="w-full max-w-md h-full bg-[#111] border-l border-white/10 p-10 animate-slideLeft">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl font-black uppercase italic">Novo Aluno</h2>
              <button onClick={() => setIsAddingStudent(false)} className="text-gray-500 hover:text-white">✕</button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Nome do Aluno</label>
                <input 
                  type="text" 
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                  placeholder="Ex: João Silva"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">E-mail</label>
                <input 
                  type="email" 
                  value={newStudent.email}
                  onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                  placeholder="Ex: joao@gmail.com"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Senha do Aluno</label>
                <div className="flex gap-2 relative">
                  <input 
                    type={showNewStudentPassword ? "text" : "password"} 
                    value={newStudent.password}
                    onChange={(e) => setNewStudent({...newStudent, password: e.target.value})}
                    placeholder="Defina uma senha"
                    className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 pr-24"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button 
                      type="button"
                      onClick={() => setShowNewStudentPassword(!showNewStudentPassword)}
                      className="p-1 text-gray-600 hover:text-white transition-colors"
                    >
                      {showNewStudentPassword ? <ICONS.EyeOff className="w-5 h-5" /> : <ICONS.Eye className="w-5 h-5" />}
                    </button>
                    <button 
                      onClick={generateRandomPassword}
                      className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-[8px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                      Gerar
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20 text-xs text-blue-400 font-medium leading-relaxed">
                <span className="font-black text-white italic">AVISO IMPORTANTE:</span> A lista de alunos é salva localmente. Para o aluno logar do celular dele, você precisa conectar um banco de dados (Supabase).
              </div>

              <div className="pt-10 flex gap-3">
                <button 
                  onClick={() => setIsAddingStudent(false)}
                  className="flex-1 bg-white/5 hover:bg-white/10 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
                >
                  Cancelar
                </button>
                <button 
                  onClick={addStudent}
                  className="flex-1 bg-green-600 hover:bg-green-500 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-green-900/20"
                >
                  Salvar Aluno
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderHome = () => (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fadeIn">
      <div className="relative rounded-xl overflow-hidden mb-8 shadow-2xl border border-white/5">
        <img 
          src="https://picsum.photos/seed/darkstage/1200/500?grayscale" 
          alt="Dark Stage Banner" 
          className="w-full h-auto object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2 uppercase italic">DARK STAGE™</h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-md font-black leading-tight uppercase tracking-widest">
            O TREINAMENTO DO CRIADOR DE SUCESSO QUE TE LEVARÁ PARA O PRÓXIMO ESTÁGIO.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="text-sm text-gray-400">
            <span>por </span>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline cursor-pointer">@omentordigitalll</a>
            <span className="mx-1">|</span>
            <span className="text-gray-500">Mentoria Dark Stage</span>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">
          <strong className="text-white">Treinamento</strong> de especialização em posicionamento de <strong>perfis Dark iniciantes</strong>, auxiliando na <strong className="text-white">estruturação</strong> e no <strong className="text-white">impulsionamento de vendas</strong>.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2 uppercase tracking-tighter italic">Ferramentas & Suporte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 group">
              <ICONS.Instagram className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
              <div>
                <div className="text-sm font-black uppercase tracking-tight">Meu Instagram! →</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Acompanhe as estratégias.</div>
              </div>
            </a>
            <a href={SOCIAL_LINKS.support} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 group">
              <ICONS.Phone className="w-5 h-5 text-gray-400 group-hover:text-green-500" />
              <div>
                <div className="text-sm font-black uppercase tracking-tight">Suporte Direto →</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Tire todas suas dúvidas.</div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-black text-white mb-6 uppercase tracking-widest flex items-center justify-between border-b border-white/5 pb-2">
            <span>CONTEÚDO DO TREINAMENTO</span>
            <ICONS.Check className="w-4 h-4 text-gray-600" />
          </h2>

          <div className="grid gap-3">
            {MODULES.map((module) => (
              <button
                key={module.id}
                onClick={() => handleModuleClick(module)}
                className="group flex flex-col p-4 bg-[#141414] hover:bg-[#1a1a1a] rounded-xl transition-all border border-white/5 text-left w-full relative overflow-hidden active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors border border-white/5">
                    <ICONS.PaperAirplane className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white uppercase tracking-widest">{module.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">{module.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-4 text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${module.lessons.length > 0 && module.lessons.every(l => readLessons.includes(l.id)) ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-gray-600'}`} />
                    <span className={module.lessons.length > 0 && module.lessons.every(l => readLessons.includes(l.id)) ? 'text-green-500' : 'text-gray-500'}>
                      {module.lessons.length > 0 && module.lessons.every(l => readLessons.includes(l.id)) ? 'Concluído' : 'Disponível'}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderModuleView = (module: Module) => {
    const activeLessons = module.lessons.filter(l => !!l.content);
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn" ref={containerRef}>
        <button onClick={handleBackToModules} className="flex items-center gap-2 text-gray-500 hover:text-white mb-8 transition-colors group">
          <ICONS.ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Voltar para Início</span>
        </button>
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 border-l-4 border-blue-600 pl-6 py-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic">{module.title}</h1>
            <p className="text-gray-500 font-black uppercase tracking-widest text-xs mt-1">{module.description}</p>
          </div>
        </div>
        <div className="grid gap-12">
          {activeLessons.map((lesson) => (
            <div key={lesson.id} className="flex flex-col p-6 md:p-10 bg-[#121212] rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 border-b border-white/5 pb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                     {readLessons.includes(lesson.id) && <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[10px] font-black rounded uppercase tracking-widest border border-green-500/20">Concluído</span>}
                     <h3 className="text-2xl font-black text-white tracking-tight uppercase">{lesson.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 font-black uppercase tracking-widest italic">{lesson.description}</p>
                </div>
                <button onClick={() => toggleRead(lesson.id)} className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${readLessons.includes(lesson.id) ? 'bg-green-500/10 text-green-500 border border-green-500/30' : 'bg-white/5 text-gray-500 border border-white/10 hover:bg-white/10 hover:text-white'}`}>
                  <ICONS.Check className="w-4 h-4" />
                  {readLessons.includes(lesson.id) ? 'Lido' : 'Marcar Lido'}
                </button>
              </div>
              <div className="prose prose-invert max-w-none text-gray-300 lesson-content" dangerouslySetInnerHTML={{ __html: lesson.content || '' }} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!isLoggedIn) return renderLogin();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-600/50">
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={handleBackToModules}>
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black text-sm shadow-lg group-hover:rotate-6 transition-transform">DS</div>
          <div className="flex flex-col">
            <span className="font-black text-sm tracking-[0.2em] uppercase leading-none">Dark Stage™</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Área de Membros</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {currentUser === 'admin@darkstage.com' && (
            <button onClick={() => setIsAdminMode(!isAdminMode)} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${isAdminMode ? 'bg-orange-600 text-white' : 'bg-white/5 text-gray-400'}`}>
              <ICONS.Settings className="w-4 h-4" />
              {isAdminMode ? 'Sair do Admin' : 'Admin'}
            </button>
          )}
          <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-white transition-colors">Sair</button>
        </div>
      </nav>
      <main className="pb-24 pt-4">
        {isAdminMode ? renderAdmin() : (selectedModule ? renderModuleView(selectedModule) : renderHome())}
      </main>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideLeft { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slideLeft { animation: slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default App;
