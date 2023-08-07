import mongoose from 'mongoose'



const transactionSchema = mongoose.Schema({
userId : String,
cost : Number,
products : {
    type : [mongoose.Types.ObjectId],
    of : Number
}
},{timestamps : true})

const Transaction = mongoose.model('Transaction',transactionSchema)

export default Transaction