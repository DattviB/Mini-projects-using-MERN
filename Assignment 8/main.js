const express= require("express");
const app = express();
const mongoose=require("mongoose");
const bcrypt = require("bcrypt");
app.use(express.json());
const url = "mongodb://127.0.0.1:27017/userdb";
const saltRounds = 10;
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("CONNECTED TO DB!");
    }else{
        console.log("NOT CONNECTED TO DB. ERROR FOUND! "+err.message)
    }
})


//SCHEMA
 const sch={
     name:String,
     email:String,
     password:String,
     id:Number 
 }


const monmodel = mongoose.model("NEWCOL",sch);

//POST

app.post("/user/create",async(req,res)=>{

    console.log("Inside post");
    
    if(!req.body){
        res.send("Please enter the user details")
        return;
    }
    
    /**validation start */
    let email = req.body.email;
    let name = req.body.name;
    let pwd = req.body.password;

    if(!isNameValid(name)){
        return res.send("Please enter first name and last name (only alphabets allowed)");
         
       
   }
   if(!isEmailValid(email)){
    return res.send("User email is invalid (xyz@mail.com)");
        
       
       
   }
   if(!isPwdValid(pwd)){
    return res.send("Invalid password. Password should be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
       
   }
    /**validation end */
   //password hash
   const hashedPwd = await bcrypt.hash(pwd, saltRounds);
   console.log("encrypt password:"+hashedPwd);
   const data = new monmodel({
    id:req.body.id,
    name:req.body.name,
    password:hashedPwd,
    email:req.body.email
   
    
});
   const val = await data.save();
      res.send("User data saved!");
    // if(validateForm(req,res)){
    //     const val = await data.save();
    //     res.send("User data saved!");
    //     return;
    // }else{
    //     res.send("User details entered not proper.Please enter valid data");
    //     return;
    // }
   
})

//UPDATE
app.put("/user/edit/:id",async(req,res)=>{
    let updateId = req.params.id;
   // let updateEmail= req.params.email;
    //console.log("email from user:"+updateEmail)
    let updateName = req.body.name;
    let updatePassword = req.body.password;
    if(!isNameValid(updateName)){
        return res.send("Please enter first name and last name (only alphabets allowed)");
    }
    if(!isPwdValid(updatePassword)){
        return res.send("Invalid password. Password should be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
           
       }
    //hash password
    const hashedPwd = await bcrypt.hash(updatePassword, saltRounds);
    //find user
    monmodel.findOneAndUpdate({id:updateId},{$set:{name:updateName,password:hashedPwd}},{new:true},(err,data)=>{
        if(err){
            res.send("Please enter valid user id");
            return;
        }else{
           // console.log("id:"+id);
            //console.log("found data")
            if(data==null){
                res.send("User not found in the database");
                return;
            }else{
                res.send("User updated succesfully");
                return;
            }
        }
        
    })
   
})

//GET

app.get("/user/getAll",function(req,res){
    monmodel.find()
    .then(user=>{
        res.send(user);
        return;
    })
    .catch(err=>{
        res.send("Error in fetching user details")
        return;
    })
})

//DELETE
app.delete("/user/delete/:id",function(req,res){
    let delid = req.params.id;
    monmodel.findOneAndDelete(({id:delid}),(err,data)=>{
        if(err){
            res.send("Please enter valid user id");
            return;
        }else{
           
            if(data==null){
                res.send("User not found in the database");
                return;
            }else{
                console.log("USER deleted")
                res.send("User with id: "+delid+" deleted successfuly");
                return;
            }
        }
        
    })
})

function validateForm(request,response){
   

    let email = request.body.email;
    let name = request.body.name;
    let pwd = request.body.password;
    console.log("inside validate: "+email);
    
    if(!isNameValid(name)){
         response.send("Please enter first name and last name (only alphabets allowed)");
         return false;
        
    }
    if(!isEmailValid(email)){
         response.send("User email is invalid (xyz@mail.com)");
         return false;
        
        
    }
    if(!isPwdValid(pwd)){
         response.send("Invalid password. Password should be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
         return false;
    }
    return true;

}
function isNameValid(name){

   var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
   if(!name)
    return false;

    if(!regName.test(name))
        return false
    else
        return true;
}
function isPwdValid(pwd){
    const regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!regPass.test(pwd))
        return false;
    else
        return true;
        

}
function isEmailValid(email) {
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!email)
        return false;

    if(email.length>254)
        return false;

    var valid = emailRegex.test(email);
    if(!valid)
        return false;

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if(parts[0].length>64)
        return false;

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; }))
        return false;

    return true;
}
app.listen(9000,()=>{
    console.log("on port 9000")
})

