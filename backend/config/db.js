import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Lionheart:Duy02072003%23@cluster0.o9teqhg.mongodb.net/food-del').then(() => console.log("BD Connected"))
}