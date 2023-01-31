import {Router} from 'express'
import { sample_user } from '../data';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model';

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

router.post("/login",(req,res)=>{
    const body = req.body;
    const {email, password} = req.body;
    const user = sample_user.find(user => user.email === email && user.password === password);
   if(user){
   res.send(generateTokenResponce(user));
   } else{
    res.status(400).send('User is not find.')
   }

})

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

