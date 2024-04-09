// set up and connect our database

const mongoose = require('mongoose');
function connectToDatabase(){
    mongoose
    .connect('mongodb+srv://shah:shah@cluster0.8qdm2pm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.log(err));

}

module.exports = {connectToDatabase};
