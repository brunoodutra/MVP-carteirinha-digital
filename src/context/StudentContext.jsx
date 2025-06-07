import React, { createContext, useState, useEffect } from 'react';
import { getStudents, saveStudents } from '../utils/storage';

// Create context
export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  // Load students from local storage on component mount
  useEffect(() => {
    const storedStudents = getStudents();
    setStudents(storedStudents);
  }, []);

  // Save students to local storage whenever they change
  useEffect(() => {
    if (students.length > 0) {
      saveStudents(students);
    }
  }, [students]);

  // Add a new student
  const addStudent = (student) => {
    setStudents(prev => [...prev, student]);
  };

  // Remove a student
  const removeStudent = (id) => {
    setStudents(prev => prev.filter(student => student.id !== id));
    saveStudents(students.filter(student => student.id !== id));
  };

  // Update an existing student
  const updateStudent = (updatedStudent) => {
    setStudents(prev => 
      prev.map(student => 
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };

  // Get a student by ID
  const getStudentById = (id) => {
    return students.find(student => student.id === id);
  };

  return (
    <StudentContext.Provider 
      value={{ 
        students, 
        addStudent, 
        removeStudent, 
        updateStudent, 
        getStudentById 
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};