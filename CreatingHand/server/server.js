const express = require('express');
const cors = require('cors');
 const app = express();
require('dotenv').config();
const port = process.env.PORT;
// ! require('./config/product.config'); // This is new
app.use(cors());
//  ! app.use(express.json()); // This is new
//  ! app.use(express.urlencoded({ extended: true })); // This is new
//  ! require('./routes/product.routes')(app);
    
const server= app.listen(port, () => console.log(`Listening on port: ${port}`) );
const io = require('socket.io')(server, { cors: true });
io.on("connection", socket =>{
    console.log("Nice to meet you (shake hand) ")
    socket.on("Welcome", data => {
        console.log('Received Hello event with data:', data);
        socket.emit("Hello", data);
    })
})