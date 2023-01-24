const mongoose = require('mongoose');


// export const _configDB = mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(()=>{
//     console.log(`Connection successful...`)
// })

export const conDB = () => {
    let _configDB = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    if(_configDB.err){
        console.log('No connection');   
    }
    else{
        console.log('Connection successful.....');
        
    }
}

