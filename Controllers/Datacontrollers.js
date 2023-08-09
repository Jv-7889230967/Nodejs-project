const Data = require("../Models/Datamodel");
const asyncHandler = require("express-async-handler");
const mongodb=require("mongodb");

const Create = asyncHandler(async (req, res) => {
  const { image, shopname, description, category, owner, contact, address } = req.body;
  if (!shopname || !category || !owner || !contact || !address) {
    res.status(400); // 400 Bad Request is more appropriate for missing fields
    throw new Error("Please fill all fields");
  }

  const exist = await Data.findOne({ shopname });
  if (exist) {
    res.status(400);
    throw new Error("This shop already exists");
  }

  // Use Data.create instead of Data.Create
  const shop = await Data.create({
    image,
    shopname,
    description,
    category,
    owner,
    contact,
    address,
  });

  if (shop) {
    res.status(201).json({
      _id: shop._id,
      shopname: shop.shopname,
      category: shop.category,
      address: shop.address,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create shop");
  }
});

const All=asyncHandler(async (req,res)=>{
    const data=await Data.find();
    if(data)
    {
      res.status(200);
      res.send(data);
    }
    else
    {
        res.status(400);
        throw new Error("nothing found");
    }
})

const Update=asyncHandler(async (req,res)=>{
    try {

       const result=await Data.updateOne({_id:new mongodb.ObjectId(req.params.id)},{$set:req.body});
       if(result)
       {
        res.status(201).json({
            _id:result._id,
            shopname:result.shopname,
            address:result.address,
        })
       }    
    } 
    catch (error) {
        console.log(error);
    }
}
)
const Search=asyncHandler(async (req,res)=>{
    const exist=await Data.findOne(req.param.id);
    if(exist)
    {
        res.status(200).json({
            _id:exist._id,
            shopname:exist.shopname,
            address:exist.address,
            contact:exist.contact,
        })
    }
    else
    {
        res.status(400);
        throw new Error("nothing found");
    }
})
const Delete=asyncHandler(async (req,res)=>{
    const data = await Data.deleteOne({ _id:new mongodb.ObjectId(req.params.id)});
    if (!data) {
      return res.status(404).json({ error: 'Event not found' });
    }
    else{
        res.status(200);
        res.send("event deleted");
    }
})
  

module.exports = { Create,Update,All,Search,Delete};
