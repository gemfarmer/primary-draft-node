import 'dotenv/config';
console.log('Hello Node.js project.');
console.log(process.env.MY_SECRET);
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import * as path from 'path';
import models, { sequelize } from './models';
import routes from './routes';
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('brianhedberg'),
  };
  next();
});
app.use('/session', routes.session);
app.use('/api/users', routes.user);
app.use('/api/messages', routes.message);
app.use('/api/pools', routes.pool);
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});



const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

const createUsersWithMessages = async () => {
  await models.User.create(
    {
      username: 'rwieruch',
      messages: [
        {
          text: 'Published the Road to learn React',
        },
      ],
    },
    {
      include: [models.Message],
    },
  );

  await models.User.create(
    {
      username: 'brianhedberg',
      messages: [
        {
          text: 'Hello',
        },
        {
          text: 'WOrld',
        },
      ],
    },
    {
      include: [models.Message],
    },
  );

  await models.Pool.create(
    {
      name: 'First Pool',
    },
  );
};
