import { rename as fsRename, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToFileOld = path.join(__dirname, 'files', 'wrongFilename.txt');
    const pathToFileNew = path.join(__dirname, 'files', 'properFilename.md');

    const isFileExist = async (pathToFile) => {
        try {
            await readFile(pathToFile);
            return true;
        } catch (error) {
            return false;
        }
    }

    try {

        if (await isFileExist(pathToFileNew)) {
            throw new Error;
        }

        await fsRename(pathToFileOld, pathToFileNew);

    } catch (error) {
        throw new Error('FS operation failed');
    }

};

await rename();
