import * as multer from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

const createFolder = (folder: string) => {
  try {
    console.log('ð¾ Create a root uploads folder...');
    fs.mkdirSync(path.join(__dirname, '..', `uploads`)); // í´ë ë§ëë ëªë ¹ì´. dirnameì íì¬ í´ëì uploadë¼ë í´ëë¥¼ ë§ë¤ì´ë¼ë ìë¯¸
  } catch (error) {
    console.log('The folder already exists...');
  }
  try {
    console.log(`ð¾ Create a ${folder} uploads folder...`);
    fs.mkdirSync(path.join(__dirname, '..', `uploads/${folder}`));
  } catch (error) {
    console.log(`The ${folder} folder already exists...`);
  }
};

const storage = (folder: string): multer.StorageEngine => {
  createFolder(folder);
  return multer.diskStorage({
    destination(req, file, cb) {
      //* ì´ëì ì ì¥í  ì§
      const folderName = path.join(__dirname, '..', `uploads/${folder}`);
      cb(null, folderName);
    },
    filename(req, file, cb) {
      //* ì´ë¤ ì´ë¦ì¼ë¡ ì¬ë¦´ ì§
      const ext = path.extname(file.originalname);

      const fileName = `${path.basename(
        file.originalname,
        ext,
      )}${Date.now()}${ext}`;

      cb(null, fileName);
    },
  });
};

// í´ë¹ íë í´ëì íì¼ì ì ì¥
export const multerOptions = (folder: string) => {
  const result: MulterOptions = {
    storage: storage(folder),
  };
  return result;
};
