// Function to create the README.md File
function generateMarkdown(data) {
  return `# ${data.title}

  ![Image Name ${data.license}](https://img.shields.io/badge/license-${data.license}-blue)

  ## Description
  ${data.description || ''}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation || ''}
  
  ## Usage
  ${data.usage || ''}
  
  ## License
  License under ${data.license}.
  
  ## Contributing
  ${data.contributing || ''}
  
  ## Tests
  ${data.tests || ''}
  
  ## Questions
  For additional questions, contact me at [${data.email || 'your-email@email.com'}](mailto:${data.email || 'your-email@email.com'}).
  Find me on GitHub: [${data.github || 'your-username'}](https://github.com/${data.github || 'your-username'})
  `;
}

module.exports = generateMarkdown;
