const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://localhost');


mongoose.connection.once('open',function(){
console.log('Connection has been made');


}).on('error',function(error){
    console.log('Connection error:', error);
}); 

const User = new mongoose.Schema({
    username: String,
    password: String
});

const Task = new mongoose.Schema({
    _id: Number,
    name: String,
    owner: User,
    creator: Boolean,
    cleared: Boolean
});