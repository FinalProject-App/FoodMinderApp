




*********************** AUTHENTICATION VIA PASSPORT ***************


------------------> SERVER.JS <--------------------------
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });





app.post('/login',
  passport.authenticate('local', { successRedirect: '/',failureRedirect: '/login' }));   



app.post('/login',
  passport.authenticate('local', { 
  	failureFlash: 'Invalid username or password.',
  	successFlash: 'Welcome!'
  })
);
---------------------------------------------------------

*************************A*********************************  **********







*********************** AUTHENTICATION VIA REACT ROUTER DOM ***************

https://www.youtube.com/watch?v=VuCRP3RtYhI


https://www.youtube.com/watch?v=oRL-pttfNSc

****************************************************************************



*********************** AUTHENTICATION USING FIREBASE *************************
https://www.youtube.com/watch?v=XMuoDQy61ys
****************************************************************************