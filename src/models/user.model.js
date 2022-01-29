const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SALT = 10;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        min: 8,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    name: {
        type: String,
        max: 255,
    }

}, { timestamps: true });

//user arrow function may change 'this'
UserSchema.pre('save', function (next) {
    //get insert || update user
    const user = this;

    //check is modified password (or create new)
    if (!user.isModified('password')) return next();

    // generate salt 
    bcrypt.genSalt(SALT, (err, salt) => {
        if (err) return next(err);

        //hash password w/ new salt
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            //override current password
            user.password = hash;

            next();
        })
    })
})

// verify password
UserSchema.methods.verifyPassword = async function verifyPassword(data) {
    return bcrypt.compare(data, this.password);
}

module.exports = mongoose.model('user', UserSchema);
