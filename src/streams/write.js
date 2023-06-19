import path from 'node:path';
import { fileURLToPath } from 'url';
import { createWriteStream} from 'node:fs';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');

    const fileWriteStream = createWriteStream(pathToFile);

    process.stdin.on('data', (inputData) => {
        fileWriteStream.write(inputData);
    });

    process.on('SIGINT', () => {
        process.stdout.write('Goodbye!');
        process.exit();
    });
};

await write();
