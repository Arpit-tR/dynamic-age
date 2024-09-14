const fs = require('fs'); // File System module to handle file operations

// Step 1: Read the JSON file
let jsonData = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Step 2: Function to calculate age
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

// Step 3: Calculate the age and update the JSON object
jsonData.age = calculateAge(jsonData.birthdate);

// Step 4: Save the updated JSON back to the file
fs.writeFileSync('birthdate.json', JSON.stringify(jsonData, null, 2), 'utf8');

console.log('Age updated in JSON:', jsonData);
