import mongoose from "mongoose";

interface TodoI{
    title : string;
    description : string;
}

interface TodoDocument extends mongoose.Document{
    title : string;
    description : string;
}

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    }
}) 

interface todModelInterface extends mongoose.Model<TodoDocument>{
    set(x: TodoI) : TodoDocument;

}

todoSchema.statics.set = (x:TodoI)=>{
    return new Todo()
}

const Todo = mongoose.model<TodoDocument, todModelInterface> (
    "todo",todoSchema
)
   
Todo.set({
    title:"ini judulnya",
    description:"ini keterangannya"
})

export {Todo};