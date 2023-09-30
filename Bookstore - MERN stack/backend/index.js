import express from "express";
import {mongoDBURL, port} from "./config.js"; 
import cors from 'cors';
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import routes from './Routes/routes.js';
const app = express() ; 


// Middleware for parsing request body
app.use(express.json());


//Middleware for handling cors policy. allow all origins with default of Cors. 
app.use(cors());



app.get('/', (request , response)=> {
    console.log(request);
    return response.status(237).send('Welcome to MERN stack tutorial');
        

   

});
app.use('/books', routes);



mongoose.connect(mongoDBURL)
.then(()=> {
console.log("app connected to database");
app.listen(port , () => {
    console.log(`app is listening on ${port}`);

});
})
.catch((error)=> {
    console.log(error);
})
