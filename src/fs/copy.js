import { readdir, mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToFolder = path.join(__dirname, 'files');
    const pathToFolderCopy = path.join(__dirname, 'files-copy');

    try {
        const items = await readdir(pathToFolder);

        await mkdir(pathToFolderCopy);

        for (const item of items) {
            const itemSrcPath = path.join(pathToFolder, item);
            const itemDestPath = path.join(pathToFolderCopy, item);
            await copyFile(itemSrcPath, itemDestPath);
          }

    } catch (error) {
        throw new Error('FS operation failed');
    }

};

await copy();
