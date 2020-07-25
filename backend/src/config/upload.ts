import path from 'path';
import {randomBytes} from 'crypto';
import {diskStorage} from 'multer';

const tempFolderPath = path.resolve(__dirname, '..', '..', 'temp');

export default {
  directory: tempFolderPath,
  storage: diskStorage({
    destination: tempFolderPath,
    filename(request, file, callback) {
      const fileHash = randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
