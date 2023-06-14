import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const create = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

        await writeFile(pathToFile, 'I am fresh and young', { flag: 'ax' });

    } catch (error) {
        throw new Error('FS operation failed');
    }

};

await create();
