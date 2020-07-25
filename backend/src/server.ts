import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import './database';
import uploadConfig from './config/upload';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/files', express.static(uploadConfig.directory));

app.listen(3333, () => {
  console.log('⚙️  Server is running on port 3333');
});
