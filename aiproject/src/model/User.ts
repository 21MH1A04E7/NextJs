import mongoose,{Document} from "mongoose";

export interface Message extends Document{
    content:string
    createdAt:Date
}
const messageSchema:mongoose.Schema<Message>=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpriy:Date;
    isVerified:boolean;
    isAcceptingMessage:boolean;
    messages:[Message]
}
const userSchema:mongoose.Schema<User>=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:true,
        minlength:3,
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        match:[/.+\@.+\..+/,'please use a valid email address'],
       
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:8
    },
    verifyCode:{
        type:String,
        required:[true,"Verify code is required"],
    },
    verifyCodeExpriy:{
        type:Date,
        required:[true,"Verify code expire date is required"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true
    },
    messages:[messageSchema]
})

// const messagesModel=(mongoose.models.Message as mongoose.Model<Message>)||(mongoose.model<Message>("Message",messageSchema))
// export default messagesModel
const userModel=(mongoose.models.User as mongoose.Model<User>)||(mongoose.model<User>("User",userSchema))
export default userModel