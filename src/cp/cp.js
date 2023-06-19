import path from 'node:path';
import { fileURLToPath } from 'url';
import { spawn, fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'files', 'script.js');

    const child = fork(pathToFile, args);

};

// Put your arguments in function call to test this functionality
spawnChildProcess( [ 1234, 5678 ] );

