import path from 'node:path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'node:fs';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    const fileReadStream = createReadStream(pathToFile);

    fileReadStream.on('data', (data) => process.stdout.write(data));
};

await read();
