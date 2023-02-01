const multer =require("multer")
const {v4:uuid} =require("uuid")
const fs = require("fs")
const path = require("path")
const storage = multer.diskStorage({
    filename:(req,file,cb)=>{
        const ext =path.extname(file.originalname)
        const allowedext = [".png", ".jpg", ".jpeg"]
        if(!allowedext.includes(ext)){
            cb("Invalid extension")
        }
        const fn =uuid()+ext
        cb(null,fn)
    },
    destination:(req,file,cb)=>{
        const loc = "public/profile"
        fs.mkdirSync(loc,{recursive:true})
        cb(null,loc)
    },
})

const multiStorage = multer.diskStorage({
    filename:(req,file,cb)=>{
        const ext =path.extname(file.originalname)
        const allowedext = [".png", ".jpg", ".jpeg",".pdf"]
        if(!allowedext.includes(ext)){
            cb("Invalid extension")
        }
        const fn =uuid()+ext
        cb(null,fn)
    },
    destination:(req,file,cb)=>{
        const loc = "public/gallery"
        fs.mkdirSync(loc,{recursive:true})
        cb(null,loc)
    },
})


const multidocUpload = multer.diskStorage({
    filename:(req,file,cb)=>{
        const ext =path.extname(file.originalname)
        const allowedext = [".png", ".jpg", ".jpeg",".pdf"]
        if(!allowedext.includes(ext)){
            cb("Invalid extension")
        }
        const fn =uuid()+ext
        cb(null,fn)
    },
    destination:(req,file,cb)=>{
        // const loc = "public/docs"
        if(file.fieldname === "dob"){
            loc = "public/dob"
        }
        if(file.fieldname === "adhar"){
            loc = "public/adhar"
        }
        if(file.fieldname === "tc"){
            loc = "public/tc"
        }
        fs.mkdirSync(loc,{recursive:true})
        cb(null,loc)
    },
})




exports.avatarUpload =multer({storage,limits:{fileSize:"1mb"}}).single("avatar")
exports.galleryUpload =multer({storage:multiStorage,limits:{fileSize:"1mb"}}).array("doc", 5)
exports.multidocUpload =multer({storage:multidocUpload,limits:{fileSize:"1mb"}}).fields([
    {name :"dob", maxCount:1},
    {name :"adhar", maxCount:1},
    {name :"tc", maxCount:1},

])