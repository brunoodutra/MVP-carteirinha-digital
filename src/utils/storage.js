// Local storage utility functions for student data

export const saveStudents = (students) => {
  try {
    localStorage.setItem('digital-student-cards', JSON.stringify(students));
    return true;
  } catch (error) {
    console.error('Error saving students to local storage:', error);
    return false;
  }
};

export const getStudents = () => {
  try {
    const students = localStorage.getItem('digital-student-cards');
    return students ? JSON.parse(students) : [];
  } catch (error) {
    console.error('Error getting students from local storage:', error);
    return [];
  }
};