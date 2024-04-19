require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookeiParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./router/index')

const PORT = process.env.PORT;
const baseURL = process.env.LOCAL_CLIENT_URL;

const app = express();
app.use(express.json());
app.use(cookeiParser());
app.use(cors({
   credentials: true,
   origin: baseURL
}));
app.use('/api', router)

const options = {
   dbName: 'potatoe'
}

const start = async () => {
     try{
         await mongoose.connect(process.env.DB_URL, options)
         app.listen(PORT, () => console.log(`Server sterted on PORT ${PORT}`))
     }
     catch(e){
         mongoose.connection.on('error', err => {
            console.error('MongoDB conect error: $(err)');
         })
         console.log(e)
     }
}
start()