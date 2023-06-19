import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const res = await readFile(pathToFile, { encoding: 'utf8' });
        console.log(res);
    } catch (error) {
        throw new Error('FS operation failed');
    }

};

await read();
