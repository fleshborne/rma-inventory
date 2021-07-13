const express = require('express');
const session = require('express-session');

// set route variables
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');
// require passport then initialize after express
const passport = require('./config/passport');

const PORT = process.env.PORT || 8080;
const db = require('./models');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);

// initialize passport for login session to be tracked and pass user data
app.use(passport.initialize());
app.use(passport.session());

// setting the route pathing
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)


// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
