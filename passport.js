const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const JwtStrategy = require('passport-jwt').Strategy;
// const { ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcrypt');
const {User,sequelize} = require('./dbconnect'); // Import your database models
// Local strategy for email and password authentication
passport.use(
  new LocalStrategy(
    { usernameField: 'email_id', passwordField: 'password' },
    async (email_id, password, done) => {
      try {
        const user = await User.findOne({ where: { email_id} });
        if (!user) {
          return done(null, false, { message: 'Invalid credentials' });
        }
        // Compare the provided password with the hashed password from the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return done(null, false, { message: 'Invalid credentials' });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// JWT strategy for token authentication
// passport.use(
//   new JwtStrategy(
//     {
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: 'keyhash121#$5%', 
//     },
//     async (payload, done) => {
//       try {
//         const user = await db.wmp.findOne(payload.email);

//         if (!user) {
//           return done(null, false);
//         }

//         return done(null, user);
//       } catch (error) {
//         return done(error);
//       }
//     }
//   )
// );

module.exports = passport;