import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firsName: {
        type: String,
        require: true,
        min: 2,
        max: 50,
    },
    firsName: {
        type: String,
        require: true,
        min: 2,
        max: 50,
    },
},
    { timestamps: true }
);
const User = mongoose.Model("User", UserSchema);
export default User;