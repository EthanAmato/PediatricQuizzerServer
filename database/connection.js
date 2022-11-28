import mongoose from "mongoose"; //allows us to connect express with mongodb


export default async function connect(){
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Mongoose Database Connected...")
}
