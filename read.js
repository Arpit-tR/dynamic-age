 
 const fs = require('fs');

// Read the JSON file
let jsonData = JSON.parse(fs.readFileSync('birthdate.json', 'utf8'));

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

// Calculate the age and store it in the JSON object
jsonData.age = calculateAge(jsonData.birthdate);

// Save the updated JSON back to the file
fs.writeFileSync('birthdate.json', JSON.stringify(jsonData, null, 2), 'utf8');

console.log('Age updated in JSON:', jsonData);
