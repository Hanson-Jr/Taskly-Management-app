//const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();
const mongoose = require('mongoose');

// Connect to database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            
           useNewUrlParser: true,

           useUnifiedTopology: true, 

  
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

// const connectDB = process.env.MONGODB_URI.replace( "<PASSWORD>", process.env.PASSWORD);
// mongoose.connect(connectDB, {
//     useNewUrlParser:true
//    })
//    .then (con => {
//     console.log (con.connection);
//     console.log('DB Connection successfully!')
//    })


module.exports = connectDB;