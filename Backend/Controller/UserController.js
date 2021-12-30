const UserModel = require("../Model/UserModel");

exports.Default= async (req,res)=>{
    const data= await UserModel.find();
    if(data.length!==0){
        return res.json(data);
    }
}

exports.addUser=(req,res)=>{
    const {User}=req.body;
    console.log(User);
    UserModel.create(User).then(()=>{
        res.json("Registerd SuccessFully!!!");
    });
}

exports.update=(req,res)=>{
    const {id,User}=req.body;
    UserModel.findByIdAndUpdate({
            _id:id
        },
        {
            name:User.name,
            email:User.email,
            password:User.password
        }
        ).then(()=>{
            res.json("Update SuccessFully!!!");
            console.log("Update SuccessFully!!!")
        }).catch((err)=>{
            console.log(err);
        });
}

exports.fetchUserFromId=async(req,res)=>{
    const id=req.params.id;
    const data= await UserModel.findById({
        _id:id
    });
    if(data!==null){
        return res.json(data);
    }
}

exports.delete=async(req,res)=>{
    const id=req.params.id;
    await UserModel.findByIdAndDelete({
        _id:id
    }).then((success)=>{
        return res.json("Deleted Your Profile SuccessFully :) !!");
    });
}

exports.checkLogin= async(req,res)=>{
    const {data}=req.body;
    const Logindata=await UserModel.findOne({
        email:data.email,
        password:data.password
    });
    if(Logindata!==null){
        return res.json({id:Logindata._id,status:1,name:Logindata.name});
    }
    return res.json(0);
}