const
   express = require('express');
   app = express(),
   PORT = 3000,
   path = require('path');


   // configurations

   // middleware
   app.use(express.static(path.join(__dirname, 'public')));
   app.use(express.static(path.join(__dirname, 'public', 'views')));

   // routes
   app.get('/', (req, res) => {
       res.sendFile('index.html');
   });


   
   
   app.listen(PORT, err => {
      console.log(err || `listening to port : ${PORT}`);
   });