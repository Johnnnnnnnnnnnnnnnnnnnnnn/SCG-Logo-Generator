const inquirer = require('inquirer');
const fs = require('fs');
const { createSvg } = require('./lib/svgShapes');

async function promptUserInput() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ]);

  return userInput;
}

function createSvgFile(data) {
  const svgContent = createSvg(data);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

async function init() {
  const userInput = await promptUserInput();
  createSvgFile(userInput);
}

init();