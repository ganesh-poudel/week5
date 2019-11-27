'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

<<<<<<< HEAD
app.use(express.static('uploads'));

=======
>>>>>>> 3fd37ad850ba2f3a6cd0e539f87d0a27976732a2
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));