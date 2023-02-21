const mongoose = require("mongoose")

const orderSchema= new mongoose.Schema({
   orderItems:{
   type:Object
   },
   address:{
    type:Object
   },
   status:{
    type:String,
    default:"pending"
   },
   totalPrice:{   
    type:Number
   },
   dateOrdered:{
    type:Date,
    default:Date()
   },
   dateDelivered:{
      type:Date, 
      default: new Date(new Date().setDate(new Date().getDate() + 7))
   },
   userId:{
      type:String
   },
   quantity:{
      type:Number
   },
   paymentType:{
      type:String 
   },
   discount:{
      type:Number,
      default:0
   },
   return:{
      type:Boolean,
      default:false
   },
   cancel:{
      type:Boolean,
      default:false
   },
   returnStatus:{
      type:Boolean,
      default:false,
   }
});

const  OrderModel = mongoose.model('orders', orderSchema);
module.exports=OrderModel;
