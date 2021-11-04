import * as express from 'express';
import { MenuItem } from '@pop-menu/api-interfaces';

const app = express();

const menuItem: MenuItem = { imageUrl: 'https://mui.com/static/images/cards/paella.jpg', title: 'Shrimp and Chorizo Paella',  description:  'This impressive paella is a perfect party dish and a fun meal to share together. Add 1 cup of frozen peas along with the mussels, if you like. add 1.99 for add on' ,  price: 10 };

app.get('/api', (req, res) => {
  res.send(menuItem);  
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
