'use strict';

require('dotenv').config();
const server = require('./src/server.js');



const { db } = require('./src/models/index.model.js');
//the port should be from the .evn file
db.sync()
    .then(() => {
        server.start(process.env.PORT || 3000);
    })
    .catch(console.error);