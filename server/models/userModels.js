import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique:true},
    password:{type: String, require:true},
    avatar:{type: String},
    userCart:{type: Object, default: {}}
},
{minimize: false}
);

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel;