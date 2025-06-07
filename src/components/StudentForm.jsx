import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

function StudentForm() {
  const navigate = useNavigate();
  const { addStudent } = useContext(StudentContext);

  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    course: '',
    institution: '',
    birthdate: '',
    photo: null,
    photoPreview: null,
    validUntil: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          photo: file,
          photoPreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.studentId.trim()) newErrors.studentId = 'Matrícula é obrigatória';
    if (!formData.course.trim()) newErrors.course = 'Curso é obrigatório';
    if (!formData.institution.trim()) newErrors.institution = 'Instituição é obrigatória';
    if (!formData.birthdate) newErrors.birthdate = 'Data de nascimento é obrigatória';
    if (!formData.validUntil) newErrors.validUntil = 'Data de validade é obrigatória';
    if (!formData.photo) newErrors.photo = 'Foto é obrigatória';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Convert the photo to a base64 string for storage
      const reader = new FileReader();
      reader.onload = (e) => {
        const newStudent = {
          ...formData,
          id: Date.now().toString(),
          photo: e.target.result,
          createdAt: new Date().toISOString()
        };
        
        delete newStudent.photoPreview;
        
        addStudent(newStudent);
        navigate(`/card/${newStudent.id}`);
      };
      reader.readAsDataURL(formData.photo);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Cadastro de Nova Carteirinha Estudantil
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Foto
          </label>
          <div className="flex items-center space-x-4">
            <div className="w-32 h-40 bg-gray-200 flex items-center justify-center rounded overflow-hidden">
              {formData.photoPreview ? (
                <img src={formData.photoPreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
            </div>
            <div>
              <input 
                type="file" 
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden" 
                id="photo-upload" 
              />
              <label 
                htmlFor="photo-upload" 
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer transition duration-300"
              >
                Selecionar Foto
              </label>
              {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo}</p>}
              <p className="text-sm text-gray-500 mt-2">
                Recomendável: foto 3x4 em fundo branco
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="studentId" className="block text-gray-700 font-medium mb-2">
              Matrícula
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.studentId && <p className="text-red-500 text-sm mt-1">{errors.studentId}</p>}
          </div>

          <div>
            <label htmlFor="birthdate" className="block text-gray-700 font-medium mb-2">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.birthdate && <p className="text-red-500 text-sm mt-1">{errors.birthdate}</p>}
          </div>

          <div>
            <label htmlFor="institution" className="block text-gray-700 font-medium mb-2">
              Instituição de Ensino
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution}</p>}
          </div>

          <div>
            <label htmlFor="course" className="block text-gray-700 font-medium mb-2">
              Curso
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
          </div>

          <div>
            <label htmlFor="validUntil" className="block text-gray-700 font-medium mb-2">
              Válido até
            </label>
            <input
              type="date"
              id="validUntil"
              name="validUntil"
              value={formData.validUntil}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.validUntil && <p className="text-red-500 text-sm mt-1">{errors.validUntil}</p>}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Criar Carteirinha
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;