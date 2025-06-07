import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

function SavedStudents() {
  const { students, removeStudent } = useContext(StudentContext);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const handleDelete = (id, event) => {
    event.stopPropagation();
    if (window.confirm('Tem certeza que deseja excluir esta carteirinha?')) {
      removeStudent(id);
    }
  };

  if (students.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Nenhuma carteirinha encontrada</h2>
        <p className="text-gray-500 mb-6 text-center max-w-md">
          Você ainda não possui nenhuma carteirinha cadastrada. Crie uma agora mesmo!
        </p>
        <Link
          to="/register"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
        >
          Criar Nova Carteirinha
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">
        Carteirinhas Estudantis Salvas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map(student => (
          <Link 
            to={`/card/${student.id}`} 
            key={student.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
          >
            <div className="flex items-center p-4 border-b border-gray-200">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <img 
                  src={student.photo} 
                  alt={student.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-gray-800 mb-1 truncate">{student.name}</h3>
                <p className="text-sm text-gray-600 truncate">{student.institution}</p>
              </div>
            </div>
            
            <div className="p-4 flex-grow space-y-2">
              <p className="text-sm">
                <span className="font-semibold">Matrícula:</span> {student.studentId}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Curso:</span> {student.course}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Válido até:</span> {formatDate(student.validUntil)}
              </p>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-50">
              <span className="text-xs text-gray-500">
                Criado em: {formatDate(student.createdAt)}
              </span>
              <button
                onClick={(e) => handleDelete(student.id, e)}
                className="text-red-600 hover:text-red-800 transition duration-300"
                aria-label="Excluir"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SavedStudents;