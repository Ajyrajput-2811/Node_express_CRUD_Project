const User = require('../models/user')

async function handleGetAllUser(req,res){
    const alldbuser = await User.find({})
     return res.json(alldbuser)
}

async function handelGetUserById(req,res){
    const user = await User.findById(req.params.id)
     if (!user) return res.status(404).json({msg:"Not Found"})   
     return res.json(user)
}

async function handelupdateUserById(req,res){
    const data = await User.findByIdAndUpdate(req.params.id,{firstname:"Jhon"})
    return res.status(200).json({msg:"updated successfully",data:data})
}

async function handelDeleteUserById(req,res){
    const data = await User.findByIdAndDelete(req.params.id)
    return res.json({status:"Success",data:data})
}

async function handleCreatNewUser(req,res){
    const body = req.body
     if(
         !body ||
         !body.first_name ||
         !body.last_name ||
         !body.email ||
         !body.gender 
     ){
         return res.status(400).json({msg:"All fields are required"})
     }
     const result = await User.create({
         firstname:body.first_name,
         lastname:body.last_name,
         email:body.email,
         gender:body.gender
     })
     console.log("result",result)
     return res.status(201).json({msg:"user created.",id:result._id})
}

module.exports = {
    handleGetAllUser,
    handelGetUserById,
    handelupdateUserById,
    handelDeleteUserById,
    handleCreatNewUser
};