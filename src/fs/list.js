import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToFolder = path.join(__dirname, 'files');

    try {
        const items = await readdir(pathToFolder);
        console.log(items);

    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
