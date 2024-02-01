console.log("Code is working now");

/*Make a call to the file and get the following data from it:

All students with an average grade higher than 3
All female student names with an average grade of 5
All male student full names who live in Skopje and are over 18 years old
The average grades of all female students over the age of 24
All male students with a name starting with B and average grade over 2
*/

const STUDENTS_URL = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"


  
  // Fetch the JSON file
  fetch ('STUDENTS_URL')
    .then(res => res.json)
    .then(data => 
      {function calculateAverageGrade(grades) {
      return grades.reduce((acc, curr) => acc + curr, 0) / grades.length;
    }
      // Filter students with an average grade higher than 3
      const studentsWithAverageGradeAbove3 = data.filter(student => {
        const averageGrade = calculateAverageGrade(student.grades);
        return averageGrade > 3;
      });
     
  
      console.log('Students with average grade higher than 3:', studentsWithAverageGradeAbove3);
  
      // Filter female students with an average grade of 5
      const feemaleStudentsWithAverageGrade5 = data.filter(student => {
        const averageGrade = calculateAverageGrade(student.grades);
        return student.gender === 'Female' && averageGrade === 5;
      }) 
      
      data.map(student => student.name);
  
      console.log('Female student names with average grade of 5:', femaleStudentsWithAverageGrade5);
  
      // Filter male students from Skopje who are over 18 years old
      const maleStudentsFromSkopjeOver18 = data.filter(student => {
        return student.gender === 'Male' && student.age > 18 && student.city === 'Skopje';
      })
      
      data.map(student => `${student.firstName} ${student.lastName}`);
  
      console.log('Male student full names from Skopje over 18 years old:', maleStudentsFromSkopjeOver18);
  
      // Calculate the average grades of female students over the age of 24
      const averageGradesOfFemaleStudentsOver24 = data.filter(student => {
        return student.gender === 'Female' && student.age > 24;
      })
      
      data.map(student => calculateAverageGrade(student.grades));
  
      console.log('Average grades of female students over the age of 24:', averageGradesOfFemaleStudentsOver24);
  
      // Filter male students with a name starting with B and average grade over 2
      const maleStudentsWithNameStartingWithBAndAverageGradeOver2 = data.filter(student => {
        const averageGrade = calculateAverageGrade(student.grades);
        return student.gender === 'Male' && student.firstName.startsWith('B') && averageGrade > 2;
      });
  
      console.log('Male students with name starting with B and average grade over 2:', maleStudentsWithNameStartingWithBAndAverageGradeOver2);
    })
    
    
  