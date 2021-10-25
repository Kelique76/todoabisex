import mongoose from 'mongoose';
import {router} from './route/route';
//const { MongoClient } = require("mongodb");

import express, {Request , Response} from "express";
// import {mgDBSConn} from "./database/data";
//import {postDBSConn} from "./database/data";

const appli = express()
appli.use(express.urlencoded({extended:false}));
appli.use(express.json());
//postDBSConn();
const uri = "mongodb+srv://papiGanteng:gadisa08@cluster0.wg9bk.mongodb.net/myDBs?retryWrites=true&w=majority";
mongoose.connect(
   //process.env.MONGO_DB_URL as string,
   uri,
   {
      useUnifiedTopology : true,
      useNewUrlParser:true
   } ,
   ()=>{
      console.log('Database terkoneksi!!');
   }
);
appli.use("/", router);
appli.listen(8080, ()=>{
   console.log('Hebat masuk ke port 8080');
});

