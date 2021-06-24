const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async ()=>{
    mongoose.connect(db, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err =>{
        if(err) throw err ;
        console.log('Connected to MongoDB')
    })
}

module.exports = connectDB;