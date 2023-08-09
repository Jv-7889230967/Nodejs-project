const mongoose=require("mongoose");

const DataSchema=mongoose.Schema(
    {
        image:
        {
            type:"String",
            format:"url"
        },
        shopname:{
            type:"string",
            unique:true,
            required:true,
        },
        description:{
            type:"String",
            required:true
        },
        category:{
            type:"String",
            required:true
        },
        owner:{
            type:"String",
            required:true
        },
        contact:{
            type:Number,
            required:true
        },
        address:{
            type:"String",
            required:true
        }

    },{timestamp:true}
)
const Data=mongoose.model("Data",DataSchema);
module.exports=Data;