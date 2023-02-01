const { multidocUpload } = require("../utils/upload")
const multiDocs = require("./../models/Doc")
exports.addDocController = async (req,res)=>{
    try {
        multidocUpload(req,res,async (err)=>{
            if(err){
               return res.json({
                    success:false,
                    message:"multer Error" +err
                })
            }
            if(req.files.dob){
                req.body.userDob = `dob/${req.files.dob[0].filename}`
            }
            if(req.files.adhar) {
                req.body.userAdhar =`adhar/${req.files.adhar[0].filename}`
            }
            if(req.files.tc) {
                req.body.userTc =`tc/${req.files.tc[0].filename}`
            }
            const result = await multiDocs.create(req.body)
            res.json({
                success:true,
                message:"Doc Uploaded Successfully"
            })
        })
    } catch (error) {
        res.status(400).json({
            success:true,
            message:""
        })   
    }
}

exports.getAlldocsController = async(req,res)=>{
    try {
        const result =await multiDocs.find()
        res.json({
            success:true,
            message:"doc fetched successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            success:true,
            message:"multer error" +error
        }) 
    }
}