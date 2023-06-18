import path from 'node:path';
import { fileURLToPath } from 'url';
import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const performCalculations = async () => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'worker.js');

    const createWorker =  (data) => {
        return new Promise((resolve, reject) => {
        const worker = new Worker(pathToFile, { workerData: data });
        worker.on('message', resolve);
        worker.on('error', () => reject({status: 'error', data: null}));
        }
    )}

    const numberCPU = cpus().length;
    const increment = 10;

    const workersArray = Array(numberCPU).fill().map((_, index) => createWorker(index + increment));

    try {
        const res = await Promise.allSettled(workersArray);
        console.log(res.map((item) => item.value || item.reason));
    } catch (error) {
        console.log('error from Promise.allSettled', error)
    }
};


await performCalculations();
