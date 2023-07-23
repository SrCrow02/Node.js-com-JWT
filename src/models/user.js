const mongoose = require("../database/index")
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:  {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

//Acontece algo antes de salvar

UserSchema.pre('save', async(next) => {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    
    next();
});

console.log(err)



const User = mongoose.model('User', UserSchema);

module.exports = User;