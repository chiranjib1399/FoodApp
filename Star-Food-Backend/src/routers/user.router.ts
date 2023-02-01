import {Router} from 'express'
import { sample_user } from '../data';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { User, UserModel } from '../models/user.model';
import bcript from 'bcryptjs'

const router = Router();

router.get("/seed", asyncHandler( 
    async (req,res)=>{
    const userCount = await UserModel.countDocuments()
    if(userCount > 0){
        res.send('seed is done...')
        return;
    }
    await UserModel.create(sample_user);
    res.send('seed is Done!');
}))

router.post("/login", asyncHandler(
    async (req,res)=>{
    const {email, password} = req.body;
    const user = await UserModel.findOne({email, password});

    if(user){
        res.send(generateTokenResponce(user));
   } else{
    res.status(400).send('User is not find.')
   }

}))
router.post('/register', asyncHandler(
    async (req,res)=>{
        const {name, email, password, address} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            res.status(400).send('User is already exist please login');
            return;
        }
        const newUser:User ={
            id:'',
            name,
            email: email.toLowerCase(),
            password: password,
            address,
            isAdmin: false
        }
        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenResponce(dbUser));
    }
))

const generateTokenResponce = (user:any)=>{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "SomeRandomText" ,{
        expiresIn: "30d"
    });
    user.token = token;
    return user;
}

export default router;

