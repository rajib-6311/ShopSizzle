import express from 'express'
import { adminLogin, getUser, removeUser, updateUser, userLogin, userRegister } from '../controllers/userController.js';

const userRouter = express.Router()

userRouter.post('/register', userRegister)
userRouter.post('/login', userLogin)
userRouter.post('/admin', adminLogin)
userRouter.post('/remove', removeUser)
userRouter.put('/update/:id', updateUser)
userRouter.get('/users', getUser)

export default userRouter;