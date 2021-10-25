import mongodb from "mongodb";
import dotenv from "dotenv";

const uri = "mongodb+srv://papiGanteng:gadisa08@cluster0.wg9bk.mongodb.net/myDBs?retryWrites=true&w=majority";
const alamat = "mongodb+srv://papiGanteng:gadisa08@cluster0.wg9bk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const databaseName = "myDBs";
const namaDB = "myFirstDatabase";
const { MongoClient } = require("mongodb");
const mongol = require("mongoose");
dotenv.config();
console.log(alamat);
// export const mgDBSConn = async()=> 
//     MongoClient.connect(
//         process.env.MONGO_DB_URL as string,
//         //uri,
//         {
//             
//         },
//       async  (error, client)=>{
//             if(error) throw error;
//             console.log('Horee DB tersambung ke monggo');
//             const database = client.db()
//             const collection = database.collection("todo")

//           let dataMg =  await collection.find().toArray();
//           console.log(dataMg);
//         }
// );

export const postDBSConn = async()=> 
    MongoClient.connect(
        process.env.MONGO_DB_URL as string,
        //uri,
        {
            useUnifiedTopology : true
        },
      async  (error, client)=>{
            if(error) throw error;
           // console.log('Horee DB tersambung ke monggo');
            const database = client.db()
            const collection = database.collection("todo")

          let dataMg =  collection.insertMany(
            [
              {
                name : "Pipo Guantengnnn",
            email : "pps@gmail.com",
            class : 201
              },
              {
                name : "Pepo Guantengnnn",
            email : "pss@gmail.com",
            class : 203
              },
              {
                name : "Popo Guantengnnn",
            email : "pgp@gmail.com",
            class : 204
              },

            ]
          ,(err, datanya)=>{
              if(err) throw err;
              console.log(datanya);
          });
         
        }
);




