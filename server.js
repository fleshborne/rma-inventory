const express = require('express');
// const db = require('./models');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

const app = express();

const PORT = process.env.PORT || 8080;
const db = require('./models');

// const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use(
//   // eslint-disable-next-line comma-dangle
//   session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
// );

app.use('/api', apiRoutes);
app.use('/', htmlRoutes)
// router.get('/api', function (req,res) {
//   res.send(console.log('WOW IT WORKS!'));
// })
// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
