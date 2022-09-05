import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import customers_router from './routes/Customers.js'
import users_router from './routes/Users.js'

dotenv.config();

const app = express();

app.listen(process.env.PORT||8080, ()=>{
  console.log(`run on port ${process.env.PORT||8080}`);
})

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(customers_router);
app.use(users_router);
