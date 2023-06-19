import path from 'node:path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathSource = path.join(__dirname, 'files', 'archive.gz');
    const pathDestination = path.join(__dirname, 'files', 'fileToCompress.txt');

    const source = createReadStream(pathSource);
    const destination = createWriteStream(pathDestination);

    const unzip = createUnzip();

    try {
        await pipeline(source, unzip, destination);
    } catch (error) {
        console.error('error!', error);
        process.exitCode = 1;
    }
};

await decompress();
