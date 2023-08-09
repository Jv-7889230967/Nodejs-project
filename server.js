const express=require("express");
const app=express();
const Userroutes=require("./Routes/Userroutes");
const Dataroutes=require("./Routes/Dataroutes");
const connectDB=require("./DB");
connectDB();

app.get("/",(req,res)=>{
    res.send("hiii");
})

app.use(express.json());
app.use("/api/user",Userroutes);
app.use("/api/shop",Dataroutes);

app.listen(5000, () => {
    console.log("Server connected and listening on port 5000");
  });
  