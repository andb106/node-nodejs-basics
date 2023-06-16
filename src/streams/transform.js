import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';

const transform = async () => {
    const transformReverse = new Transform({
        transform(chunk, encoding, callback) {
          const data = chunk.toString().trim().split('').reverse().join('') + '\n';
          callback(null, data);
        },
      });

    pipeline(
        process.stdin,
        transformReverse,
        process.stdout
    )
};

await transform();
