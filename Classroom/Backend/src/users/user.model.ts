import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema(
    {
       username:{type:String,required:true},
       email:{type:String,required:true},
       password:{type:String,required:true},
       role:{type:String,required:true},
       salt:{type:String}
    }
);

export interface User extends mongoose.Document{
    username:string,
    email:string,
    password:string,
    role:string,
    salt:string,
  
  }
