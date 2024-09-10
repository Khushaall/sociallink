require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post'
        }
    ],
    profilepic: {
        type: String,
        default: "default.jpg"
    }
});

// Export the User model
module.exports = mongoose.model('user', userSchema);
