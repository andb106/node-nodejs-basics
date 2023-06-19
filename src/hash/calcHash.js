import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    const fileData = await readFile(pathToFile);

    const hash = createHash('sha256');

    hash.update(fileData);

    console.log(hash.digest('hex'));
};

await calculateHash();
