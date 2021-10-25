import express, {Request , Response} from "express";
import { Todo } from "../model/user_model";

const router = express.Router();

//buat isi-post data
router.post("/add", async(req: Request, res: Response)=>{
    const {title, description} = req.body;
   // const dataItem = Todo.set({title, description});
    const dataItem = new Todo(
        {
            title: req.body.title,
        description: req.body.description
        }
    );
    await dataItem.save();
    return res.status(200).json({
        data: dataItem
    });
});

router.get("/", async(req: Request, res: Response)=>{
    try {
        const dataItems = await Todo.find({}        
        );

        res.status(200).json({
            data: dataItems
        });
        
    } catch (error) {
        console.log(error)
    }
});
//hapus
router.delete("/hapus", async(req: Request, res: Response)=>{
   
        const datanya = {
            title: req.body.title
        }
        const dataItems = await Todo.deleteOne(datanya        
        ).then((data)=>res.json({
            data: data
        })).catch((err)=>{
            return res.send(err);
        });

        
        
    
});
//Ubah
router.put("/ubah", async(req: Request, res: Response)=>{
   
    const datanya = {
        title: req.body.title
    }

    const ygdiubah = {
       // title: req.body.title,
        description: req.body.description,
    }
    const dataItems = await Todo.updateOne(datanya        
    , ygdiubah, {
        new: true
    }).then((data)=>res.json({
        data: data
    })).catch((err)=>{
        return res.send(err);
    });

    
    

});


export {router};
// router.get("/",(req: Request, res: Response)=>{
//     res.json({
//         pesan: 'Ini hasil responnya',
//     });
// });

// router.post("/pos",(req: Request, res: Response)=>{
//     const {nama, email} = req.body;
//     console.log(nama);
//     console.log(email);
//     res.json({
//        pengguna:[
//            nama, email
//        ]
//     });
// });

// router.get("/tetek",(req: Request, res: Response)=>{
//     res.json({
//         pesan: 'Ini hasil responnya halaman tetek',
//     });
// });

// router.get("/profile",(req: Request, res: Response)=>{
//     res.json({
//         pesan: 'Ini hasil respon hal profile',
//     });
// });
