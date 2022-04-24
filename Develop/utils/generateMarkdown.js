function generateMarkdown(data) {
  return `
  # ${data.title}
  
  https://img.shields.io/badge/license-${data.license}-success.svg

  <a href="https://opensource.org/licenses/${data.license}">LINK</a>
    
  # Description
  ${data.description}
  
  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#contributors)
  - [License](#license)
  - [Testing](#testing)
  
  
  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}


  ## Contributors
  ${data.contribution}


  ## License
  This project is covered under the ${data.license} license. Click the link above to learn more about the license.


  ## Testing
  ${data.test}



  # Questions? Contact Me!
  ## ${data.github}
  <a href="https://github.com/${data.github}">GitHub</a>
  ## Email
  ${data.email}


` 
}

module.exports = generateMarkdown;