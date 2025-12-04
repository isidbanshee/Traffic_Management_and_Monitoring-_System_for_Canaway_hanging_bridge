import mongoose from "mongoose";
export const dbConnection = async () => {
try{

    await mongoose.connect(process.env.DB_ACCESS);


}catch(error){
    console.error("Error:"+error.message);
    process.exit(1);

}
mongoose.connection.on('connected',() =>{
    console.log('MpngoDB connection error:', +err.message);

});
mongoose.connection.on('disconneted', () => {
    console.log('mongoDB disconnected');

});

}