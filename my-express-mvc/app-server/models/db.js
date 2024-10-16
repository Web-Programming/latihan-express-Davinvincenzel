let mongoose = require('mongoose');
let dbUrl = 'mongodb://localhost:27017';

mongoose.connect(dbUrl,{
   // useNewUrlParser: true,
})

mongoose.connection.on('connected', () => {
    console.log('Connected To MongoDB');
});

mongoose.connection.on('error', (error) => {
    console.log('Connection Error :'+ error);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected From MongoDB');
});