require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookeiParser = require('cookie-parser')

const PORT = process.env.PORT;
const app = express();

const start = async () => {
     try{
        app.listen(PORT, () => console.log(`Server sterted on PORT ${PORT}`))
     }
     catch(e){
        console.log(e)
     }
}
start()