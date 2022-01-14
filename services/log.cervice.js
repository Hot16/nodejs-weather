import chalk from 'chalk';

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + ' ' + error);
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
}

const printHelp = () => {
    console.log(
        chalk.bgCyan('HELP') + '\n' +
        'Без параметров\n' +
        '    -c [CITY]\n' +
        '    -h help\n' +
        '    -t [API_KEY]'
    );
}
export {printError, printSuccess, printHelp};