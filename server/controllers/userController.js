import validator from 'validator';
import bcrypt from 'bcrypt'
import userModel from "../models/userModels.js";

const userRegister = async (req, res) =>{
    try{
        const {name,email,password} = req.body;
       
        // Request body verification
        if(!name){
            return res.json({
                success:false,
                message: 'Name is required'
            })
        }
        if(!email){
            return res.json({
                success:false,
                message: 'Email is required'
            })
        }
        if(!password){
            return res.json({
                success:false,
                message: 'Password is required'
            })
        }

        // email validation
        if(!validator.isEmail(email)){
            return res.json({
                success: false,
                message: 'Please enter a valid email'
            })
        }

        // Cheek user status 
        const existingUser = await userModel.findOne({email});
        if(existingUser){
          return res.json({success:true, message: 'User already exist'})
        }

        // password validation
        if(password.length < 8){
            return res.json({
                success: true,
                message: 'Give password more than 8 charter'
            })
        }
        // Hashing user password
        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password, salt)

        // Register a new user
        const newUser = new userModel({
            name,
            email,
            password : encryptedPassword,
        })

        // save the user in database
        await newUser.save()

        res.json({
            success: true,
            message: 'Users register successfully'
        })
       
    }catch(error){
        console.log('User register ERROR', error)
        res.json({success:true, message:error?.error})
    }
}
const userLogin = async (req, res) =>{}
const adminLogin = async (req, res) =>{}
const removeUser = async (req, res) =>{}
const updateUser = async (req, res) =>{}
const getUser = async (req, res) =>{
    res.send('find user')
}

export{
    userLogin,
    userRegister,
    adminLogin,
    removeUser,
    updateUser,
    getUser
}