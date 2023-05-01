// Define a function to handle user input
function handleInput(input) {
  // Define variables and constants
  const help_message = `
  Available commands:
  - ls: lists all files in current directory
  - cat [filename]: read the provided file 
  `;
  let currentTime = new Date();
  let hash = btoa(currentTime.toString()).substr(0, 10);
  const flag = `YBN{h3h3_Y0u_f0und_m3_${hash}}`;

  // Remove any leading/trailing whitespace from the input
  input = input.trim();
  let cmd_output = `$> ${input}: `;

  // Split the input into a command and its arguments
  const parts = input.split(' ');
  const command = parts[0];
  const args = parts.slice(1);


  // Check the command and execute the appropriate action
  switch (command) {
    case 'man':
      cmd_output += help_message;
      break;
    case 'ls':
      if (args.length == 0){
        // Display a list of projects
        cmd_output += 'project-1.txt project-2.txt project-3.txt';
        break;
      } else {
        switch (args[0]) {
          case '-a':
            // Display a list of projects... with some extra secrets :)
            cmd_output += '. .. project-1.txt project-2.txt project-3.txt flag.txt';
            break;
          default:
            break;
        }
      }
      break;
    case 'cat':
      cmd_output += '<br>';
      // Display the contents of a project file
      const project = args[0];
      switch (project) {
        case 'project-1.txt':
          cmd_output += 'Description of project 1<br><img src="project-1-image.png">';
          break;
        case 'project-2.txt':
          cmd_output += 'Description of project 2<br><img src="project-2-image.png">';
          break;
        case 'project-3.txt':
          cmd_output += 'Description of project 3<br><img src="project-3-image.png">';
          break;
        case 'flag.txt':
          cmd_output += 'Nope, sadly this isn\'t a CTF challenge...<br>';
          cmd_output += 'You can have this flag though, although we\'re not too sure where this should belong<br>';
          cmd_output += flag;
          break;
        default:
          cmd_output += `Hmm, this project doesnt seem to exist... maybe come back later`;
      }
      break;
    default:
      // Display an error message for unknown commands
      displayOutput(`${command}: command not found`);
  }
  displayOutput(cmd_output);
}

// Define a function to display output in the terminal
function displayOutput(output) {
  const outputEl = document.createElement('pre');
  outputEl.innerHTML = output;
  document.getElementById('output').appendChild(outputEl);
}

// Attach an event listener to the input field to handle user input
const inputEl = document.getElementById('input');
inputEl.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const input = e.target.value;
    handleInput(input);
    e.target.value = '';
  }
});
