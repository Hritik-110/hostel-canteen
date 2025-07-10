import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://rathorehritik022:FoodDilevry@cluster0.iy3hxac.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}


