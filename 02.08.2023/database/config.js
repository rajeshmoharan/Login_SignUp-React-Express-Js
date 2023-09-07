const mongoose = require('mongoose');

const connect = async () => {
  
        await mongoose.connect(process.env.MONGO_URI)
        .then((conn) => {
            console.log(`DB connected ${conn.connection.host}`);
        })
        .catch((err) => {
            console.log('Error Found',err);
        })
}

module.exports = connect;