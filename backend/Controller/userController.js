const { avatarUpload, galleryUpload } = require("../utils/upload");
const user = require("./../models/User")
exports.addAvatar = async(req,res)=>{
    try {
        avatarUpload(req,res,async err=>{
            if(err){
                return res.status(400).json({
                  success:false,
                  message:"Multer error" +err
                })
            }
            console.log(req.file.filename);
            console.log(req.body);
            const result = await user.create({
                ...req.body,
                profile:`profile/${req.file.filename}`
            })
            res.json({
                success:true,
                message:"Avatar added successfully"
            })
        })
    } catch (err) {
        res.status(400).json({
            success:false,
            message:"error" +err
          })
    }
}

exports.getAllavatar = async(req,res)=>{
    try {
        const result = await user.find()

            res.json({
                success:true,
                message:"Avatar Fetched successfully",
                result
            })
        
    } catch (err) {
        res.status(400).json({
            success:false,
            message:"error" +err
          })
    }
}

exports.addToGallery = async(req,res)=>{
    try {
        galleryUpload(req,res,async err=>{
            if(err){
                return res.status(400).json({
                  success:false,
                  message:"Multer error" +err
                })
            }
            console.log(req.files);
            console.log(req.body);
               const d =[]
               for (let i = 0; i < req.files.length; i++) {
                       d.push(`gallery/${req.files[i].filename}`)                
               }
               console.log(d);
            const result = await user.create({
                ...req.body,
                docs:d
            })
            
            res.json({
                success:true,
                message:"docs added successfully",
                result
            })
        })
    } catch (err) {
        res.status(400).json({
            success:false,
            message:"error" +err
          })
    }
}

exports.getAllUsers = async(req,res)=>{
    try {
       
            const  result = await user.find()
            res.json({
                success:true,
                message:"users fetched successfully",
                result
            })
        
    } catch (err) {
        res.status(400).json({
            success:false,
            message:"error" +err
          })
    }
}

exports.destroyAllUsers = async(req,res)=>{
    try {
       
            const  result = await user.deleteMany()
            res.json({
                success:true,
                message:"all users deleted successfully",
                result
            })
        
    } catch (err) {
        res.status(400).json({
            success:false,
            message:"error" +err
          })
    }
}