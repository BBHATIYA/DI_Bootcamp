import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/Customers.js'

dotenv.config();

const app = express();

app.listen(process.env.PORT||8080, ()=>{
  console.log(`run on port ${process.env.PORT||8080}`);
})

app.use(cors());
app.use(router);
