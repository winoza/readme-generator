// declare const for if user chooses a license in the prompt
// if none is selected, line will be blank, and if something is selected,
//insert line breaks at the beginning and end of strings for proper line spacing with \n
const licenseTitle = '\n![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)\n'
const licenseTOC = '\n* [License](#license)\n'

// function for licenseSection that will return a statement
const licenseSection = (lic) => {
    return '\n## License \n\nThis project is licensed under the ' + lic + ' license\n'
}

// markdown function that passes user answers from the prompt
// ternary operators used for answers.license and are spaced accordingly considering a "None" answer for the license will be a blank line
const markdown = (answers) => 
`# ${answers.title}
${answers.license !== 'None' ? licenseTitle : ''}
## Description

${answers.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${answers.license !== 'None' ? licenseTOC : ''}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${answers.installation}
\`\`\`

## Usage

${answers.usage}
${answers.license !== 'None' ? licenseSection(answers.license) : ''}
## Contributing

${answers.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${answers.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).
`;

// module export calling markdown from index
module.exports = markdown;
