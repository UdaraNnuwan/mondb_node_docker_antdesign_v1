const Employee= require('../models/Empolyee')
//show the list with pagination
const index=(req,res,next)=>{
    if(req.query.page && req.query.limit){
        Employee.paginate({},{page:req.query.page, limit:req.query.limit})
        .then(response=>{
            res.json({
                response
            })
        })
        .catch(error=>{
            res.json({
                message:"error occurd"+error
            })
        })
    }else{
        Employee.find()
        .then(response=>{
            res.json({
                response
            })
        })
        .catch(error=>{
            res.json({
                message:"error occurd"+error
            })
        })
    }
   
}

//show the list of employees

const index2=(req,res,next)=>{
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"Error Occured"
        })
    })
}

//single employee data
const show=(req,res,next)=>{
    let employeeId=req.body.employeeID
    Employee.findById(employeeId)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message:"Error Occured"
        })
    })
}

//store employee data
const store=(req,res,next)=>{
    let emplyee=new Employee({
        name:req.body.name, 
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    })
//for single file upload
    // if (req.file){
    //     emplyee.avatar=req.file.path
    // }

// for multiple file upload

    if(req.files){
        let path ='';
        req.files.forEach(function(files,index,arr){
            path=path+files.path+','
        })
        path=path.substring(0,path.lastIndexOf(","))
        emplyee.avatar=path
    }
    emplyee.save()
    .then(response=>{
        res.json({
            message:"Data saved Successfully"
        })
    })
    .catch(error=>{
        res.json({
            message:"Error occured!"
        })
    })
}

//update employee data

const update=(req,res,next)=>{
    let employeeId=req.body.employeeID
    let updateData={
        name:req.body.name, 
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }
    Employee.findByIdAndUpdate(employeeId,{$set:updateData})
    .then(()=>{
        res.json({
            message:"Data Update Successfully"
        })
    })
    .catch(error=>{
        res.json({
            message:"Error occured!"
        })
    })
}

const deleteEmp=(req,res,next)=>{
    let employeeId=req.body.employeeID
    Employee.findByIdAndRemove(employeeId)
    .then(()=>{
        res.json({
            message:"Data Delete Successfully"
        })
    })
    .catch(error=>{
        res.json({
            message:"Error occured!"
        })
    })
}

module.exports={
index,update,show,store,deleteEmp,index2
}

