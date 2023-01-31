import {connect, ConnectOptions ,} from 'mongoose'
import { Mongoose } from 'mongoose';
export const connectDB = ()=>{
    connect(process.env.MONGO_URI!,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    } as ConnectOptions).then(
        ()=> console.log('connection successful....'),
        (err)=> console.log(err)   
    )
}