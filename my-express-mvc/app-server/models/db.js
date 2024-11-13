let mongoose = require('mongoose');
let dbUrl = "mongodb://localhost:27017/pawll-si52";
// let dbUrl ="mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2";

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
require("./mahasiswa");

