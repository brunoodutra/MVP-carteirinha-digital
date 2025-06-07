import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import StudentForm from './components/StudentForm';
import SavedStudents from './components/SavedStudents';
import StudentCard from './components/StudentCard';
import { StudentProvider } from './context/StudentContext';

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto py-8 px-4">
            <Routes>
              <Route path="/" element={<MainMenu />} />
              <Route path="/register" element={<StudentForm />} />
              <Route path="/saved" element={<SavedStudents />} />
              <Route path="/card/:id" element={<StudentCard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;