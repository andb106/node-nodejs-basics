import path from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathSource = path.join(__dirname, 'files', 'fileToCompress.txt');
    const pathDestination = path.join(__dirname, 'files', 'archive.gz');

    const source = createReadStream(pathSource);
    const destination = createWriteStream(pathDestination);

    const gzip = createGzip();

    try {
        await pipeline(source, gzip, destination);
    } catch (error) {
        console.error('error!', error);
        process.exitCode = 1;
    }

};

await compress();
