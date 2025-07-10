const mongoose = require('mongoose');
const connection=async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected successfully')
    } catch (error){
        console.log('MongoDB connection failed:', error)
        process.exit(1)
    }
}
module.exports = connection