
export interface Lesson {
  id: string;
  title: string;
  description: string;
  content?: string;
  videoUrl?: string;
  isRead?: boolean;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export interface Student {
  id: string;
  name: string;
  email: string;
  password: string;
  dateAdded: string;
}

export interface AppState {
  currentModuleId: string | null;
  currentLessonId: string | null;
  readLessons: string[];
  isLoggedIn: boolean;
  currentUser: string | null;
  students: Student[];
}
