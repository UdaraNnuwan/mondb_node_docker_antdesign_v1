const path =require('path')
const multer = require('multer');


var storefile=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        let ext=path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
}) 

var upload=multer({
    storage:storefile,
    fileFilter:function(req,file,callback){
        if
        (
            file.mimetype=="image/png" ||
            file.mimetype=="image/jpg" ||
            file.mimetype=="image/jpeg"
        )
        {
            callback(null,true)
        }
        else
        {
            console.log("supportted only jpg and png")
            callback(null,false)
        }
    },
    limits:{
        fileSize:1024*1024*4
    }
})
module.exports = upload