import * as express from 'express';
import { MenuItem } from '@pop-menu/api-interfaces';
import getMenuItems from './menuItems'
const app = express();

const menuItems = getMenuItems()
console.log(menuItems);
app.get('/api', (req, res) => {
  res.send(menuItems as MenuItem[]);  
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
