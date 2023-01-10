import chalk from 'chalk';

import randomColor from 'randomcolor';

console.log(process.argv[3]);
console.log(process.argv[2]);

const lum = process.argv[3];
const col = process.argv[2];

const color = randomColor({
  luminosity: lum,
  hue: col,
});

function colorAndLog(str) {
  console.log(chalk.hex(color).bold(str));
}

colorAndLog(`##############################
##############################
##############################
########              ########
########   ${color}    ########
########              ########
##############################
##############################
##############################`);
