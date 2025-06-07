import React, { useContext, useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';
import { QRCodeSVG } from 'qrcode.react';

function StudentCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { students } = useContext(StudentContext);
  const [student, setStudent] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const foundStudent = students.find(s => s.id === id);
    if (foundStudent) {
      setStudent(foundStudent);
    } else {
      navigate('/saved');
    }
  }, [id, students, navigate]);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const saveCardAsImage = () => {
    // In a real implementation, we would use html2canvas or similar
    // to capture the card as an image and save it
    alert('Funcionalidade de salvar carteirinha como imagem será implementada em breve!');
  };

  if (!student) {
    return <div className="flex justify-center items-center h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>;
  }

  // Get just the year for displaying the academic year
  const currentYear = new Date().getFullYear();
  const validYear = new Date(student.validUntil).getFullYear();
  const academicYear = `${currentYear}/${validYear}`;
  
  // Brazilian flag SVG for the card
  const brFlag = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504" className="h-4 w-6">
      <path fill="#009b3a" d="M0 0h720v504H0z"/>
      <path fill="#fedf00" d="M360 252 0 0v504z"/>
      <circle cx="360" cy="252" r="129.6" fill="#002776"/>
      <path fill="#fff" d="M360 132.4a119.6 119.6 0 0 0-11.8 238.7 119.6 119.6 0 0 0 11.8-238.7zm0-3.3a122.9 122.9 0 0 1 0 245.8 122.9 122.9 0 0 1 0-245.8z"/>
    </svg>
  );

  // QR code data
  const qrCodeData = `https://carteirinha-digital.edu.br/verify/${student.id}`;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Carteirinha Nacional do Estudante
      </h2>

      <div 
        ref={cardRef}
        className="bg-white rounded-lg overflow-hidden shadow-2xl border border-blue-300 relative"
      >
        {/* Header with logos */}
        <div className="bg-blue-700 px-6 py-3 text-white flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-white text-blue-700 rounded-full h-10 w-10 flex items-center justify-center font-bold mr-3 text-sm">
              CIE
            </div>
            <div>
              <h3 className="text-lg font-bold leading-tight">Carteira de Identificação Estudantil</h3>
              <p className="text-xs">Documento Nacional do Estudante</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-sm font-semibold">
              <span className="block">Ano</span>
              <span className="block">{academicYear}</span>
            </div>
            {brFlag}
          </div>
        </div>

        {/* Main card content */}
        <div className="p-6 relative">
          <div className="flex">
            {/* Left column with photo and QR */}
            <div className="mr-6 flex flex-col items-center">
              <div className="w-32 h-40 bg-gray-200 rounded-sm overflow-hidden border-2 border-blue-700 mb-3">
                <img 
                  src={student.photo} 
                  alt={student.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-2 w-32 h-32 flex items-center justify-center">
                {/* Working QR Code */}
                <QRCodeSVG 
                  value={qrCodeData}
                  size={120}
                  level="H"
                  includeMargin={false}
                  bgColor="#ffffff"
                  fgColor="#000000"
                />
              </div>
            </div>

            {/* Right column with student info */}
            <div className="flex-grow">
              <div className="border-b-2 border-blue-600 pb-2 mb-2">
                <h4 className="text-xs text-gray-500">Nome</h4>
                <p className="text-lg font-bold">{student.name}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div>
                  <h4 className="text-xs text-gray-500">CPF</h4>
                  <p className="font-medium">•••.•••.•••-••</p>
                </div>
                
                <div>
                  <h4 className="text-xs text-gray-500">Data de Nascimento</h4>
                  <p className="font-medium">{formatDate(student.birthdate)}</p>
                </div>
                
                <div>
                  <h4 className="text-xs text-gray-500">Matrícula</h4>
                  <p className="font-medium">{student.studentId}</p>
                </div>
                
                <div>
                  <h4 className="text-xs text-gray-500">Curso</h4>
                  <p className="font-medium">{student.course}</p>
                </div>
                
                <div className="col-span-2">
                  <h4 className="text-xs text-gray-500">Instituição de Ensino</h4>
                  <p className="font-medium">{student.institution}</p>
                </div>
                
                <div>
                  <h4 className="text-xs text-gray-500">Validade</h4>
                  <p className="font-medium">{formatDate(student.validUntil)}</p>
                </div>
                
                <div>
                  <h4 className="text-xs text-gray-500">ID da Carteirinha</h4>
                  <p className="font-mono text-sm">{student.id.substring(0, 10)}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer with legal info and organization logos */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-500">Emitida em</div>
                <div className="font-semibold text-sm">{formatDate(student.createdAt)}</div>
              </div>
              
              <div className="text-right flex items-center space-x-2">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Amparado por</span>
                  <span className="font-semibold text-sm">Lei Federal nº 12.933/2013</span>
                </div>
                {/* Organization logos */}
                <div className="flex space-x-1">
                  <img src="/assets/images/logos/une-logo.svg" alt="UNE" className="h-6 w-6" />
                  <img src="/assets/images/logos/anpg-logo.svg" alt="ANPG" className="h-6 w-6" />
                  <img src="/assets/images/logos/ubes-logo.svg" alt="UBES" className="h-6 w-6" />
                </div>
              </div>
            </div>
            
            <p className="mt-3 text-xs text-center text-gray-500 italic">
              Documento oficial de identificação estudantil válido em todo território nacional.
              A falsificação deste documento constitui crime previsto no Código Penal Brasileiro.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => navigate('/saved')}
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 mr-4"
        >
          Voltar
        </button>
        <button
          onClick={saveCardAsImage}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Salvar Carteirinha
        </button>
      </div>
    </div>
  );
}

export default StudentCard;