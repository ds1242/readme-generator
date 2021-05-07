// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if(license) {
    let badge = [];
    for(let i = 0; i < license.length; i++){
      let licenseName = license[i].toLowerCase().split(' ')[0]
      badge.push('![badmath](https://img.shields.io/badge/license-'+ licenseName + '-brightgreen)')
    }
    console.log(badge);
    return badge;
  } else {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if(license) {
    renderLicenseBadge(license)
  } else {
    return 'No License Selected'
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## About/Description

  ${data.about}

  ## Table of Contents

  * [Installation](#installation)
  * [Languages](#languages)
  * [Credits](#Credits)
  * [License](#License)
  
  ## Installation

  ${data.installation}

  ## Languages

  ${data.languages.join(', ')}

  ## Credits

  ${data.credits}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contact for Questions

  Email Us At: ${data.email}

  Github Repo: ${data.link}



`;
}

module.exports = generateMarkdown;
